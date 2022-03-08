import bip39 from 'bip39';
import hdkey from 'hdkey';
import { toChecksumAddress } from 'ethereum-checksum-address'
import ethUtil from 'ethereumjs-util'
import bcrypt from 'bcrypt'


const signUp = async (password, cPassword) => {
    console.log('Password and confirm password in register function', password, cPassword)
    if (password == cPassword) {
        let hashedPassword = await bcrypt.hash(password, 10);  // BCRYPT THE PASSWORD 
        const mnemonic = await bip39.generateMnemonic(); //generates string
        return { 'status': 1, 'message': 'Mnemonic', 'result': { 'mnemonic': mnemonic, 'hashedPassword': hashedPassword } }
    } else {
        return { 'status': 0, 'message': 'Password and Confirm Password does not match.' }
    }
}

const createWallet = async (mnemonic) => {
    const seed = await bip39.mnemonicToSeed(mnemonic); //creates seed buffer
    const root = hdkey.fromMasterSeed(seed);
    const masterPrivateKey = root.privateKey.toString('hex');

    const addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1
    const privateKey = (addrNode._privateKey).toString('hex');

    const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
    // console.log('pub key ', pubKey);
    const addr = ethUtil.publicToAddress(pubKey).toString('hex');
    // console.log('addr', addr)
    const address = toChecksumAddress(addr)
    const hashedAddress = await bcrypt.hash(address, 10);  // BCRYPT THE WALLET ADDRESS
    const hashedPrivateKey = await bcrypt.hash(privateKey, 10);  // BCRYPT THE PRIVATE KEY
    return { 'status': 1, 'message': 'Wallet and Private Key', 'result': { 'address': hashedAddress, 'privateKey': hashedPrivateKey } }
}

const getAssetsByTicker = () => {

}
// module.exports = { signUp, createWallet }
export default { signUp }