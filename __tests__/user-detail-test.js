import React from 'react';
import Link from '../src/container/list_view/link';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});
