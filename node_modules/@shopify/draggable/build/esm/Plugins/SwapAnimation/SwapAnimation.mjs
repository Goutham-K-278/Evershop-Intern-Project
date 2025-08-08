import { applyDecs2305 as _applyDecs2305 } from '../../_virtual/_rollupPluginBabelHelpers.mjs';
import { AbstractPlugin } from '../../shared/AbstractPlugin/AbstractPlugin.mjs';
import { AutoBind } from '../../shared/utils/decorators/AutoBind.mjs';

var _initProto, _class;

const defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out',
  horizontal: false
};

class SwapAnimation extends AbstractPlugin {

  constructor(draggable) {
    _initProto(super(draggable));

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
  }

  attach() {
    this.draggable.on('sortable:sorted', this.onSortableSorted);
  }

  detach() {
    this.draggable.off('sortable:sorted', this.onSortableSorted);
  }

  getOptions() {
    return this.draggable.options.swapAnimation || {};
  }

  onSortableSorted({
    oldIndex,
    newIndex,
    dragEvent
  }) {
    const {
      source,
      over
    } = dragEvent;
    if (this.lastAnimationFrame) {
      cancelAnimationFrame(this.lastAnimationFrame);
    }

    this.lastAnimationFrame = requestAnimationFrame(() => {
      if (oldIndex >= newIndex) {
        animate(source, over, this.options);
      } else {
        animate(over, source, this.options);
      }
    });
  }
}

_class = SwapAnimation;
[_initProto] = _applyDecs2305(_class, [[AutoBind, 2, "onSortableSorted"]], [], 0, void 0, AbstractPlugin).e;
function animate(from, to, {
  duration,
  easingFunction,
  horizontal
}) {
  for (const element of [from, to]) {
    element.style.pointerEvents = 'none';
  }
  if (horizontal) {
    const width = from.offsetWidth;
    from.style.transform = `translate3d(${width}px, 0, 0)`;
    to.style.transform = `translate3d(-${width}px, 0, 0)`;
  } else {
    const height = from.offsetHeight;
    from.style.transform = `translate3d(0, ${height}px, 0)`;
    to.style.transform = `translate3d(0, -${height}px, 0)`;
  }
  requestAnimationFrame(() => {
    for (const element of [from, to]) {
      element.addEventListener('transitionend', resetElementOnTransitionEnd);
      element.style.transition = `transform ${duration}ms ${easingFunction}`;
      element.style.transform = '';
    }
  });
}

function resetElementOnTransitionEnd(event) {
  if (event.target == null || !isHTMLElement(event.target)) {
    return;
  }
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}
function isHTMLElement(eventTarget) {
  return Boolean('style' in eventTarget);
}

export { SwapAnimation as default, defaultOptions };
