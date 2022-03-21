const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());


const abi = require("./contract/contractABI.js");  // Contract ABI  // need to change
const contract_Address = "0x300244145E694a26F6634fb8681B0798F5721865"; // need to change
const rop = "https://ropsten.infura.io/v3/d4d2fd55b14b4e4fa74ccdfd817d681a";  // provider (infura)
const Web3 = require('web3');

var Contract = require('web3-eth-contract');  // contract method
Contract.setProvider(rop);  // setting contract provider
var contract = new Contract(abi.jsonInterface, contract_Address);  // connecting abi

var Tx = require('ethereumjs-tx').Transaction;
const provider = new Web3.providers.HttpProvider(rop);
const web3 = new Web3(provider);

const account1 = "0xE405a7C434ba824B9Ad3551C9f6c030e5094B7b4"; // Your account address 1
//const account2 = '' // Your account address 2
web3.eth.defaultAccount = account1;
const privateKey1 = Buffer.from('ed8ab747f2b3ced2dfb2c737fa50852b49fb2ddf6aa9623bf7ecb896cd9e40c8', 'hex');

async function TransferERC20Token(name,heading,filedata) {
    return new Promise(function (resolve, reject) {
        try {
            web3.eth.getBlock("latest", false, (error, result) => {
                var _gasLimit = result.gasLimit;

                web3.eth.getGasPrice(function (error, result) {
                    var _gasPrice = result;
                    try {
                        var _hex_gasLimit = web3.utils.toHex((3141592).toString());
                        var _hex_gasPrice = web3.utils.toHex(_gasPrice.toString());
                        var _hex_Gas = web3.utils.toHex('3141592');

                        web3.eth.getTransactionCount(account1, (err, txCount) => {
                        	console.log(txCount)
                            const rawTx = {
                            	nonce: web3.utils.toHex(txCount),
                                from: account1,
                                to: contract_Address,
                                gasPrice: _hex_gasPrice,
                                gasLimit: _hex_gasLimit,
                                gas: _hex_Gas,
                                value: "0x0",
                                data: contract.methods.putFiles("name","heading","filedata").encodeABI()
                            };

                            const tx = new Tx(rawTx, { 'chain': 'ropsten' });
                            tx.sign(privateKey1);

                            var serializedTx = '0x' + tx.serialize().toString('hex');
                            web3.eth.sendSignedTransaction(serializedTx, function (err, hash) {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    console.log(hash)
                                    resolve(hash);
                                }
                            })
                        });                                
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        } catch (error) {
            reject(error);
        }
    })
}
app.post("/putFiles", (req, res)=> {
	const {name,heading,data} = req.body;
    console.log(name)
	TransferERC20Token(name, heading, data);
	/*contract.methods.putFiles(name,heading,data).send({from:"0xE405a7C434ba824B9Ad3551C9f6c030e5094B7b4"}).then(d=> {
		res.end(JSON.stringify({count:d}));
	});*/
});
app.get("/getFilesLength", (req, res)=> {
	contract.methods.getFilesLength().call({from:"0xE405a7C434ba824B9Ad3551C9f6c030e5094B7b4"}).then(d=> {
		res.end(JSON.stringify({count:d}));
	});
});
app.get("/getFiles", (req, res)=> {
	contract.methods.getFiles().call({from:"0xE405a7C434ba824B9Ad3551C9f6c030e5094B7b4"}).then(d=> {
		res.end(JSON.stringify({count:d}));
	});
});


app.listen(8080, ()=> {
	console.log("booom!");
});