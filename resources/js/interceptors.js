import axios from 'axios'

axios.interceptors.request.use(req => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    let data_user = localStorage.getItem('data_user');
    data_user = JSON.parse(data_user)
    let token = 'invalid';
    if(data_user)
    {
        token = data_user.token;
    }
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  });