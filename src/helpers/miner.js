import {sha256} from 'js-sha256';

const hashUtil = (seed, nonce) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(sha256(seed + nonce)), 20)
  );
};

export default hashUtil;
