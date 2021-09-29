# Opthy v0 tests

This tests require an account with funds create contracts to send transactions.

Usage:
- `yarn install`
- define a `.env` file for example:
    ```
    OT_ACCOUNT_PRIVATE_KEY=<YOUR-ETHEREUM-PRIVATE-KEY>
    OT_NETWORK=Polyjuice
    OT_OPTHYS_ADDRESS=0xDa8Cc8B5f0F74384bCC61521f731432D689E5B99
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
Balance of 0x9d23e5D38C31DF9FF11512e40f43a2a4Fa7a3b41 = 413491863260
Calling deploy of a contract...
Txn Hash: 0x5007416c7e826b8540008e346e9826e4577f8d40db47f0eca677c023cad49fc4
Opthys on address: 0xDa8Cc8B5f0F74384bCC61521f731432D689E5B99
Calling deploy of a contract...
Txn Hash: 0x9fcefa7f9c1a498d77bc36403bf9a6cdd9ced6154a4504fb2903422f630b57aa
ERC20 Token 0 on address: 0x8db6f1e273FE9C0AB941cC416F91e4fbeC343823
Calling approve on ERC20...
Txn Hash: 0xd6f19a73efdde7b615805221ce0e9a6089cfdbbb4aa7d504401b92d268db053c
Calling deploy of a contract...
Txn Hash: 0x6b8e87c915e97a5b2c03f5fc881df13d6386bd70a10a2f15f0ccf3b6434bc1c8
ERC20 Token 1 on address: 0x3212c8e7CcE7EEc9326f00148b690793ec35FbDF
Calling newOpthy...
Txn Hash: 0xe2244be98ac0bc48493d35f90f717f6f20c87861dbd12f169608858740fc40ce
Calling getOpthys...
Opthy deployed on address: 0xb1b056955806A785C1339a84374C01d49Df903e8
Calling approve on ERC20...
Txn Hash: 0xe62e30aaec99e1b99fa430051a00644a9a00d3563e1f35ceba32a99087e108f6
Calling approve on ERC20...
Txn Hash: 0x962f55fc36c24d0a6b54113d2dc6d74208fa045274738359726fcb43293b37eb
Calling update...
Txn Hash: 0x03536be5082d611d2cea919886c6de3e53a88556563ab0599d41aa3e54d30430
Calling agree...
Txn Hash: 0xef4d4ae2aae94c4bdc6c38572368b89cf57e4069782d4b34e0ec6b290b5ae1c5
Calling swap...
Txn Hash: 0xf2fbaa66327091d94be6490924d5e1f8e8bd74d3e8d54ebffa92b7fe598988a2
Calling swap...
Txn Hash: 0xb1e575ebf0a5104cd542fbd35e6e10cff4a32dd622baae84d315ca6e64d71cb5
Sleeping for 300 seconds
Calling reclaim...
Txn Hash: 0xd3353ad5d4010f0fd7d70dd2f49b04c1e3273585f0f9ffea01a4f869499e7f14
Done in 424.61s.
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
Balance of 0x9d23e5D38C31DF9FF11512e40f43a2a4Fa7a3b41 = 55463669427707307
Calling deploy of a contract...
Txn Hash: 0xe9da49ab6c4799ad321f8edafc7cb0e140b83f8025633cf3d863cff1dbbc7e69
Opthys on address: 0xa07ccBe80B9064e2461aCa001F9778a62A48e10f
Calling deploy of a contract...
Txn Hash: 0x05683094571b676d9aa71570ff85ce55aa2216dfea3de7efce5e163895655304
ERC20 Token 0 on address: 0xe312e7c688E61d14691d7f7AA4c4D76fa5747e97
Calling approve on ERC20...
Txn Hash: 0x6d2a99595daedaacfc1d8433d1ee20e00dc38942144c8261571661230bbdc3b1
Calling deploy of a contract...
Txn Hash: 0x4c9103da5b0d597e050eea0a079f4c7d73b565f3ec80688f74d83148e4c092c6
ERC20 Token 1 on address: 0x55d88e70d0c68427725c19AF797Ccc4C77BE16FD
Calling newOpthy...
Txn Hash: 0x614f2ab7d1b8a4ab4c6cb21522ea85b82c46aa4f56679ba992cb7bddc83194b6
Calling getOpthys...
Opthy deployed on address: 0xc7DF4114529116b3Ffd8B42932F283b7aBB2a85F
Calling approve on ERC20...
Txn Hash: 0x505ab6a376018c4d2ffb9ee686c9389c0a8e1af74bf7940c12b2b55b980fa13f
Calling approve on ERC20...
Txn Hash: 0xbeecf9d2ab9d238bb1c6ff96c145e69d121e885085397b621f7557ff5d16431a
Calling update...
Txn Hash: 0xed7799aedb68b59aa51c89bf1d73013e0db0168bbc6a877bc13b7cb4d52d0d5b
Calling agree...
Txn Hash: 0xca4be5272b5b0b700e27ffaf2c0104b40c9f1a4af83594e71e7507367975591c
Calling swap...
Txn Hash: 0x20aa8246a1362bf9d541962434219cdf7536d495aea4da8cd4236ce6f6d868b5
Calling swap...
Txn Hash: 0xe98217c31e3726aa4dc530e9c1cd83b161a2f25fe0c2d82af7b120c5d21ad1b2
Sleeping for 300 seconds
Calling reclaim...
Txn Hash: 0x8603db9d17f676f84609c55113f61d800013baff936469277f3fb9bf6ed7eee0
Done in 476.67s.
```