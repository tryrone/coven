import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getArrivalData, getDepartureData } from '../services/Airline';

const initialState = {
  arrivalDataLoading: false,
  arrivalDataError: null,
  arrivalData: [],
  //      departureData
  departureDataLoading: false,
  departureDataError: null,
  departureData: [],
};

export const allArrivalData = createAsyncThunk(
  'airline/arrival',
  async (props) => {
    const response = await getArrivalData(props);
    return response.data;
  }
);
export const allDepartureData = createAsyncThunk(
  'airline/departure',
  async (props) => {
    const response = await getDepartureData(props);
    return response.data;
  }
);
export const clearDepartureData = createAsyncThunk(
  'airline/clearDepartureData',
  async (props) => {
    return initialState.departureData;
  }
);
export const clearArrivalData = createAsyncThunk(
  'airline/clearArrivalData',
  async (props) => {
    return initialState.arrivalData;
  }
);

const airlineSlice = createSlice({
  name: 'airline',
  initialState,
  extraReducers: {
    [allArrivalData.pending]: (state) => {
      state.arrivalDataLoading = true;
      state.arrivalDataError = null;
    },
    [allArrivalData.fulfilled]: (state, action) => {
      state.arrivalData = action.payload;
      state.arrivalDataLoading = false;
      state.arrivalDataError = null;
    },
    [allArrivalData.rejected]: (state, action) => {
      state.arrivalData = initialState.arrivalData;
      state.arrivalDataLoading = false;
      state.arrivalDataError = action.error.message || action.error;
    },
    //     departure data
    [allDepartureData.pending]: (state) => {
      state.departureDataLoading = true;
      state.departureDataError = null;
    },
    [allDepartureData.fulfilled]: (state, action) => {
      state.departureData = action.payload;
      state.departureDataLoading = false;
      state.departureDataError = null;
    },
    [allDepartureData.rejected]: (state, action) => {
      state.departureData = initialState.departureData;
      state.departureDataLoading = false;
      state.departureDataError = action.error.message || action.error;
    },
    [clearDepartureData.fulfilled]: (state, action) => {
      state.departureData = action.payload;
    },
    [clearArrivalData.fulfilled]: (state, action) => {
      state.arrivalData = action.payload;
    },
  },
});

export default airlineSlice.reducer;
