import CryptoJS from "crypto-js";

export const encryptData = (data: any, salt: string) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();

export const decryptData = (cipherText: string, salt: string) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, salt);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (err) {
    return null;
  }
};

const KEY_DECRYPT = "b14ca5898a4e4133bbce2ea2315a1916";

export const decryptCode = (cipherText: string) => {
  const key = CryptoJS.enc.Utf8.parse(KEY_DECRYPT);
  const iv = CryptoJS.lib.WordArray.create();

  const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};