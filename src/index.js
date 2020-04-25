Object.defineProperty(Object.prototype, 'dig', {
  value(...keys) {
    let digest = Object(this);

    for (let i = 0, len = keys.length; i < len; i++) {
      if (!digest) return null;
      digest = digest[keys[i]];
    }

    return digest || null;
  }
});
