const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:3001/api/',
});


let refreshToken;

instance.interceptors.request.use(req => {
        if (localStorage.getItem("JWT")) {

            req.headers['authorization'] = `Bearer ${localStorage.getItem("JWT")}`;
            return req;
        }
    }
)
instance.interceptors.response.use((response) => {
    console.log("REFRESH DONE")
    return response;
}, async (error) => {
    console.log(error)
    const originalRequest = error.config;
    if (error.config.url !== '/refreshToken' && error.response.status === 401 && originalRequest._retry !== true) {
        originalRequest._retry = true;
        if (refreshToken && refreshToken !== '') {
            instance.defaults.headers.common['authorization'] = `Bearer ${refreshToken}`;
            console.log('refresh token');
            await instance.post('/refreshToken').then((response) => {
                instance.defaults.headers.common['authorization'] = `Bearer ${response.data.accessToken}`;
                originalRequest.headers['authorization'] = `Bearer ${response.data.accessToken}`;
            }).catch((error) => {
                console.log(error.response.status);
                refreshToken = null;
            });
            return instance(originalRequest);
        }
    }

});

export default instance;


