/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen, cleanup } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import AddFriends from '../AddFriends';

 describe('CreateRoom', () => {
   test('should render without crashing', async () => {
     render(
       <AddFriends
         // pass all the props necessary for a basic render
         addFriendHandler={() => null}
         friends={
           [
             {
               key: 'fake_name',
               displayName: 'fake_name',
               uid: 'fake_uid',
               online: true,
             }
           ]
         }
       />,
     );
     const element = await screen.getByTestId('create-room-addfriends');
     expect(element).toBeInTheDocument();
   });
   test('should have console errors', async () => {
     const consoleErrorSpy = jest.spyOn(console, 'error');
     render(
       <AddFriends
         // pass all the props necessary for a basic render
         addFriendHandler={() => null}
         friends={
           [
             {
               key: 'fake_name',
               displayName: 'fake_name',
               uid: 'fake_uid',
               online: true,
             }
           ]
         }
       />,
     );
     expect(consoleErrorSpy).not.toHaveBeenCalled();
   });
 });
