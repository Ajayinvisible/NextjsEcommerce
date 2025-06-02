import api from "../api";

async function login({ email, password }) {
    return await api.post(`/api/auth/login`, {
        email,
        password
    });
}

export { login }