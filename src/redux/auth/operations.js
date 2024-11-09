import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Utility to add JWT
export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

// Utility to remove JWT
export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = token;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk("auth/register", () => {
  async (user, thunkAPI) => {
    try {
      const response = axios.post("users/signup", { user });
      // After successful registration, add the token to the HTTP header
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  };
});

export const login = createAsyncThunk("auth/login", () => {
  async (credentials, thunkAPI) => {
    try {
      const response = axios.post("users/login", { credentials });
      // After successful login, add the token to the HTTP header
      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  };
});

export const logout = createAsyncThunk("auth/logout", () => {
  async (_, thunkAPI) => {
    try {
      axios.post("users/logout");
      // After successful logout, clear the token from the HTTP header
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  };
});

export const refresh = createAsyncThunk("auth/refresh", () => {
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      const response = axios.get("users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  };
});
