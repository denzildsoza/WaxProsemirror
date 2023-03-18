import { Service } from 'wax-prosemirror-services';
import FilterNodeToolGroup from './FilterNodeToolgroup';

class FilterNodeToolGroupService extends Service {
  name = 'FilterNodeToolGroupService';

  boot() {}

  register() {
    this.container.bind('FilterNodeToolGroup').to(FilterNodeToolGroup);
  }
}

export default FilterNodeToolGroupService;
