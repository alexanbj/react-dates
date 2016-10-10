import React from 'react';
import moment from 'moment';
import { storiesOf, action } from '@kadira/storybook';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

import { VERTICAL_ORIENTATION } from '../constants';

storiesOf('SingleDatePicker', module)
  .add('default', () => (
    <SingleDatePickerWrapper />
  ))
  .add('single month', () => (
    <SingleDatePickerWrapper
      numberOfMonths={1}
    />
  ))
  .add('vertical', () => (
    <SingleDatePickerWrapper
      orientation={VERTICAL_ORIENTATION}
    />
  ))
  .add('horizontal with portal', () => (
    <SingleDatePickerWrapper
      withPortal
    />
  ))
  .add('horizontal with fullscreen portal', () => (
    <SingleDatePickerWrapper withFullScreenPortal />
  ))
  .add('vertical with full screen portal', () => (
    <SingleDatePickerWrapper
      orientation={VERTICAL_ORIENTATION}
      withFullScreenPortal
    />
  ))
  .add('non-english locale', () => {
    moment.locale('zh-cn');
    return (
      <SingleDatePickerWrapper
        placeholder="入住日期"
        monthFormat="YYYY[年]MMMM"
        phrases={{
          closeDatePicker: '关闭',
        }}
      />
    );
  })
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
  })
  .add('with custom display format', () => (
    <SingleDatePickerWrapper
      displayFormat="MMM D"
    />
  ))
  .add('with outside days enabled', () => (
    <SingleDatePickerWrapper
      numberOfMonths={1}
      enableOutsideDays
    />
  ));
