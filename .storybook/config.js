import moment from 'moment';
import { configure, addDecorator } from '@kadira/storybook';
import '../css/styles.scss';

addDecorator((story) => {
  moment.locale('en');
  return (story());
});

function loadStories() {
  require('../stories/SingleDatePicker');
}

configure(loadStories, module);
