import React from 'react';
import { isEmpty } from 'lodash';
import { injectable } from 'inversify';
import Tools from '../lib/Tools';

export default
@injectable()
class AbcButtonTool extends Tools {
  name = 'abcButton';

  get run() {
    return () => true;
  }

  select = (state, activeViewId) => {
    return true;
  };

  get enable() {
    return state => {
      return true;
    };
  }

  renderTool(view) {
    if (isEmpty(view)) return null;
    // eslint-disable-next-line no-underscore-dangle
    return this._isDisplayed ? (
      <>
        <button key="abcButton">hello</button>
      </>
    ) : null;
  }
}
