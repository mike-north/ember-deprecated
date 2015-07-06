import Ember from 'ember';
import {getDependentPropertyKeys, getVal} from 'ember-cpm/utils';
import {printConsoleMessage} from './utils';


export default function EmberDeprecate_deprecateProperty () {
  var propertyArguments = getDependentPropertyKeys(Array.prototype.slice.call(arguments));
  var originalProp = arguments[0];
  propertyArguments.push(function (key) {
    Ember.runInDebug(
      function () {
        printConsoleMessage(`Deprecated property: ${this.constructor.toString()} - ${key}`);
      }.bind(this)
    );
    return getVal.call(this, originalProp);
  });
  return Ember.computed.apply(this, propertyArguments);
}
