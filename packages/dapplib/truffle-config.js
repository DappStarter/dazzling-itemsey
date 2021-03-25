require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good armed ozone sugar notice crime remember company grace high sun veteran'; 
let testAccounts = [
"0x47596ae289d43dea3c3b0e57b225c388e9c456eacf1848b1d06188fa236770ef",
"0xc7bcb324854955286cab070ea8ff9fb456762fe5cd4144006738b9a43c440db3",
"0xeeecf648a2cb8f87d8d299da3d7515293aaa3d02cbfa4b6fa01e8942c1746910",
"0x0a652765d496981a980597b4ae84a820ba7d6a400739b039f40f6d16f817c094",
"0xb29f3d9765f47f9f4d9a4c40709b535eb3161d7b0a8f17a9bf8cbe0fb02b2605",
"0xe89d6a90dee27d633ddc62bfb3de83020e385aaec014a448785d74c426b35e10",
"0x1f066064f4e1dbfa6220d9645a091cf869e1313cc8654da1b693f618f7624849",
"0xde87c7d30c0ed82f08517818824b0460f61876bbc5663b645fd14bb9b17b2255",
"0xc286017ffad8aa509485c8d7570cb8503bbc5b2469572abffc65300e3679dd51",
"0x009cbb080fcaa095da8e1893d632373807bfca6fe661be24670edfdbc5270133"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

