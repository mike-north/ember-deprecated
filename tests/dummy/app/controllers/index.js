import Ember from 'ember';
import deprecateProp from 'ember-deprecated/deprecate-property';
import deprecateAction from 'ember-deprecated/deprecate-action';

export default Ember.ObjectController.extend({
  actions: {
      submit: deprecateAction(function () {
        Ember.Logger.log('submit the datas');
      }),

      go: deprecateAction(function () {
        Ember.Logger.log('go');
      })
  },

  a: 12,
  testProp: deprecateProp('a'),
  testProp2: deprecateProp(123),
  fullName: deprecateProp(Ember.computed.gt('a', 13))
});
