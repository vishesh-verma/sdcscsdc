import React, { Component } from 'react';
/* import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; */

class RightMenu extends Component {
  constructor(props) { /*this is how we add the props to the component*/

    super(props);

    this.state = {
  /*    showRight: true,             you don't have to declare anything here coz we are accessing states from parent component   */
    };
  /*  this.handleMenuRight = this.handleMenuRight.bind(this); */
  }

  /*handleMenuRight() {
    this.setState({
      showRight: this.state.closeRightMenu(this.props.right),
    });
  }*/
  render() {

    console.log(this.props.left);/*here I am accessing the showLeft state you can check in the console*/

    console.log(this.props.right);/*here I am accessing the showRight state you can check in the console*/

    return (
      <div
        style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '300px',
            top: '64px',
            backgroundColor: '#D3D3D3',
        }}
      >
        <div>
          <button
            onClick={this.props.close}/*this is how I am accessing the closeRightMenu functio from  parent component*/

          >
            Close
          </button>
          {this.state.showRight}
          <h2>
            Right Menu!
          </h2>
        </div>
      </div>
    );
  }
}

export default RightMenu;
