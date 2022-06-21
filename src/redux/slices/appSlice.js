import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.userData = payload.userData;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAPIResponse.fulfilled, (state, action) => {
        console.log("data fetched");
      })
      .addCase(getAPIResponse.rejected, (state, action) => {
        console.log("data not fetched");
      });
  },
});

//selectors
const selectUserData = (state) => state.app.userData;
//memoized selectors for derived data. NOTE: If the output returns the input directly then values will not be memoized
const selectFormattedUserData = createSelector([selectUserData], (userData) => {
  return "Formatted: " + userData;
});

//thunk function
const getAPIResponse = createAsyncThunk(appSlice.name + "/getAPIData", async (_, { getState, dispatch }) => {
  //api calls
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
});

export { selectUserData, selectFormattedUserData, getAPIResponse };
export default appSlice;
