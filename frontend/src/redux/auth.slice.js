import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: "user",
  token: null,
  isAuth: null,
  errors: null,
  isLoading: false,
};

// Thunk for login
export const login = createAsyncThunk('auth/login', async (info, { rejectWithValue }) => {
  try {
    const res = await axios.post("http://localhost:5000/user/login", info);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data); // Return the error details
  }
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        localStorage.setItem("token", payload.token || "");
        localStorage.setItem("isAuth", "true");
        state.isLoading = false;
        state.token = payload.token;
        state.isAuth = true;
        state.errors = null;
      })


      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errors = payload || "Login failed";
        state.token = null;
        state.isAuth = true;
      })


      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      });

  },
});

export const AuthReducer = AuthSlice.reducer;
