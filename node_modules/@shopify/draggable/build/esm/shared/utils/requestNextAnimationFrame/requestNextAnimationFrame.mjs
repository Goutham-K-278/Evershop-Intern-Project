function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

export { requestNextAnimationFrame as default };
