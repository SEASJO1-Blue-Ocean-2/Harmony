import React from 'react';
import renderer, { act } from 'react-test-renderer';
import CreateLink from '../CreateLink';

test('Link changes the class when hovered', () => {
  let component;
  act(() => {
    component = renderer.create(
      <CreateLink href="/home/alex/hr/harmony/client/dist/room.html">Friend</CreateLink>,
    );
  });
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseEnter();
  });

  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
