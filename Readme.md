# Opthy v0 tests

This tests require an account with funds create contracts to send transactions.

Usage:
- `yarn install`
- define a `.env` file for example:
    ```
    OT_ACCOUNT_PRIVATE_KEY=<YOUR-ETHEREUM-PRIVATE-KEY>
    OT_NETWORK=Polyjuice
    OT_OPTHYS_ADDRESS=0x085d9cE0e895D138af16fc0a080fa4159B0233c9
    ```
    Defining `OT_OPTHYS_ADDRESS` will make the test use that deployed Opthys contract, otherwise it will deploy a new one.
    Same goes for `OT_ERC20_0_ADDRESS` and `OT_ERC20_1_ADDRESS`.
- `yarn start`

### Status: Polyjuice: ok using testERC20

Using the following `.env`, which uses an account on testnets which holds enough CKB:

```
OT_ACCOUNT_PRIVATE_KEY=<YOUR-ETHEREUM-PRIVATE-KEY>
OT_NETWORK=Polyjuice
```

Gives the follwing output:
```log
$ node -r dotenv/config index.js
Using Polyjuice network with default RPC URL
Calling web3.eth.getBalance...
Balance of 0x9d23e5D38C31DF9FF11512e40f43a2a4Fa7a3b41 = 413490376999
Calling deploy of a contract...
Txn Hash: 0x0efad83460c96bd5ebcd704bdf604a2550698a0a760ee17fb278779ebee5980e
Opthys on address: 0x085d9cE0e895D138af16fc0a080fa4159B0233c9
Calling deploy of a contract...
Txn Hash: 0x1f0533b37d99b9bde522fcab3b86a23857ee3e25240abf68943799931a39defa
ERC20 Token 0 on address: 0x2111223bcD62293AF5c487FCcEe6ddAf4e5E4c5D
Calling approve on ERC20...
Txn Hash: 0x8bcbd6422744400817427d47d2049cede7234e343b61841e4a6ff0b93f6f4560
Calling deploy of a contract...
Txn Hash: 0x024d80f0973769e3cce435355373584637b4a7e3d45789d1cf4ba13ce5a6fd72
ERC20 Token 1 on address: 0x5D14C33AFCd72C755610Da87246a56b6FddB22dd
Calling newOpthy...
Txn Hash: 0x233e8df01a6c6868610f05d395f2acf763328aae309528b2119ebbbf20bd4e0b
Calling getOpthys...
Opthy deployed on address: 0x583591b3C28c82dca328cC0048FE3e98ad8E29EE
Calling approve on ERC20...
Txn Hash: 0xe8e5c106981ffeb2c3ecd066e408c0ec4f921f43f96c15e6c063dc009905244f
Calling approve on ERC20...
Txn Hash: 0xce59e3292f5e873bd7459d7eda6944f2cc8f65b7250aaa5146b737cddb9d11f1
Calling update...
Txn Hash: 0x7e226b7ab3601a862e32ef01eda997ef0b8b885ad24783c7b986747c3698eeeb
Calling agree...
Txn Hash: 0xa9428bb4290cb9b54e18f661f592ec0502b50763dd4df0e445a44c400fb950ab
Calling swap...
Txn Hash: 0x2e1790dc70e3e2ccc88ba7a625348a378bd9a64c7ba8501fdd1789c6a4051aa2
Calling swap...
Txn Hash: 0x5c2fe9a74e44e41fb3ee35cde6b48e2061c0da6ce542d36372bf2589325c131c
Sleeping for 300 seconds
Calling reclaim...
Txn Hash: 0xb56edd7bb5cfdc7fa0dec22be65d4781a7a008d8b9b047d5ba43c2d5a422b14d
Done in 439.57s.
```

### Status: Polyjuice: ok using ckETH SUDT proxy and testERC20

Using the following `.env`, which uses an account on testnets which holds enough CKB and ETH, and an already deployed Opthys, ckETH SUDT proxy and testERC20:

```
OT_ACCOUNT_PRIVATE_KEY=<YOUR-ETHEREUM-PRIVATE-KEY>
OT_NETWORK=Polyjuice
OT_OPTHYS_ADDRESS=0x768033EB1E0A2b4bC0e793ff798f17a3F51218bc
OT_ERC20_0_ADDRESS=0x84220609e42b51c9aEf056Da0A06983746974291
OT_ERC20_1_ADDRESS=0x273344254166EEf74D0222de7d95Fe08684E1b62
```

