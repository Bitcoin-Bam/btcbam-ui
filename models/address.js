import * as BtcBaminfoAPI from '@/services/btcbaminfo-api'

class Address {
  static get(id, options = {}) {
    return BtcBaminfoAPI.get(`/address/${id}`, options)
  }

  static getBalance(id, options = {}) {
    return BtcBaminfoAPI.get(`/address/${id}/balance`, options)
  }

  static getUtxo(id, options = {}) {
    return BtcBaminfoAPI.get(`/address/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return BtcBaminfoAPI.get(`/address/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static getBalanceTransactions(id, {page, pageSize}, options = {}) {
    return BtcBaminfoAPI.get(`/address/${id}/balance-history`, {params: {page, pageSize}, ...options})
  }

  static getTokenBalanceTransactions(id, {token, page, pageSize}, options = {}) {
    if (token) {
      return BtcBaminfoAPI.get(`/address/${id}/brc20-balance-history/${token}`, {params: {page, pageSize}, ...options})
    } else {
      return BtcBaminfoAPI.get(`/address/${id}/brc20-balance-history`, {params: {page, pageSize}, ...options})
    }
  }
}

export default Address
