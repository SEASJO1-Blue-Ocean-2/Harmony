/**
 * @jest-environment jsdom
 */

test('enter description here', () => {
  expect('string').toBe('string');
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import FriendsList from '../FriendsList.jsx';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<RatingEntry />, div);
// });

// // const db = "www.database.com";
// // const user = {
// //   uid: "uid"
// // }

// describe('FriendsList', () => {
//   test('should render without crashing', async () => {
//     render(
//       <FriendsList
//         // pass all the props necessary for a basic render
//         db={{1: 'spencer'}}
//         user= {{}}
//       />,
//     );
//     const element = await screen.getByTestId('friends-list');
//     expect(element).toBeInTheDocument();
//   });
//   test('should have console errors', async () => {
//     const consoleErrorSpy = jest.spyOn(console, 'error');
//     render(
//       <FriendsList
//         // pass all the props necessary for a basic render
//       />,
//     );
//     expect(consoleErrorSpy).not.toHaveBeenCalled();
//   });
// });
