import Service from '../../Service';
import { toDivNode } from 'wax-prosemirror-schema';
import ToDiv from './ToDiv';

class ToDivService extends Service {
  boot() {}

  register() {
    this.container.bind('ToDiv').to(ToDiv);
    const createNode = this.container.get('CreateNode');
    createNode(
      {
        toDiv: toDivNode,
      },
      { toWaxSchema: true },
    );
  }
}

export default ToDivService;
