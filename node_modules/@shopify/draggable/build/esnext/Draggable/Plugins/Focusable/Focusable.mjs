import { AbstractPlugin } from '../../../shared/AbstractPlugin/AbstractPlugin.mjs';

const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');

const defaultOptions = {};

class Focusable extends AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };
    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
  }

  detach() {
    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);

    this[onDestroy]();
  }

  getOptions() {
    return this.draggable.options.focusable || {};
  }

  getElements() {
    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
  }

  [onInitialize]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => decorateElement(element));
    });
  }

  [onDestroy]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => stripElement(element));
    });
  }
}

const elementsWithMissingTabIndex = [];

function decorateElement(element) {
  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);
  if (hasMissingTabIndex) {
    elementsWithMissingTabIndex.push(element);
    element.tabIndex = 0;
  }
}

function stripElement(element) {
  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
  if (tabIndexElementPosition !== -1) {
    element.tabIndex = -1;
    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
  }
}

export { Focusable as default };
