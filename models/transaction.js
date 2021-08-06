import * as BtcBaminfoAPI from '@/services/btcbaminfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return BtcBaminfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return BtcBaminfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return BtcBaminfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return BtcBaminfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return BtcBaminfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return BtcBaminfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
