import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';
import { addUser } from '../thunks/addUser';
import { removeUser } from '../thunks/removeUser';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: [],
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
            // Update our state object however appropriate
            // to show the user what we are loading data
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(addUser.pending, (state, aciton) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, aciton) => {
            state.isLoading = false;
            state.data.push(aciton.payload);
        });
        builder.addCase(addUser.rejected, (state, aciton) => {
            state.isLoading = false;
            state.error = aciton.error;
        });

        builder.addCase(removeUser.pending, (state, aciton) => {
            state.isLoading = true;
        });
        builder.addCase(removeUser.fulfilled, (state, aciton) => {
            state.isLoading = false;
            // fix
            console.log(aciton);
        });
        builder.addCase(removeUser.rejected, (state, aciton) => {
            state.isLoading = false;
            state.error = aciton.error;
        });
    },
});

export const usersReducer = usersSlice.reducer;