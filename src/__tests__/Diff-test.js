import React from 'react';
import {shallow} from 'enzyme';

import Diff from '../Diff';

/** TEXT Testing */

it('text result of default value', () => {
  // Render a checkbox with label in the document
  const component = shallow(
    <Diff beforeText="original value" afterText="changed value" />
  );

  expect(component.text()).toEqual('orichanginaled value');
});

it('text result of same value', () => {
  // Render a checkbox with label in the document
  const component = shallow(
    <Diff beforeText="value" afterText="value" />
  );

  expect(component.text()).toEqual('value');
});
