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

### Status: Polyjuice: ok

Using the following `.env`, which uses an account on testnets which holds enough CKB, ckDAI and ckETH:

```
OT_ACCOUNT_PRIVATE_KEY=<YOUR-ETHEREUM-PRIVATE-KEY>
OT_NETWORK=Polyjuice
OT_ERC20_0_ADDRESS=0x034f40c41Bb7D27965623f7bb136CC44D78be5E7
OT_ERC20_1_ADDRESS=0xC818545C50a0E2568E031Ef9150849b396992880
```

Gives the follwing output:
```log
$ node -r dotenv/config index.js
Using Polyjuice network with default RPC URL
Calling web3.eth.getBalance...
Balance of 0x9d23e5D38C31DF9FF11512e40f43a2a4Fa7a3b41 = 653485334822
Calling deploy of a contract...
Txn Hash: 0x3f379854ffcd83f55281005ac32644ef0877c2b8fec7cd54a9baf324fb62e7d7
Opthys on address: 0x3Cb3bDF756266fbCA2b7485787A94761d67100B3
ERC20 Token 0 on address: 0x034f40c41Bb7D27965623f7bb136CC44D78be5E7
Calling approve on ERC20...
Txn Hash: 0xa88a2f6aae66857039cc78de46fc0413def86deeb9d5420e6217cd948818bd03
ERC20 Token 1 on address: 0xC818545C50a0E2568E031Ef9150849b396992880
Calling newOpthy...
Txn Hash: 0xcc09aac6341d2a8cd1d790395f59138386bf7edfa8ce114e033deffb149a22c6
Calling getOpthys...
Opthy deployed on address: 0x4778F9E6F376676b76bDF26d18734963336aC945
Calling approve on ERC20...
Txn Hash: 0x1d0f999d5a3af34fd9fc00979ca8f3e121ffca730a67234a7ea16dad9f2ba70a
Calling approve on ERC20...
Txn Hash: 0xbfdada2d382b5e3e5ea01958f2b32a027655f39962f2f2cea431867d24ca86e3
Calling update...
Txn Hash: 0x2562ed4913fcc9e031d70f943c3a44c4ff4ac15c1517b29b9269779d49d48ae0
Calling agree...
Txn Hash: 0x3e3b22dafad3ff9bc4062af7c23c792d306c3342fafe4322f33e5db4391a2203
Calling swap...
Txn Hash: 0x0bee5c60e5e8147857d277c8e1e6088dfb95e6d08af8cec4b3ec317fd3eb9b92
Calling swap...
Txn Hash: 0x892a8f821404cb8389d22229f52005e47beb11fd7b11b5f13bba0ab37ada7f3f
Sleeping for 300 seconds
Calling reclaim...
Txn Hash: 0x8a124b04a05c0bb8d47d60b26a9f8de271a1c23047a8ba05dc191363d7b56e4f
Done in 412.40s.
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
Balance of 0x9d23e5D38C31DF9FF11512e40f43a2a4Fa7a3b41 = 21251712017124260
Calling deploy of a contract...
Txn Hash: 0xb8d5b14db2bc45d9846c84b206fbbb243fb92bfe727136cf2a26aaa8b38ee61f
Opthys on address: 0xAF0331D79697335305da49943B52Caafaf2A06A4
Calling deploy of a contract...
Txn Hash: 0x5eb02b41cc5b2067ec1025b4dceb8b66ee6dd4ef53205a5818aae196bf99de6c
ERC20 Token 0 on address: 0x208eaABc92cD36AACE290Df0242932b9EF933a84
Calling approve on ERC20...
Txn Hash: 0x94e83c67605332139000818f3939ded3f2ff737aa60b423e77b04a55ea10b7ad
Calling deploy of a contract...
Txn Hash: 0x015c85ebe23860ac6f13ebeb96aa0a89b839b38b4ea9c08481e54cabdc8a3d02
ERC20 Token 1 on address: 0xC48238c8ad4e30f93FFD46007E5e040fbEd3571E
Calling newOpthy...
Txn Hash: 0xeb77f9708570eb1fad2bf56d53299a1d0946c9a3ff4a69ed5dc6da9aaa7e5340
Calling getOpthys...
Opthy deployed on address: 0x7746C2d44bc45a7c9bDC32E6199efC74DfCa9775
Calling approve on ERC20...
Txn Hash: 0x4653bacc83a1df78270eeef0d844a0f51c6299c3790b7d8813cc58e40f5d89e0
Calling approve on ERC20...
Txn Hash: 0x01ccdf34ed96ec17b6c4eff08cd0ce3cc1dda9976b665fb62a898a158782d97b
Calling update...
Txn Hash: 0xa8247b50219b9b36ee2a3e919e580a276730f57b9261a07bf256a391efacbc8a
Calling agree...
Txn Hash: 0xb10c6aa0dc76829cd43335fc701d5bfac936df86ba092d57e60add79f5ebfd2c
Calling swap...
Txn Hash: 0x01850f9a054511e3ec9ac04cd7e0ca7aa71d8d61e6cc46baf65b3988e07d19b1
Calling swap...
Txn Hash: 0x47b768e40db3e4cedda28495e3601fe203ae6256e29533ffd4518c7b6871f0e0
Sleeping for 300 seconds
Calling reclaim...
Txn Hash: 0xd4c5902b7ea9e7d871110dbac859e36083d0362aba8f828c4d41ae08ccaf1296
Done in 486.62s.

```
