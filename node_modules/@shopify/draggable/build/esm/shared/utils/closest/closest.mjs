function closest(node, value) {
  if (node == null) {
    return null;
  }
  function conditionFn(currentNode) {
    if (currentNode == null || value == null) {
      return false;
    } else if (isSelector(value)) {
      return Element.prototype.matches.call(currentNode, value);
    } else if (isNodeList(value)) {
      return [...value].includes(currentNode);
    } else if (isElement(value)) {
      return value === currentNode;
    } else if (isFunction(value)) {
      return value(currentNode);
    } else {
      return false;
    }
  }
  let current = node;
  do {
    current = current.correspondingUseElement || current.correspondingElement || current;
    if (conditionFn(current)) {
      return current;
    }
    current = current?.parentNode || null;
  } while (current != null && current !== document.body && current !== document);
  return null;
}
function isSelector(value) {
  return Boolean(typeof value === 'string');
}
function isNodeList(value) {
  return Boolean(value instanceof NodeList || value instanceof Array);
}
function isElement(value) {
  return Boolean(value instanceof Node);
}
function isFunction(value) {
  return Boolean(typeof value === 'function');
}

export { closest as default };
