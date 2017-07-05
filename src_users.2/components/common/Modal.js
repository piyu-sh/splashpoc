import React, { Component } from 'react';
import { connect } from "react-redux";

class Modal extends Component {

    componentDidMount(){
        var that=this;
        this.refs.myvideo.addEventListener("ended", function(){
            that.props.dispatch({type: 'CLOSE_MODAL'});
        })
    } 

    render() {
         var splashStyle={
            width:'100%'
        }
        return (
                <div className={`modal ${this.props.classValue?this.props.classValue:this.props.className}`} id="modal-one" aria-hidden="true">
                    <div className="modal-dialog">
                        <div >
                            <video style={splashStyle} ref="myvideo" autoPlay="autoPlay">
                            <source src="media/splash.mp4" type="video/mp4" />
                            </video>
                        </div>
                        {/*<div className="modal-header">
                        <h2>Modal in CSS?</h2>
                        <a href="#" className="btn-close" aria-hidden="true">×</a>
                        </div>
                        <div className="modal-body">
                        <p>One modal example here! :D</p>
                        </div>
                        <div className="modal-footer">
                        <a href="#" className="btn">Nice!</a>
                        </div>*/}
                    </div>
                </div>  
        );
    }
}
// export the connected class
function mapStateToProps(state) {
  return {
    classValue: state.modal.classValue || '',
  };
}

export default connect(mapStateToProps)(Modal);