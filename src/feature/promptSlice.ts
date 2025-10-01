import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type inputChat = {
  value: string;
};

const initialState: inputChat = {
  value: "",
};

export const inputChatSlice = createSlice({
  name: "input-chat",
  initialState,
  reducers: {
    insert: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { insert } = inputChatSlice.actions;

export default inputChatSlice.reducer;
