'use strict';

function AutoBind(originalMethod, {
  name,
  addInitializer
}) {
  addInitializer(function () {

    this[name] = originalMethod.bind(this);

  });
}

exports.AutoBind = AutoBind;
