import {sha256} from 'js-sha256';

const hashBlock = (seed) => {
  let nonce = 0;
  let hash = '';

  while (true) {
    hash = sha256(seed + nonce);
    if (hash[0] === '0') break;
    nonce += 1;
  }

  return {hash, nonce};
};

export default hashBlock;
