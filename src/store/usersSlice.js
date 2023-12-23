import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        return data.users;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
        userId: null,
    },
    reducers: {
        getUsersById: (state, action) => {
            state.userId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error
            })
    },
})

export const { getUsersById } = usersSlice.actions;
export const usersReducer = usersSlice.reducer