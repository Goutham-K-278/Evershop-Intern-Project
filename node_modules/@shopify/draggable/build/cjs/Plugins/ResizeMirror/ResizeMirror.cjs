'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.cjs');
var AbstractPlugin = require('../../shared/AbstractPlugin/AbstractPlugin.cjs');
var AutoBind = require('../../shared/utils/decorators/AutoBind.cjs');
var requestNextAnimationFrame = require('../../shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.cjs');
var DragEvent = require('../../Draggable/DragEvent/DragEvent.cjs');

var _initProto, _class;

const defaultOptions = {};

class ResizeMirror extends AbstractPlugin.AbstractPlugin {

  constructor(draggable) {
    _initProto(super(draggable));

    this.lastWidth = 0;

    this.lastHeight = 0;

    this.mirror = null;
  }

  attach() {
    this.draggable.on('mirror:created', this.onMirrorCreated).on('drag:over', this.onDragOver).on('drag:over:container', this.onDragOver);
  }

  detach() {
    this.draggable.off('mirror:created', this.onMirrorCreated).off('mirror:destroy', this.onMirrorDestroy).off('drag:over', this.onDragOver).off('drag:over:container', this.onDragOver);
  }

  getOptions() {
    return this.draggable.options.resizeMirror || {};
  }

  onMirrorCreated({
    mirror
  }) {
    this.mirror = mirror;
  }

  onMirrorDestroy() {
    this.mirror = null;
  }

  onDragOver(dragEvent) {
    this.resize(dragEvent);
  }

  resize(dragEvent) {
    requestAnimationFrame(() => {
      let over = null;
      const {
        overContainer
      } = dragEvent;
      if (this.mirror == null || this.mirror.parentNode == null) {
        return;
      }
      if (this.mirror.parentNode !== overContainer) {
        overContainer.appendChild(this.mirror);
      }
      if (DragEvent.isDragOverEvent(dragEvent)) {
        over = dragEvent.over;
      }
      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];
      if (!overElement) {
        return;
      }
      requestNextAnimationFrame.default(() => {
        const overRect = overElement.getBoundingClientRect();
        if (this.mirror == null || this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
          return;
        }
        this.mirror.style.width = `${overRect.width}px`;
        this.mirror.style.height = `${overRect.height}px`;
        this.lastWidth = overRect.width;
        this.lastHeight = overRect.height;
      });
    });
  }
}
_class = ResizeMirror;
[_initProto] = _rollupPluginBabelHelpers.applyDecs2305(_class, [[AutoBind.AutoBind, 2, "onMirrorCreated"], [AutoBind.AutoBind, 2, "onMirrorDestroy"], [AutoBind.AutoBind, 2, "onDragOver"]], [], 0, void 0, AbstractPlugin.AbstractPlugin).e;

exports.default = ResizeMirror;
exports.defaultOptions = defaultOptions;
