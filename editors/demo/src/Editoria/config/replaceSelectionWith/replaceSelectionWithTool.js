import React, { useContext } from 'react';
import styled from 'styled-components';

import { WaxContext } from 'wax-prosemirror-core';
import { Fragment } from 'prosemirror-model';

export default function ReplaceSelectionWithTool() {
  // console.log(first);
  // console.log('nodes', view?.main?.state?.config?.schema);
  const { view } = useContext(WaxContext);
  const paragraph = view?.main?.state?.config?.schema?.nodes?.paragraph.create(
    { id: 'djadbabsasdhbs' },
    Fragment.empty,
  );
  const onclicked = () => {
    view.main.dispatch(
      view?.main?.state?.tr?.replaceSelectionWith(paragraph, false),
    );
  };
  return <button onClick={() => onclicked()}>replaceSelection</button>;
}
