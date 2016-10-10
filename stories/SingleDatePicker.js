import React from 'react';
import moment from 'moment';
import { storiesOf, action } from '@kadira/storybook';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

storiesOf('SingleDatePicker', module)
  .add('Norwegian DST trouble', () => {
    moment.locale('nb');
    return (
      <div>
        <SingleDatePickerWrapper
          numberOfMonths={2}
          onChange={action('date: ')}
        />
        <p>Moment has the correct timezone offset with Norwegian locale:</p>
        <div>October 31th 2016: {moment('2016-10-31').toJSON()}</div>
        <p>
          Try selecting October 31th in the datepicker
          and see the output in the Storybook action logger.
          The offset is off by one...
        </p>
      </div>
    );
  });
