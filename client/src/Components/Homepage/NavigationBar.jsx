import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBar from './SearchBar.jsx';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          <img src ='http://cdn.onlinewebfonts.com/svg/img_153287.png'className ='homePageIcon'></img>
          <h1 className='Harmony'>harmony</h1>
          <img src='http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png' className='profileIcon'></img>
          <SearchBar db={this.props.db} user={this.props.user}/>
        </div>
      </>
    );
  }
}

export default NavigationBar;

