const Dig = (obj, ...keys) => {
  if (typeof obj !== 'object' || obj === null) return null;

  let digest = obj;

  for (let i = 0, len = keys.length; i < len; i++) {
    if (typeof digest === 'undefined' || digest === null) {
      return null;
    }

    digest = digest[keys[i]];
  }

  return digest;
};

export default Dig;
