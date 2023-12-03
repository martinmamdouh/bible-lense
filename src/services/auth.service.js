'use strict'
import { httpClient } from "./http-client";

const login = (data) => {
	return httpClient.post("/auth/login", data)
}

const logout = (data) => {
	return httpClient.post("/auth/logout", data,)
}

const register = (data) => {
	return httpClient.post("/auth/register", data,)
}
export { login, logout, register };