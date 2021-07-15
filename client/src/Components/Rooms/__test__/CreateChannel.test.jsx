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

       />,
     );
     const element = await screen.getByTestId('create-channel');
     expect(element).toBeInTheDocument();
   });
   test('should have console errors', async () => {
     const consoleErrorSpy = jest.spyOn(console, 'error');
     render(
       <CreateChannel
         // pass all the props necessary for a basic render

       />,
     );
     expect(consoleErrorSpy).not.toHaveBeenCalled();
   });
 });
