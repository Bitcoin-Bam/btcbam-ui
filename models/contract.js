import * as BtcBaminfoAPI from '@/services/btcbaminfo-api'

class Contract {
  static get(id, options = {}) {
    return BtcBaminfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return BtcBaminfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return BtcBaminfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return BtcBaminfoAPI.get(`/brc20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return BtcBaminfoAPI.get(`/brc20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
