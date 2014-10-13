import {printConsoleMessage} from './utils';


export default function EmberDeprecate_deprecateAction (fn) {
  var f;

  f = function () {
    var actionObj = this.get('_actions');
    var actionName = null;
      for (var k in actionObj) {
        if (actionObj[k] === f) {
          actionName = k;
          break;
        }
      }
      printConsoleMessage('Deprecated action - %@'.fmt(actionName));
      fn.apply(this, arguments);
  };
  return f;
}
