import { AbstractPlugin } from '../../../shared/AbstractPlugin/AbstractPlugin.mjs';
import closest from '../../../shared/utils/closest/closest.mjs';

const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const scroll = Symbol('scroll');

const defaultOptions = {
  speed: 6,
  sensitivity: 50,
  scrollableElements: []
};

class Scrollable extends AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.currentMousePosition = null;

    this.scrollAnimationFrame = null;

    this.scrollableElement = null;

    this.findScrollableElementFrame = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[scroll] = this[scroll].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  getOptions() {
    return this.draggable.options.scrollable || {};
  }

  getScrollableElement(target) {
    if (this.hasDefinedScrollableElements()) {
      return closest(target, this.options.scrollableElements) || document.documentElement;
    } else {
      return closestScrollableElement(target);
    }
  }

  hasDefinedScrollableElements() {
    return Boolean(this.options.scrollableElements.length !== 0);
  }

  [onDragStart](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.source);
    });
  }

  [onDragMove](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
    });
    if (!this.scrollableElement) {
      return;
    }
    const sensorEvent = dragEvent.sensorEvent;
    const scrollOffset = {
      x: 0,
      y: 0
    };
    if ('ontouchstart' in window) {
      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
    this.currentMousePosition = {
      clientX: sensorEvent.clientX - scrollOffset.x,
      clientY: sensorEvent.clientY - scrollOffset.y
    };
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }

  [onDragStop]() {
    cancelAnimationFrame(this.scrollAnimationFrame);
    cancelAnimationFrame(this.findScrollableElementFrame);
    this.scrollableElement = null;
    this.scrollAnimationFrame = null;
    this.findScrollableElementFrame = null;
    this.currentMousePosition = null;
  }

  [scroll]() {
    if (!this.scrollableElement || !this.currentMousePosition) {
      return;
    }
    cancelAnimationFrame(this.scrollAnimationFrame);
    const {
      speed,
      sensitivity
    } = this.options;
    const rect = this.scrollableElement.getBoundingClientRect();
    const bottomCutOff = rect.bottom > window.innerHeight;
    const topCutOff = rect.top < 0;
    const cutOff = topCutOff || bottomCutOff;
    const documentScrollingElement = getDocumentScrollingElement();
    const scrollableElement = this.scrollableElement;
    const clientX = this.currentMousePosition.clientX;
    const clientY = this.currentMousePosition.clientY;
    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
      const {
        offsetHeight,
        offsetWidth
      } = scrollableElement;
      if (rect.top + offsetHeight - clientY < sensitivity) {
        scrollableElement.scrollTop += speed;
      } else if (clientY - rect.top < sensitivity) {
        scrollableElement.scrollTop -= speed;
      }
      if (rect.left + offsetWidth - clientX < sensitivity) {
        scrollableElement.scrollLeft += speed;
      } else if (clientX - rect.left < sensitivity) {
        scrollableElement.scrollLeft -= speed;
      }
    } else {
      const {
        innerHeight,
        innerWidth
      } = window;
      if (clientY < sensitivity) {
        documentScrollingElement.scrollTop -= speed;
      } else if (innerHeight - clientY < sensitivity) {
        documentScrollingElement.scrollTop += speed;
      }
      if (clientX < sensitivity) {
        documentScrollingElement.scrollLeft -= speed;
      } else if (innerWidth - clientX < sensitivity) {
        documentScrollingElement.scrollLeft += speed;
      }
    }
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }
}

function hasOverflow(element) {
  const overflowRegex = /(auto|scroll)/;
  const computedStyles = getComputedStyle(element, null);
  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');
  return overflowRegex.test(overflow);
}

function isStaticallyPositioned(element) {
  const position = getComputedStyle(element).getPropertyValue('position');
  return position === 'static';
}

function closestScrollableElement(element) {
  if (!element) {
    return getDocumentScrollingElement();
  }
  const position = getComputedStyle(element).getPropertyValue('position');
  const excludeStaticParents = position === 'absolute';
  const scrollableElement = closest(element, parent => {
    if (excludeStaticParents && isStaticallyPositioned(parent)) {
      return false;
    }
    return hasOverflow(parent);
  });
  if (position === 'fixed' || !scrollableElement) {
    return getDocumentScrollingElement();
  } else {
    return scrollableElement;
  }
}

function getDocumentScrollingElement() {
  return document.scrollingElement || document.documentElement;
}

export { Scrollable as default, defaultOptions, onDragMove, onDragStart, onDragStop, scroll };
