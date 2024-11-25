import CryptoJS from "crypto-js";

const SECRET_KEY = "your-secret-key";

/**
 * @param text
 * @returns
 */

export const encrypt = (text: string): string => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

/**
 * @param encryptedText
 * @returns
 */

export const decrypt = (encryptedText: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
