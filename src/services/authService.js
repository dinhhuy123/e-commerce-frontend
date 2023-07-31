import * as httpRequest from '~/utils/httpRequest';
import * as axiosJWT from '~/utils/axiosJWT';

export const getCurrentUser = async (accessToken) => {
    try {
        const res = axiosJWT.get('auth/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const logout = async (accessToken) => {
    try {
        return await axiosJWT.post('auth/logout', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const login = async (loginData) => {
    try {
        return await httpRequest.post('auth/login', loginData);
    } catch (error) {
        console.log(error);
    }
};

export const refreshToken = async () => {
    try {
        const res = await httpRequest.post('auth/refresh', {
            withCredentials: true,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
