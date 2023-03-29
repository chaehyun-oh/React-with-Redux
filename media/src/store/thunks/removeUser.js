import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUser = createAsyncThunk('user/remove', async (user) => {
    const res = await axios.delete(`http://localhost:3005/users/${user.id}`);

    return res.data;
});

export { removeUser };