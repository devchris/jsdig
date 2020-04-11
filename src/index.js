Object.defineProperty(Object.prototype, 'dig', {
  value(...keys) {
    const obj = Object(this);

    let digest = obj;

    for (let i = 0, len = keys.length; i < len; i++) {
      if (typeof digest === 'undefined' || digest === null) {
        return null;
      }

      digest = digest[keys[i]];
    }

    return digest ? digest : null;
  }
});
