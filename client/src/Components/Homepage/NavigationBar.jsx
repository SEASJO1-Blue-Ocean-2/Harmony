import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBar from './SearchBar.jsx';
import MainPage from './MainPage.jsx';
import Logout from './Logout.jsx'
class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <Link to='/' exact='true'>
          {this.props.user && <input type='image' src='https://img.icons8.com/material/452/home--v5.png' className='homePageIcon'></input> }
          </Link>

          <h1 className='Harmony'>harmony</h1>
          <Link to='/profile'>
          {this.props.user &&  <img src='http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' className='profileIcon'></img> }

          </Link>

        </div>
      </>
    );
  }
}

export default NavigationBar;

