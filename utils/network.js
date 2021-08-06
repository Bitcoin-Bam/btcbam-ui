export default {
  mainnet: {
    pubkey: 0x1a,
    pubkeyhash: 0x1a,
    scripthash: 0x05,
    witness_v0_keyhash: 'btcbam',
    witness_v0_scripthash: 'btcbam'
  },
  testnet: {
    pubkey: 0x41,
    pubkeyhash: 0x41,
    scripthash: 0x7f,
    witness_v0_keyhash: 'tq',
    witness_v0_scripthash: 'tq'
  }
}[process.env.network || 'mainnet']
