import React from 'react';
import { ToolGroup } from 'wax-prosemirror-services';
import ReplaceWithTool from './replaceWithTool';

export default class ReplaceWithToolGroup extends ToolGroup {
  renderTools() {
    return <ReplaceWithTool />;
  }
}
