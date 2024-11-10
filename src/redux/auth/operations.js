import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utility to add JWT
export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

// Utility to remove JWT
export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/users/signup", formData);

      // After successful registration, add the token to the HTTP header
      setToken(data.token);
      //token
      // :
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzMwYjg1MGM0OTVlZDZlMjVmMzkxMmYiLCJpYXQiOjE3MzEyNDYxNjB9.QCvvnkaXHbAEnhdhNsrajFpjpGBI-OYzqTelgQR3slw"
      // user
      // :
      // email
      // :
      // "tir21@gmail.com"
      // name
      // :
      // "Sam jacson"
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/users/login", formData);
      // After successful login, add the token to the HTTP header
      //       {
      //   "email": "string",
      //   "password": "string"
      // }
      console.log(data);

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await authInstance.post("/users/logout");
      // After successful logout, clear the token from the HTTP header
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      const response = await authInstance.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
