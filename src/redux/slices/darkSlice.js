import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isDark: true,
}

const darkSlice = createSlice({
    name: "dark",
    initialState,
    reducers: {
        handleDark: (staet) => {
            staet.isDark = !staet.isDark
        }
    }
});

export const { handleDark } = darkSlice.actions

export default darkSlice.reducer