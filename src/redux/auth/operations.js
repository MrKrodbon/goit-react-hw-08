import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// Utility to add JWT
export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", formData);

      // After successful registration, add the token to the HTTP header
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", formData);

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    // After successful logout, clear the token from the HTTP header
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue(
        "Unable to refresh user. Not valid or empty token"
      );
    }

    try {
      setToken(persistToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
