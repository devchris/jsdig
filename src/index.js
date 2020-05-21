Object.defineProperty(Object.prototype, 'dig', {
  value(...keys) {
    let digest = Object(this);
    let d = null;

    if (keys[keys.length - 1].hasOwnProperty('default')) {
      d = keys[keys.length - 1].default;
      keys.splice(-1, 1);
    }

    for (let i = 0, len = keys.length; i < len; i++) {
      if (!digest) return d;
      digest = digest[keys[i]];
    }

    return digest || d;
  }
});
