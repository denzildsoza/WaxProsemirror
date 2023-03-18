import React from 'react';
import { ToolGroup } from 'wax-prosemirror-services';
import ReplaceSelectionWithTool from './replaceSelectionWithTool';

export default class ReplaceSelectionWithToolGroup extends ToolGroup {
  renderTools() {
    return <ReplaceSelectionWithTool />;
  }
}
