import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { albumsApi } from './apis/albumsApi';
import { usersReducer } from './slices/usersSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumsApi.middleware);
    }
});

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/removeUser'
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';