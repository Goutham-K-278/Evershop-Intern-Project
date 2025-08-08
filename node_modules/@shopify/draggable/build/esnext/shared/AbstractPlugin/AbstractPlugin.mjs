class AbstractPlugin {

  constructor(draggable) {
    this.draggable = draggable;
  }

  attach() {
    throw new Error('Not Implemented');
  }

  detach() {
    throw new Error('Not Implemented');
  }
}

export { AbstractPlugin };
