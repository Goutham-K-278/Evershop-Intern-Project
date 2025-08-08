'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AbstractPlugin = require('../../shared/AbstractPlugin/AbstractPlugin.cjs');

const onSortableSorted = Symbol('onSortableSorted');
const onSortableSort = Symbol('onSortableSort');

const defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out'
};

class SortAnimation extends AbstractPlugin.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
    this.lastElements = [];
    this[onSortableSorted] = this[onSortableSorted].bind(this);
    this[onSortableSort] = this[onSortableSort].bind(this);
  }

  attach() {
    this.draggable.on('sortable:sort', this[onSortableSort]);
    this.draggable.on('sortable:sorted', this[onSortableSorted]);
  }

  detach() {
    this.draggable.off('sortable:sort', this[onSortableSort]);
    this.draggable.off('sortable:sorted', this[onSortableSorted]);
  }

  getOptions() {
    return this.draggable.options.sortAnimation || {};
  }

  [onSortableSort]({
    dragEvent
  }) {
    const {
      sourceContainer
    } = dragEvent;
    const elements = this.draggable.getDraggableElementsForContainer(sourceContainer);
    this.lastElements = Array.from(elements).map(el => {
      return {
        domEl: el,
        offsetTop: el.offsetTop,
        offsetLeft: el.offsetLeft
      };
    });
  }

  [onSortableSorted]({
    oldIndex,
    newIndex
  }) {
    if (oldIndex === newIndex) {
      return;
    }
    const effectedElements = [];
    let start;
    let end;
    let num;
    if (oldIndex > newIndex) {
      start = newIndex;
      end = oldIndex - 1;
      num = 1;
    } else {
      start = oldIndex + 1;
      end = newIndex;
      num = -1;
    }
    for (let i = start; i <= end; i++) {
      const from = this.lastElements[i];
      const to = this.lastElements[i + num];
      effectedElements.push({
        from,
        to
      });
    }
    cancelAnimationFrame(this.lastAnimationFrame);

    this.lastAnimationFrame = requestAnimationFrame(() => {
      effectedElements.forEach(element => animate(element, this.options));
    });
  }
}

function animate({
  from,
  to
}, {
  duration,
  easingFunction
}) {
  const domEl = from.domEl;
  const x = from.offsetLeft - to.offsetLeft;
  const y = from.offsetTop - to.offsetTop;
  domEl.style.pointerEvents = 'none';
  domEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  requestAnimationFrame(() => {
    domEl.addEventListener('transitionend', resetElementOnTransitionEnd);
    domEl.style.transition = `transform ${duration}ms ${easingFunction}`;
    domEl.style.transform = '';
  });
}

function resetElementOnTransitionEnd(event) {
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}

exports.default = SortAnimation;
exports.defaultOptions = defaultOptions;
