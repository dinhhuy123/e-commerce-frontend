import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { refreshToken } from '~/services/authService';
import { updateCurrentUser } from '~/redux/slices/authSlice';

const createAxios = (user, dispatch) => {
    console.log(user);
    const newInstance = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    });
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const decodeToken = jwt_decode(user?.currentUser.meta.accessToken);
            if (decodeToken.exp < date.getTime() / 10000) {
                const data = await refreshToken();
                console.log(data);
                const refreshUser = {
                    data: { ...user },
                    meta: { accessToken: data.accessToken },
                };
                dispatch(updateCurrentUser(refreshUser));
                config.headers['Authorization'] = `Bearer ${data.accessToken}`;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );
    return newInstance;
};

export default createAxios;
