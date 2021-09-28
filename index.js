"strict mode"

const NETWORK = process.env.OT_NETWORK;
if (NETWORK !== 'Polyjuice' && NETWORK !== 'Rinkeby') {
    throw "NETWORK environment variable must be either Polyjuice or Rinkeby";
}
console.log(`Using ${NETWORK} network with ${process.env.OT_RPC_URL ? process.env.OT_RPC_URL : "default"} RPC URL`);

if (!process.env.OT_ACCOUNT_PRIVATE_KEY) {
    throw "OT_ACCOUNT_PRIVATE_KEY environment variable not set"
}

const { web3, DEFAULT_SEND_OPTIONS, account, ACCOUNT_POLY_ADDRESS } = require('./' + NETWORK);

async function checkBalance(address, amount) {
    console.log(`Calling web3.eth.getBalance...`);

    const balance = BigInt(await web3.eth.getBalance(address));
    console.log(`Balance of ${address} = ${balance}`);

    if (balance < amount) {
        throw `Insufficient balance. Can't issue a smart contract call. Please deposit funds to your address: ${address}`;
    }

    return balance;
}

async function deploy(contractArtifact, arguments) {
    console.log(`Calling deploy of a contract...`);
    const tx = new web3.eth.Contract(contractArtifact.abi).deploy({
        data: contractArtifact.bytecode || contractArtifact.data.bytecode.object,
        arguments: arguments,
    }).send(
        {
            ...DEFAULT_SEND_OPTIONS,
            from: account.address,
        }
    );

    tx.on('transactionHash', hash => console.log(`Txn Hash: ${hash}`));

    return tx;
}

async function checkERC20Balance(contract, address, amount, equality=true) {
    // console.log(`Calling balanceOf of an ERC20...`);
    const balance = BigInt(await contract.methods.balanceOf(address).call({
        from: account.address
    }));
    // console.log(`ERC20 Balance of ${address} = ${balance}`);

    if (equality == true) {
        if (balance != amount) {
            throw `Mismatch in ERC20 balance: ${balance} != ${amount}`;
        }
    } else {
        if (balance < amount) {
            throw `Insufficient ERC20 balance. Please deposit ERC20 funds to your Ethereum address: ${account.address}`;
        }
    }

    return balance;
}

async function getOpthys(contract) {
    console.log(`Calling getOpthys...`);
    return contract.methods.getOpthys().call({
        from: account.address
    });
}

async function approve(contract, address, amount) {
    console.log(`Calling approve on ERC20...`);
    const tx = contract.methods.approve(address, amount).send(
        {
            ...DEFAULT_SEND_OPTIONS,
            from: account.address,
        }
    );

    tx.on('transactionHash', hash => console.log(`Txn Hash: ${hash}`));

    return tx;
}

async function newOpthy(OpthysContract, ISell, duration, token0, token1, r0, r1, amount0) {
    console.log(`Calling newOpthy...`);
    const tx = OpthysContract.methods.newOpthy(ISell, duration, token0, token1, r0, r1, amount0).send(
        {
            ...DEFAULT_SEND_OPTIONS,
            from: account.address,
        }
    );

    tx.on('transactionHash', hash => console.log(`Txn Hash: ${hash}`));

    return tx;
}


async function update(contract, duration, amount0, r0, r1) {
    console.log(`Calling update...`);
    const tx = contract.methods.update(duration, amount0, r0, r1).send(
        {
            ...DEFAULT_SEND_OPTIONS,
            from: account.address,
        }
    );

    tx.on('transactionHash', hash => console.log(`Txn Hash: ${hash}`));

    return tx;
}

async function agree(contract, amount0, phase) {
    console.log(`Calling agree...`);
    const tx = contract.methods.agree(amount0, phase).send(
        {
            ...DEFAULT_SEND_OPTIONS,
            from: account.address,
        }
    );

    tx.on('transactionHash', hash => console.log(`Txn Hash: ${hash}`));

    return tx;
}

async function swap(contract, amount0In, amount1In, amount0Out, amount1Out) {
    console.log(`Calling swap...`);
    const tx = contract.methods.swap(amount0In, amount1In, amount0Out, amount1Out).send(
        {
            ...DEFAULT_SEND_OPTIONS,
            from: account.address,
        }
    );

    tx.on('transactionHash', hash => console.log(`Txn Hash: ${hash}`));

    return tx;
}

async function reclaim(contract) {
    console.log(`Calling reclaim...`);
    const tx = contract.methods.reclaim().send(
        {
            ...DEFAULT_SEND_OPTIONS,
            from: account.address,
        }
    );

    tx.on('transactionHash', hash => console.log(`Txn Hash: ${hash}`));

    return tx;
}

