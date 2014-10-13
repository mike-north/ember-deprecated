import Ember from 'ember';

export function printConsoleMessage(msg) {
  if (console.trace) {
    if (console.groupCollapsed) {
      console.groupCollapsed(msg);
      console.trace();
      console.groupEnd();
    }
    else {
      Ember.Logger.warn(msg);
      console.trace();
    }
  }
  else {
    Ember.Logger.warn(msg);
  }
}
