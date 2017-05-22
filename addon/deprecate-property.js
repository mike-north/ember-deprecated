import Ember from 'ember';
import { getDependentPropertyKeys, getVal } from 'ember-cpm/utils';
import { printConsoleMessage } from './utils';

const { runInDebug, computed } = Ember;

export default function EmberDeprecate_deprecateProperty() {
  let propertyArguments = getDependentPropertyKeys(
    Array.prototype.slice.call(arguments)
  );
  let [originalProp] = arguments;
  propertyArguments.push(function(key) {
    runInDebug(
      function() {
        printConsoleMessage(
          `Deprecated property: ${this.constructor.toString()} - ${key}`
        );
      }.bind(this)
    );
    return getVal.call(this, originalProp);
  });
  return computed.apply(this, propertyArguments);
}
