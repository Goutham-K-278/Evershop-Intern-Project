import closest from '../shared/utils/closest/closest.mjs';
import Draggable from '../Draggable/Draggable.mjs';
import '../Draggable/DragEvent/DragEvent.mjs';
import '../Draggable/DraggableEvent/DraggableEvent.mjs';
import '../Draggable/Plugins/Announcement/Announcement.mjs';
import '../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs';
import '../Draggable/Sensors/SensorEvent/SensorEvent.mjs';
import '../Draggable/Sensors/TouchSensor/TouchSensor.mjs';
import { DroppableStartEvent, DroppableStopEvent, DroppableDroppedEvent, DroppableReturnedEvent } from './DroppableEvent/DroppableEvent.mjs';

const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const dropInDropzone = Symbol('dropInDropZone');
const returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
const closestDropzone = Symbol('closestDropzone');
const getDropzones = Symbol('getDropzones');

function onDroppableDroppedDefaultAnnouncement({
  dragEvent,
  dropzone
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
  return `Dropped ${sourceText} into ${dropzoneText}`;
}

function onDroppableReturnedDefaultAnnouncement({
  dragEvent,
  dropzone
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
  return `Returned ${sourceText} from ${dropzoneText}`;
}

const defaultAnnouncements = {
  'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
  'droppable:returned': onDroppableReturnedDefaultAnnouncement
};
const defaultClasses = {
  'droppable:active': 'draggable-dropzone--active',
  'droppable:occupied': 'draggable-dropzone--occupied'
};
const defaultOptions = {
  dropzone: '.draggable-droppable'
};

class Droppable extends Draggable {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...defaultOptions,
      ...options,
      classes: {
        ...defaultClasses,
        ...(options.classes || {})
      },
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.dropzones = null;

    this.lastDropzone = null;

    this.initialDropzone = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }
    this.dropzones = [...this[getDropzones]()];
    const dropzone = closest(event.sensorEvent.target, this.options.dropzone);
    if (!dropzone) {
      event.cancel();
      return;
    }
    const droppableStartEvent = new DroppableStartEvent({
      dragEvent: event,
      dropzone
    });
    this.trigger(droppableStartEvent);
    if (droppableStartEvent.canceled()) {
      event.cancel();
      return;
    }
    this.initialDropzone = dropzone;
    for (const dropzoneElement of this.dropzones) {
      if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
        continue;
      }
      dropzoneElement.classList.add(...this.getClassNamesFor('droppable:active'));
    }
  }

  [onDragMove](event) {
    if (event.canceled()) {
      return;
    }
    const dropzone = this[closestDropzone](event.sensorEvent.target);
    const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));
    if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
      this.lastDropzone = dropzone;
    } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
      this[returnToOriginalDropzone](event);
      this.lastDropzone = null;
    }
  }

  [onDragStop](event) {
    const droppableStopEvent = new DroppableStopEvent({
      dragEvent: event,
      dropzone: this.lastDropzone || this.initialDropzone
    });
    this.trigger(droppableStopEvent);
    const occupiedClasses = this.getClassNamesFor('droppable:occupied');
    for (const dropzone of this.dropzones) {
      dropzone.classList.remove(...this.getClassNamesFor('droppable:active'));
    }
    if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
      this.initialDropzone.classList.remove(...occupiedClasses);
    }
    this.dropzones = null;
    this.lastDropzone = null;
    this.initialDropzone = null;
  }

  [dropInDropzone](event, dropzone) {
    const droppableDroppedEvent = new DroppableDroppedEvent({
      dragEvent: event,
      dropzone
    });
    this.trigger(droppableDroppedEvent);
    if (droppableDroppedEvent.canceled()) {
      return false;
    }
    const occupiedClasses = this.getClassNamesFor('droppable:occupied');
    if (this.lastDropzone) {
      this.lastDropzone.classList.remove(...occupiedClasses);
    }
    dropzone.appendChild(event.source);
    dropzone.classList.add(...occupiedClasses);
    return true;
  }

  [returnToOriginalDropzone](event) {
    const droppableReturnedEvent = new DroppableReturnedEvent({
      dragEvent: event,
      dropzone: this.lastDropzone
    });
    this.trigger(droppableReturnedEvent);
    if (droppableReturnedEvent.canceled()) {
      return;
    }
    this.initialDropzone.appendChild(event.source);
    this.lastDropzone.classList.remove(...this.getClassNamesFor('droppable:occupied'));
  }

  [closestDropzone](target) {
    if (!this.dropzones) {
      return null;
    }
    return closest(target, this.dropzones);
  }

  [getDropzones]() {
    const dropzone = this.options.dropzone;
    if (typeof dropzone === 'string') {
      return document.querySelectorAll(dropzone);
    } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
      return dropzone;
    } else if (typeof dropzone === 'function') {
      return dropzone();
    } else {
      return [];
    }
  }
}

export { Droppable as default };
