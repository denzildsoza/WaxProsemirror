import React, { useContext } from 'react';
import styled from 'styled-components';

import { WaxContext } from 'wax-prosemirror-core';
import { Fragment } from 'prosemirror-model';

export default function ReplaceWithTool() {
  const { app, activeView, view, activeViewId } = useContext(WaxContext);

  // console.log('nodes', view?.main?.state?.config?.schema);
  const onclicked = () => {
    // const linkNode = schema.text(`hello`, [schema.marks.test.create()]);
    // view.main.dispatch(tr.replaceSelectionWith(paragraph, false));
    // view.main.dispatch(view.main.state.tr.deleteSelection());
    // view.main.dispatch(view.main.state.tr.replaceSelection());
    view.main.dispatch(
      view.main.state.tr.replaceWith(
        view.main.state.selection.from,
        view.main.state.selection.to,
        view.main.state.schema.text('hello'),
      ),
    );
  };
  return <button onClick={() => onclicked()}>replaceWith</button>;
}
