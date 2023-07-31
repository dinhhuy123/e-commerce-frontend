import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '~/hooks';
import * as authService from '~/services/authService';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { setDataStorage, deleteDataStorage } = useLocalStorage();

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (token, axiosJWT) => {
    const response = await authService.getCurrentUser(token, axiosJWT);

    return response;
});

export const login = createAsyncThunk('auth/login', async (loginData) => {
    const response = await authService.login(loginData);
    return response;
});

export const logout = createAsyncThunk('auth/logout', async (token) => {
    const response = await authService.logout(token);

    return response;
});

const initialState = {
    isAuth: false,
    currentUser: {},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isAuth = !state.isAuth;
        },
        updateCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.isAuth = true;
                state.currentUser = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                const userData = action.payload.meta;
                if (userData?.accessToken) {
                    const token = userData.accessToken;
                    const dataStorage = { token };
                    console.log('dataStorage: ', dataStorage);
                    setDataStorage(dataStorage);
                }
                console.log(userData);
            })
            .addCase(logout.fulfilled, (state, action) => {
                if (!action?.payload) {
                    deleteDataStorage('token');
                    state.isAuth = false;
                    state.currentUser = {};
                    window.location.reload();
                }
            });
    },
});

export const { updateCurrentUser } = authSlice.actions;

export default authSlice.reducer;
