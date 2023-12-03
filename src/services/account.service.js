'use strict'
import { httpClient } from "./http-client";

const createCryptoAccount = (data) => {
	return httpClient.post("/accounts/initialize", data)
}

const getAccount = () => {
	return httpClient.get("/accounts/")
}

export { createCryptoAccount, getAccount };