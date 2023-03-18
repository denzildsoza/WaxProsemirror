import React, { useContext, useLayoutEffect, useRef, useState } from 'react';

import { WaxContext } from 'wax-prosemirror-core';
import { DocumentHelpers } from 'wax-prosemirror-utilities';
import styled from 'styled-components';
import { grid } from '@pubsweet/ui-toolkit';

// import { Drawer } from '@mui/material';

export default function FilterNodeTool() {
  const { view } = useContext(WaxContext);
  const [refNodes, setrefNodes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropElement = useRef();

  let styles = { right: '-190px' };

  const [style, setStyle] = useState(styles);
  const Wrapper = styled.div`
    position: relative;
    z-index: 2;
  `;

  const DropWrapper = styled.div`
    background: white;
    margin-top: ${grid(1)};
    position: absolute;
    top: 32px;
    height: 500px;
    width: 400px;
    border: 1px solid black;
    padding: 10px 0px 0px 10px;
    overflow: scroll;
  `;
  useLayoutEffect(() => {
    setStyle(styles);
    if (!dropElement.current) return;
    const { right } = dropElement.current.getBoundingClientRect();
    if (right > window.window.innerWidth) {
      const newRight = -175 + (right - window.window.innerWidth);
      styles = { right: `${newRight}px` };
      setStyle(styles);
    }
  }, [isOpen]);

  const onclicked = () => {
    const nodes = DocumentHelpers.findBlockNodes(view.main.state.doc);
    // console.log('abc=====>', nodes);
    const refNodes = nodes.filter(
      value => value.node.attrs.class === 'reference',
    );
    setrefNodes(refNodes);
    setIsOpen(true);
  };
  return (
    <Wrapper>
      <button onClick={() => onclicked()}>ref</button>
      {isOpen && (
        <DropWrapper ref={dropElement} style={style}>
          <button
            onClick={() => setIsOpen(false)}
            style={{ fontSize: '20px', position: 'sticky' }}
          >
            X
          </button>
          {isOpen && (
            <div>
              {refNodes.map(value => (
                <p>
                  {value.node.content.content.map(value1 => (
                    <span>{value1.text}</span>
                  ))}
                </p>
              ))}
            </div>
          )}
        </DropWrapper>
      )}
    </Wrapper>
  );
}
