import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LeftMenu from '../LeftMenu/index';
import RightMenu from '../RightMenu/index';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showLeft: false,
      showRight: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleMenuRight = this.handleMenuRight.bind(this);
    this.closeRightMenu = this.closeRightMenu.bind(this);
  }

  handleMenu() {
    this.setState({
      showLeft: !this.state.showLeft,
      showRight: false,
    });
  console.log(showLeft);
  }
  handleMenuRight() {
    this.setState({
      showRight: !this.state.showRight,
      showLeft: false,
    });
  }


/* so this is your close button function! */
  closeRightMenu() {
    this.setState({
    showRight:false
    });
}
  render() {
    return (
      <div>
        <div>
          <button
            style={{
            position: 'fixed',
            width: '50px',
            height: '30px',
            left: '30px',
            top: '300px',
        }}
            onClick={this.handleMenu}

          >
            Left
          </button>
          <ReactCSSTransitionGroup
            transitionName="backgroundLeft"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.state.showLeft ?
              <LeftMenu /> :
              null
            }
          </ReactCSSTransitionGroup>
        </div>
        <div>
          <button
            style={{
            position: 'fixed',
            width: '50px',
            height: '30px',
            right: '30px',
            top: '300px',
        }}
            onClick={this.handleMenuRight}
          >
            Right
          </button>
          <ReactCSSTransitionGroup
            transitionName="backgroundRight"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.state.showRight ?
              <RightMenu
          close={this.closeRightMenu} /*this is how pass the function property to the child component*/


          left={this.state.showLeft}/*this is how I passed the showLeft state to the child component*/

          right={this.state.showRight} /*this is how I passed the showRight state to the child component*/

              /> :
              null
          }
          </ReactCSSTransitionGroup>
          <button
            onClick={this.closeRightMenu}
          >
            close
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
