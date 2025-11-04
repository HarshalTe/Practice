import { createSlice } from "@reduxjs/toolkit";

const Darslice = createSlice({
  name: "deopdown",
  initialState: {
    arrayfield: [{ filde1: "", filde2: "", drop1: "", drop2: "" }],
    drop1data: ["one", "two", "three", "four"],
    drop2data: [1, 2, 3, 4],
  },
  reducers: {
    add: (state) => {
      state.arrayfield.push({ filde1: "", filde2: "", drop1: "", drop2: "" });
    },   
    del: (state, actions) => {
      const { id } = actions.payload;
      state.arrayfield = state.arrayfield.filter((_, index) => index !== id);
    },
  },
});

export const { add, del } = Darslice.actions;
export default Darslice.reducer;


