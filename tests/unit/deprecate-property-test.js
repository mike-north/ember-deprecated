import Ember from 'ember';
import deprecateProperty from 'ember-deprecated/deprecate-property';
import { module, test } from 'qunit';

const { Object: Obj, computed } = Ember;

const MyType = Obj.extend({
  a: 123,
  b: deprecateProperty(14),
  c: deprecateProperty(computed.alias('a')),
  d: deprecateProperty(computed.gt('a', 200)),
  e: deprecateProperty(computed.gt('a', 100))
});

let myObj;

module('deprecate-property', {
  beforeEach() {
    myObj = MyType.create();
  },
  afterEach() {

  }
});

test('literal property', function(assert) {
  assert.equal(myObj.get('b'), 14);
});

test('CPM - alias', function(assert) {
  assert.equal(myObj.get('c'), 123);
});

test('CPM - gt', function(assert) {
  assert.equal(myObj.get('d'), false);
  assert.equal(myObj.get('e'), true);
});
