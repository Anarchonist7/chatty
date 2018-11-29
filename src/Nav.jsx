import React, {Component} from 'react';

  class NavBar extends Component {
    render() {
      let word = 'users';
      if (this.props.population === 1) {
        word = 'user';
      }
      return (
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <div className="population">{this.props.population} {word} online</div>
        </nav>
      )
    }
  }

  export default NavBar;

