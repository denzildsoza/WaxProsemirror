import Service from '../Service';
import abcButtonTool from './abcButtonTool';

class AbcButtonService extends Service {
  name = 'AbcButtonService';

  register() {
    this.container.bind('abcButtonTool').to(abcButtonTool);
  }
}

export default AbcButtonService;
