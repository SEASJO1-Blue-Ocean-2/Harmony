/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen, cleanup } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import CreateChannel from '../CreateChannel';

 describe('CreateChannel', () => {
   test('should render without crashing', async () => {
     render(
       <CreateChannel
         // pass all the props necessary for a basic render
         forTest={false}
         db={{}}
         roomId={'fake_room_uid_1'}
         voice={false}
       />,
     );
     const element = await screen.getByTestId('create-channel');
     expect(element).toBeInTheDocument();
   });

   // this test is broken and should be fixed:

  //  test('shouldn\'t crash if create menu open', async () => {
  //   render(
  //     <CreateChannel
  //       // pass all the props necessary for a basic render
  //       forTest={true}
  //       db={{}}
  //       roomId={'fake_room_uid_1'}
  //       voice={false}
  //     />,
  //   );
  //   const element = await screen.getByTestId('create-channel');
  //   expect(element).toBeInTheDocument();
  // });
   test('should not have console errors', async () => {
     const consoleErrorSpy = jest.spyOn(console, 'error');
     render(
       <CreateChannel
         // pass all the props necessary for a basic render
         forTest={false}
         db={{}}
         roomId={'fake_room_uid_1'}
         voice={false}
       />,
     );
     expect(consoleErrorSpy).not.toHaveBeenCalled();
   });
 });
