# Ember-deprecated ![https://api.travis-ci.org/TrueNorth/ember-deprecated.svg](https://api.travis-ci.org/TrueNorth/ember-deprecated.svg)

Ember-deprecated makes it easy to warn developers about code that they shouldn't be using anymore

## Installation

* `npm install --save-dev ember-deprecated`

## Deprecating Properties

If you have a type defined:
````js
export default Ember.Object.extend({
  firstName: '',
  lastName: '',

  fullName: function () {
    return '%@ %@'.fmt(
      this.get('firstName'),
      this.get('lastName')
    );
  }.property('firstName', 'lastName')  
});
````
You can just wrap the properties you wish to deprecate with `deprecateProperty`
````js
import deprecateProperty from 'ember-deprecated/deprecate-property';

export default Ember.Object.extend({
  firstName: '',
  lastName: deprecateProperty(''),

  fullName: deprecateProperty(function () {
    return '%@ %@'.fmt(
      this.get('firstName'),
      this.get('lastName')
    );
  }.property('firstName', 'lastName'))
});
````
And you'll see something like this logged to the console

![http://i57.tinypic.com/2vsgu2e.png](http://i57.tinypic.com/2vsgu2e.png)

## Deprecating Actions
if you have a controller
````js
export default Ember.ObjectController.extend({
  actions: {
    submit: function () {
      console.log('submit the datas!');
    }
  }
});
````
You can just wrap the actions you wish to deprecate with `deprecateAction`
````js
import deprecateAction from 'ember-deprecated/deprecate-action';

export default Ember.ObjectController.extend({
  actions: {
    submit: deprecateAction(function () {
      console.log('submit the datas!');
    })
  }
});
````
And you'll see something like this logged to the console once the action is invoked

![http://i61.tinypic.com/oepzm.png](http://i61.tinypic.com/oepzm.png)

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
