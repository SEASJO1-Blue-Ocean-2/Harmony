/**
 * @jest-environment jsdom
 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import FriendsList from '../FriendsList.jsx';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<RatingEntry />, div);
// });

// import React from 'react';
// import { render, screen, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import FriendsList from '../FriendsList.jsx';

// // const db = "www.database.com";
// // const user = {
// //   uid: "uid"
// // }

// describe('FriendsList', () => {
//   test('should render without crashing', async () => {
//     render(
//       <FriendsList
//         // pass all the props necessary for a basic render
//         db={db}
//         user= {user}
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
