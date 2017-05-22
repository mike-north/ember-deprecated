import Ember from 'ember';
import deprecateProp from 'ember-deprecated/deprecate-property';
import deprecateAction from 'ember-deprecated/deprecate-action';

const { Controller, Logger, computed } = Ember;

export default Controller.extend({
  actions: {
    submit: deprecateAction(function() {
      Logger.log('submit the datas');
    }),

    go: deprecateAction(function() {
      Logger.log('go');
    })
  },

  a: 12,
  testProp: deprecateProp('a'),
  testProp2: deprecateProp(123),
  fullName: deprecateProp(computed.gt('a', 13))
});
