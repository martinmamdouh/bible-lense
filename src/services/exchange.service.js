'use strict'
import { httpClient } from "./http-client";

const getExchangeRate = () => {
	return httpClient.get("/exchange-rate")
}

const getExchangeRateByAsset = (asset) => {
	return httpClient.get(`/exchange-rate/?asset=${asset}`);
}


export { getExchangeRate, getExchangeRateByAsset };