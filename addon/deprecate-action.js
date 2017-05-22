import { printConsoleMessage } from './utils';

export default function EmberDeprecate_deprecateAction(fn) {
  let f;

  f = function() {
    let actionObj = this.get('_actions');
    let actionName = null;
    for (let k in actionObj) {
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
