/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreateRoom from '../CreateRoom';

// TODO: test components indivdually
// jest.mock('./header/Header', () => {
//   const Header = () => <div />;
//   return Header;
// });
// jest.mock('./roomName/RoomName', () => {
//   const RoomName = () => <div />;
//   return RoomName;
// });
// jest.mock('./publicPrivate/PublicPrivate', () => {
//   const PublicPrivate = () => <div />;
//   return PublicPrivate;
// });
// jest.mock('./addFriends/AddFriends', () => {
//   const AddFriends = () => <div />;
//   return AddFriends;
// });
// jest.mock('./createButton/CreateButton', () => {
//   const CreateButton = () => <div />;
//   return CreateButton;
// });

describe('CreateRoom', () => {
  test('should render without crashing', async () => {
    render(
      <CreateRoom
        // pass all the props necessary for a basic render
      />,
    );
    const element = await screen.getByTestId('create-room');
    expect(element).toBeInTheDocument();
  });
  test('should have console errors', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    render(
      <CreateRoom
        // pass all the props necessary for a basic render
      />,
    );
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
