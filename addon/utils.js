/* eslint no-console: "off" */
import Ember from 'ember';

const { Logger } = Ember;

export function printConsoleMessage(msg) {
  if (console.trace) {
    if (console.groupCollapsed) {
      console.groupCollapsed(msg);
      console.trace();
      console.groupEnd();
    } else {
      Logger.warn(msg);
      console.trace();
    }
  } else {
    Logger.warn(msg);
  }
}
