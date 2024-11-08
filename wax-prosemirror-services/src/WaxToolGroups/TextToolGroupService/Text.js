import React from 'react';
import { injectable, inject } from 'inversify';
import { LeftMenuTitle } from 'wax-prosemirror-components';
import ToolGroup from '../../lib/ToolGroup';

@injectable()
class Text extends ToolGroup {
  tools = [];
  title = (<LeftMenuTitle title="Text" />);

  constructor(
    @inject('Paragraph') paragraph,
    @inject('ParagraphContinued') paragraphContinued,
    @inject('ExtractProse') extractProse,
    @inject('ExtractPoetry') extractPoetry,
    @inject('SourceNote') sourceNote,
    @inject('BlockQuote') blockQuote,
    @inject('ToDiv') toDiv,
  ) {
    super();
    this.tools = [
      paragraph,
      paragraphContinued,
      extractProse,
      extractPoetry,
      sourceNote,
      blockQuote,
      toDiv,
    ];
  }
}

export default Text;
