import Ember from 'ember';
import deprecateProperty from 'ember-deprecated/deprecate-property';


var MyType = Ember.Object.extend({
  a: 123,
  b: deprecateProperty(14),
  c: deprecateProperty(Ember.computed.alias('a')),
  d: deprecateProperty(Ember.computed.gt('a', 200)),
  e: deprecateProperty(Ember.computed.gt('a', 100))
});

var myObj;

module('deprecate-property', {
  setup: function () {
    myObj = MyType.create();
  },
  teardown: function () {

  }
});

test('literal property', function () {
  equal(myObj.get('b'), 14);
});

test('CPM - alias', function () {
  equal(myObj.get('c'), 123);
});

test('CPM - gt', function () {
  equal(myObj.get('d'), false);
  equal(myObj.get('e'), true);
});
