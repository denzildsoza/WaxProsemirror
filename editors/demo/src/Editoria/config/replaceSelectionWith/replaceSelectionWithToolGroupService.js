import { Service } from 'wax-prosemirror-services';
import ReplaceSelectionWithToolGroup from '../replaceSelectionWith/replaceSelectionWithToolGroup';

class ReplaceSelectionWithGroupService extends Service {
  name = 'ExternalToolGroupService';

  boot() {}

  register() {
    this.container
      .bind('ReplaceSelectionWithToolGroup')
      .to(ReplaceSelectionWithToolGroup);
  }
}

export default ReplaceSelectionWithGroupService;