async function sleep(ms) {
    console.log(`Sleeping for ${ms/1000} seconds`);
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    try {
        const OPTHYS_ARTIFACT = require("opthy-v0-core/artifacts/Opthys");
        const OPTHY_ARTIFACT = require("opthy-v0-core/artifacts/Opthy");
        const TESTERC20_ARTIFACT = require("./artifacts/testERC20");

        await checkBalance(account.address, 1);

        const OPTHYS_ADDRESS = process.env.OT_OPTHYS_ADDRESS || (await deploy(OPTHYS_ARTIFACT, []))._address;
        console.log(`Opthys on address: ${OPTHYS_ADDRESS}`);
        const OpthysContract = new web3.eth.Contract(OPTHYS_ARTIFACT.abi, OPTHYS_ADDRESS);


        const ERC20_0_ADDRESS = process.env.OT_ERC20_0_ADDRESS || (await deploy(TESTERC20_ARTIFACT, []))._address;
        console.log(`ERC20 Token 0 on address: ${ERC20_0_ADDRESS}`);
        const ERC20_0_contract = new web3.eth.Contract(TESTERC20_ARTIFACT.abi, ERC20_0_ADDRESS);

        oldBalance0 = await checkERC20Balance(ERC20_0_contract, ACCOUNT_POLY_ADDRESS, 100, equality = false);

        await approve(ERC20_0_contract, OPTHYS_ADDRESS, 2);

        const ERC20_1_ADDRESS = process.env.OT_ERC20_1_ADDRESS || (await deploy(TESTERC20_ARTIFACT, []))._address;
        console.log(`ERC20 Token 1 on address: ${ERC20_1_ADDRESS}`);
        const ERC20_1_contract = new web3.eth.Contract(TESTERC20_ARTIFACT.abi, ERC20_1_ADDRESS);

        oldBalance1 = await checkERC20Balance(ERC20_1_contract, ACCOUNT_POLY_ADDRESS, 100, equality = false);


        //////newOpthy(OpthysContract, ISell, duration, token0, token1, r0, r1, amount0)
        await newOpthy(OpthysContract, true, 10, ERC20_0_ADDRESS, ERC20_1_ADDRESS, 3, 3, 2);

        tx = await getOpthys(OpthysContract);
        const OPTHY_ADDRESS = tx[0].opthy;
        console.log(`Opthy deployed on address: ${OPTHY_ADDRESS}`);

        const OContract = new web3.eth.Contract(OPTHY_ARTIFACT.abi, OPTHY_ADDRESS);

        await checkERC20Balance(ERC20_0_contract, OPTHY_ADDRESS, 2);
        await checkERC20Balance(ERC20_1_contract, OPTHY_ADDRESS, 0);

        await approve(ERC20_0_contract, OPTHY_ADDRESS, 100);
        await approve(ERC20_1_contract, OPTHY_ADDRESS, 100);
        
        //////update(contract, duration, amount0, r0, r1)
        await update(OContract, 60, 7, 10, 10);

        await checkERC20Balance(ERC20_0_contract, OPTHY_ADDRESS, 9);
        await checkERC20Balance(ERC20_1_contract, OPTHY_ADDRESS, 0);

        //////agree(contract, amount0, phase)
        await agree(OContract, 1, 2);

        await checkERC20Balance(ERC20_0_contract, OPTHY_ADDRESS, 10);
        await checkERC20Balance(ERC20_1_contract, OPTHY_ADDRESS, 0);

        //////swap(contract, amount0In, amount1In, amount0Out, amount1Out)
        await swap(OContract, 0, 10, 10, 0);

        await checkERC20Balance(ERC20_0_contract, OPTHY_ADDRESS, 0);
        await checkERC20Balance(ERC20_1_contract, OPTHY_ADDRESS, 10);

        //////swap(contract, amount0In, amount1In, amount0Out, amount1Out)
        await swap(OContract, 3, 0, 0, 3);

        await checkERC20Balance(ERC20_0_contract, OPTHY_ADDRESS, 3);
        await checkERC20Balance(ERC20_1_contract, OPTHY_ADDRESS, 7);

        await sleep(300000)
        await reclaim(OContract);

        await checkERC20Balance(ERC20_0_contract, OPTHY_ADDRESS, 0);
        await checkERC20Balance(ERC20_1_contract, OPTHY_ADDRESS, 0);
        
        await checkERC20Balance(ERC20_0_contract, ACCOUNT_POLY_ADDRESS, oldBalance0);
        await checkERC20Balance(ERC20_1_contract, ACCOUNT_POLY_ADDRESS, oldBalance1);
    } catch (error) {
        console.log(error);
    }
})();