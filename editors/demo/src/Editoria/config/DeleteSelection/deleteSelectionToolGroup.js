import React from 'react';
import { ToolGroup } from 'wax-prosemirror-services';
import DeleteSelectionTool from './deleteSelectionTool';

export default class deleteSelectionToolGroup extends ToolGroup {
  renderTools() {
    return <DeleteSelectionTool />;
  }
}
