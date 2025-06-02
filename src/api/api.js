'use client';
import axios from "axios";
import config from '@/config';

const authToken = localStorage.getItem('authToken');

const api = axios.create({
    baseURL: config.apiUrl,
    headers: {
        Authorization: `Bearer ${authToken}`,
    }
});

export default api;