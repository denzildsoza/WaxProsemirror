import { Service } from 'wax-prosemirror-services';
import deleteSelectionToolGroup from './deleteSelectionToolGroup';

class deleteSelectionToolGroupService extends Service {
  name = 'ExternalToolGroupService';

  boot() {}

  register() {
    this.container
      .bind('deleteSelectionToolGroup')
      .to(deleteSelectionToolGroup);
  }
}

export default deleteSelectionToolGroupService;
