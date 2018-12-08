import NodeRSA from 'node-rsa';
import crypto from 'crypto';
let algorithm = 'aes-128-cbc';
let clearEncoding = 'utf8';
let cipherEncoding = 'base64';
let iv = '1234567890123456';
let STOREKEY = 'LOCAL_TOKEN';

let publicKey = process.env.SECRET_KEY;

export const encrypt = function (data, key = '') {
  let rsaKey = new NodeRSA({
    b: 1024
  }, {
    encryptionScheme: 'pkcs1'
  });
  rsaKey.importKey(publicKey, 'pkcs8-public-pem');
  key = key || _randomString();
  let rsaEncryptData = rsaKey.encrypt(key, 'base64')
  let aesEncryptData = _encryptAes(data, key);
  return {
    key: rsaEncryptData,
    data: aesEncryptData
  };
};

export const decrypt = function (data, secretKey) {
  return _decryptAes(data, secretKey);
};
export const generateToken = function () {
  return _randomString()
};

function _encryptAes(data, secretKey) {
  let cipherChunks = [];
  let cipher = crypto.createCipheriv(algorithm, secretKey, new Buffer(iv));
  cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
  cipherChunks.push(cipher.final(cipherEncoding));
  return cipherChunks.join('');
};

function _decryptAes(data, secretKey) {
  let cipherChunks = [];
  let cipher = crypto.createDecipheriv(algorithm, secretKey, new Buffer(iv));
  cipherChunks.push(cipher.update(data, cipherEncoding, clearEncoding));
  cipherChunks.push(cipher.final(clearEncoding));
  return cipherChunks.join('');
};

function _randomString() {
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let length = chars.length;
  let pwd = '';
  for (let i = 0; i < 16; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * length));
  }
  return pwd
};
