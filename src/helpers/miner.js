import {sha256} from 'js-sha256';

const hashUtil = (seed, nonce) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(sha256(seed + nonce)), 0)
  );
};

const hashBlock = (seed) => {
  return new Promise(async (resolve, reject) => {
    let nonce = 0;
    let hash = '';

    while (true) {
      hash = await hashUtil(seed, nonce);
      if (hash.slice(0, 2) === '00') resolve({hash, nonce});
      nonce += 1;
    }
  });
};

export default hashBlock;
