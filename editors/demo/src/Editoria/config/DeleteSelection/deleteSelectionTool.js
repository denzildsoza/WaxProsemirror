import React, { useContext } from 'react';

import { WaxContext } from 'wax-prosemirror-core';

export default function DeleteSelectionTool() {
  const { view } = useContext(WaxContext);

  const onclicked = () => {
    view.main.dispatch(view.main.state.tr.deleteSelection());
  };
  return <button onClick={() => onclicked()}>deleteSelection</button>;
}
