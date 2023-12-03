'use strict'
import { httpClient } from "./http-client";

const redeemPointsAPI = (data) => {
	return httpClient.post("/transactions/redeem", data)
}
const sellCryptoAPI = (data) => {
	return httpClient.post("/transactions/sell", data)
}
const fetchTransactionStatus = (externalTxId) => {
	return httpClient.get(`/transactions/${externalTxId}/status/`)
}

export { redeemPointsAPI, sellCryptoAPI, fetchTransactionStatus };