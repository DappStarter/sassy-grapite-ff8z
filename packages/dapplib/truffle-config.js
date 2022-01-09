require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stool rice magic artwork inner civil army genius'; 
let testAccounts = [
"0xd10878f28805f4dc565cc5887916268f303f017e4a8976ec4626c78e9de8f5dd",
"0xb383375a909e53ca830e48f4a7f42e2348884119483fc95f71a73564de41fb90",
"0x18f786c49b55ff06578c66e4f19430894d76c4070fcb7632e41149d780584521",
"0x95f6d77a2ddaec7d96c0aae185741de0e345ee1a37b5643c20f97d896def6f70",
"0xa2c6a0f2c31ea2614f41a72436567bd17a115a91ac4193daaf3a4616f86126ee",
"0xe2f3547c212617ac0adfc7caf781e38867d4ad5dd9fc051d85563ef921addb24",
"0xf80780383d9060243838df35fb1ba6e15ec9621c2c3d40bdf45e61a423e80fe4",
"0xf8842d998362d3e949c684f80b98f8828e375c1d8cc30e20333af552669b1fd9",
"0x9acc5896be16908f0a5c5241eea50234b4b86e333ef6558c29ff5f48a60705bd",
"0x0dafc38a34a193a8e6fd633dd7e46eb87508beee4156bd5a26b20c8ddeedab58"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


