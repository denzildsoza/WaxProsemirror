import { Service } from 'wax-prosemirror-services';
import ReplaceWithToolGroup from './replaceWithToolGroup';

class ReplaceWithToolGroupService extends Service {
  name = 'ExternalToolGroupService';

  boot() {}

  register() {
    this.container.bind('ReplaceWithToolGroup').to(ReplaceWithToolGroup);
  }
}

export default ReplaceWithToolGroupService;
