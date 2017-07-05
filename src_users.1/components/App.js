import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {
  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that users list
    // this.props.dispatch({type: 'USERS_FETCH_LIST'});
  }

  componentDidMount(){
    var that=this;
    this.refs.myvideo.addEventListener("ended", function(){
            that.props.dispatch({type: 'USERS_FETCH_LIST'});
    })
  }
  // render
  render() {
      var splashStyle={
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
       }
    // show the loading state while we wait for the app to load
    const {users, children} = this.props;
    if (!users.length) {
      return (
        // <ProgressBar active now={100}/>
        <div className="fullscreen-bg">
          <video className="fullscreen-bg__video" muted ref="myvideo" autoPlay="autoPlay" playsInline >
          <source src="media/splash.mp4" type="video/mp4" />
          </video>
        </div>
      );
    }
    
    // render
    return (
      <div className="container">
        <div>
          <Menu/>
        </div>
        <div>
          {children}
        </div>
        <div className="footer">
          <img src="/media/logo.svg"/>
          <span>
            Simple users app built with {' '}
            <a href="http://redux-minimal.js.org/" target="_blank">redux-minimal</a>
          </span>
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || [],
  };
}
export default connect(mapStateToProps)(App);
