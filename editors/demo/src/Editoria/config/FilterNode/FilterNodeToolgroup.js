import React from 'react';
import { ToolGroup } from 'wax-prosemirror-services';
import FilterNodeTool from './FilterNodeTool';

export default class FilterNodeToolGroup extends ToolGroup {
  renderTools() {
    return <FilterNodeTool />;
  }
}
