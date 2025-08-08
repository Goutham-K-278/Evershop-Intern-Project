'use strict';

var Sensor = require('./Sensor/Sensor.cjs');
var MouseSensor = require('./MouseSensor/MouseSensor.cjs');
var TouchSensor = require('./TouchSensor/TouchSensor.cjs');
var DragSensor = require('./DragSensor/DragSensor.cjs');
var ForceTouchSensor = require('./ForceTouchSensor/ForceTouchSensor.cjs');
var SensorEvent = require('./SensorEvent/SensorEvent.cjs');



exports.Sensor = Sensor.default;
exports.MouseSensor = MouseSensor.default;
exports.TouchSensor = TouchSensor.default;
exports.DragSensor = DragSensor.default;
exports.ForceTouchSensor = ForceTouchSensor.default;
exports.DragMoveSensorEvent = SensorEvent.DragMoveSensorEvent;
exports.DragPressureSensorEvent = SensorEvent.DragPressureSensorEvent;
exports.DragStartSensorEvent = SensorEvent.DragStartSensorEvent;
exports.DragStopSensorEvent = SensorEvent.DragStopSensorEvent;
exports.SensorEvent = SensorEvent.SensorEvent;
