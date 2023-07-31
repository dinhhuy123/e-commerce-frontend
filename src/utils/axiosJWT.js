import axios from 'axios';
import { useLocalStorage } from '~/hooks';
import jwt_decode from 'jwt-decode';
import { refreshToken } from '~/services/authService';

// eslint-disable-next-line react-hooks/rules-of-hooks
const { dataStorage, setDataStorage } = useLocalStorage();

console.log(dataStorage);

const axiosJWT = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
});

axiosJWT.interceptors.request.use(
    async (config) => {
        console.log('This code is running!');
        let date = new Date();
        const decodeToken = jwt_decode(dataStorage.token);
        if (decodeToken.exp < date.getTime() / 1000) {
            console.log('token is expired');
            const data = await refreshToken();
            const token = data.accessToken;
            const newDataStorage = { token };
            setDataStorage(newDataStorage);
            config.headers['Authorization'] = `Bearer ${data.accessToken}`;
        }
        console.log('config: ', config.headers);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export const get = async (path, options = {}) => {
    const response = await axiosJWT.get(path, options);
    return response.data;
};

export const post = async (path, data, options = {}) => {
    const response = await axiosJWT.post(path, data, options);
    return response.data;
};

export default axiosJWT;