Gives the follwing output:
```log
$ node -r dotenv/config index.js
Using Polyjuice network with default RPC URL
Calling web3.eth.getBalance...
Balance of 0x9d23e5D38C31DF9FF11512e40f43a2a4Fa7a3b41 = 413493189857
Opthys on address: 0x768033EB1E0A2b4bC0e793ff798f17a3F51218bc
ERC20 Token 0 on address: 0x84220609e42b51c9aEf056Da0A06983746974291
Calling approve on ERC20...
Txn Hash: 0x0ca725b460ba2a489cb71e30b2c9f85164afd20a91641272ebd53d8854380f0f
ERC20 Token 1 on address: 0x273344254166EEf74D0222de7d95Fe08684E1b62
Calling newOpthy...
Txn Hash: 0x311a64429b4db8384abfa0edc95f85bf8dd1fbc2802f7396316236bba722163c
Calling getOpthys...
Opthy deployed on address: 0x7113554F9E78c0a662BC44f1DfB4cc6E3e244706
Calling approve on ERC20...
Txn Hash: 0x28a743dcbade08abebe209039006b01fe699b11a528a6985e827858a27cd7c9b
Calling approve on ERC20...
Txn Hash: 0x0e2f1b54478c9d808ee6b24804c6bf4c66be2789fe2e9c2cf7d7c6e807b98a9c
Calling update...
Txn Hash: 0x03bcf4cfb482323a11ff49507a79a33709b3c7870e9f8c12f7fe07087b573b83
Calling agree...
Txn Hash: 0x4d72dde01b1d88895cd2f650bcaa0f22895f08660b8e18bebdab4ea079b945ea
Calling swap...
Txn Hash: 0x443fca4a1d4b4ef80fe72f2f7ff1fc0ee3a93941c5f4197e4d9cd8fa90b92f0a
Calling swap...
Txn Hash: 0xe9c0df96ef4f1c07a7780e03cd656f7804d302fc3b19119c8bed27285fa58f3d
Sleeping for 300 seconds
Calling reclaim...
Txn Hash: 0x19ec35babfb4e8cf375818ec54a9a14f502407e147001a92e326d3042816a456
Done in 459.03s.
```

### Status on Rinkeby: ok

Using the following `.env`, which uses an account on testnets which holds enough ETH:

```
OT_ACCOUNT_PRIVATE_KEY=<YOUR-ETHEREUM-PRIVATE-KEY>
OT_NETWORK=Rinkeby
```

Gives the follwing output:
```log
$ node -r dotenv/config index.js
Using Rinkeby network with default RPC URL
Calling web3.eth.getBalance...
Balance of 0x9d23e5D38C31DF9FF11512e40f43a2a4Fa7a3b41 = 38560988275670500
Calling deploy of a contract...
Txn Hash: 0xdff3c2e2c3a5f12b2337fc03f9efa2ab9dbe57a9e3aefc1aa512d6f7b1e7e679
Opthys on address: 0x558c1f3ADC1A20E8Be8052840360Edd1020DB88f
Calling deploy of a contract...
Txn Hash: 0xc7a49bfa3fd517fc190749600f424aef1b7863320cd54f9e0c126648264f2b90
ERC20 Token 0 on address: 0xe987E26f3a677A3d265Ba15e04Cae0DD3eE477Cc
Calling approve on ERC20...
Txn Hash: 0x7dc6ed02869cd9fb181f639794065b021c02f263e17845ad65d3b0a752a1aeff
Calling deploy of a contract...
Txn Hash: 0xa0a938d9d6091ed397d1aeaf897d246b8984947f6ddf4c5b0ff6f174c4bfd492
ERC20 Token 1 on address: 0xb2FB10957Ca26c7bF8e82646DAA5Bd77DA20B13E
Calling newOpthy...
Txn Hash: 0x188ec7ddc112d99d6d251f7f8e20ba455f2ca2cc35f3965fb170968a2ad75372
Calling getOpthys...
Opthy deployed on address: 0x304B014a3db63fC8DAf41030284Cd42A52bCadA0
Calling approve on ERC20...
Txn Hash: 0xc3729941bbcca23389be73c053a5a014a410758cd763e786c2597479b8ddfd3d
Calling approve on ERC20...
Txn Hash: 0xd535d025fa447c24b2dbf889a0d300e9cdf236f94322a2abee95fddf61a48469
Calling update...
Txn Hash: 0x72e5a9ac8b49210859b4462fe81382c2dbc7956c416d47788baa1a00862f73bd
Calling agree...
Txn Hash: 0x63c8f41eaac94f20167ccecf766f9bc1b086534c8477f2a301731bedaf6cd741
Calling swap...
Txn Hash: 0xe09ccd2f82a48aab0272109b11f5f0e9dda3471b57e51f88772d06d3aa097824
Calling swap...
Txn Hash: 0x0765d72b10c69e33763884a3f3e22ac103cc7a5a0032eeef17ecb17aea124f53
Sleeping for 300 seconds
Calling reclaim...
Txn Hash: 0x0bb565b67fd04662d39d1ddf4c3197eb4a8bc0a44e7469d41e3b66d22a2e2b5f
Done in 479.49s.
```