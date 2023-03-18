import React, { useContext } from 'react';
import styled from 'styled-components';

import { WaxContext } from 'wax-prosemirror-core';
import { Fragment } from 'prosemirror-model';

export default function ExternalTool() {
  const { app, activeView, view, activeViewId } = useContext(WaxContext);

  const onclicked = () => {
    // view.main.dispatch(view.main.state.tr.deleteSelection());
    view.main.dispatch(view.main.state.tr.insertText('hello'));
  };
  return <button onClick={() => onclicked()}>insertText</button>;
}
