'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AbstractPlugin = require('../../../shared/AbstractPlugin/AbstractPlugin.cjs');

const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');
const announceEvent = Symbol('announceEvent');
const announceMessage = Symbol('announceMessage');
const ARIA_RELEVANT = 'aria-relevant';
const ARIA_ATOMIC = 'aria-atomic';
const ARIA_LIVE = 'aria-live';
const ROLE = 'role';

const defaultOptions = {
  expire: 7000
};

class Announcement extends AbstractPlugin.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.originalTriggerMethod = this.draggable.trigger;
    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]);
  }

  detach() {
    this.draggable.off('draggable:destroy', this[onDestroy]);
  }

  getOptions() {
    return this.draggable.options.announcements || {};
  }

  [announceEvent](event) {
    const message = this.options[event.type];
    if (message && typeof message === 'string') {
      this[announceMessage](message);
    }
    if (message && typeof message === 'function') {
      this[announceMessage](message(event));
    }
  }

  [announceMessage](message) {
    announce(message, {
      expire: this.options.expire
    });
  }

  [onInitialize]() {

    this.draggable.trigger = event => {
      try {
        this[announceEvent](event);
      } finally {

        this.originalTriggerMethod.call(this.draggable, event);
      }
    };
  }

  [onDestroy]() {
    this.draggable.trigger = this.originalTriggerMethod;
  }
}

const liveRegion = createRegion();

function announce(message, {
  expire
}) {
  const element = document.createElement('div');
  element.textContent = message;
  liveRegion.appendChild(element);
  return setTimeout(() => {
    liveRegion.removeChild(element);
  }, expire);
}

function createRegion() {
  const element = document.createElement('div');
  element.setAttribute('id', 'draggable-live-region');
  element.setAttribute(ARIA_RELEVANT, 'additions');
  element.setAttribute(ARIA_ATOMIC, 'true');
  element.setAttribute(ARIA_LIVE, 'assertive');
  element.setAttribute(ROLE, 'log');
  element.style.position = 'fixed';
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.top = '-1px';
  element.style.overflow = 'hidden';
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(liveRegion);
});

exports.default = Announcement;
exports.defaultOptions = defaultOptions;
