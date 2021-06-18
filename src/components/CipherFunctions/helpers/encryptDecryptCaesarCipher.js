function encryptDecryptCaesarCipher(message, key, isEncrypt = true) {
  let finalKey = key;
  let finalMessage = message.toLowerCase();

  let startCharCode = "a".charCodeAt();
  let endCharCode = "z".charCodeAt();

  if (key > 26) {
    finalKey = key % 26;
  }

  let result = "";
  for (let i = 0; i < finalMessage.length; i++) {
    if (/[a-z]/gi.test(finalMessage[i])) {
      let newCharCode = isEncrypt
        ? finalMessage[i].charCodeAt(0) + finalKey
        : finalMessage[i].charCodeAt(0) - finalKey;
      if (newCharCode > endCharCode) {
        newCharCode = (newCharCode % endCharCode) + startCharCode;
      }
      result += String.fromCharCode(newCharCode);
    } else {
      result += finalMessage[i];
    }
  }

  return result;
}

export default encryptDecryptCaesarCipher;
