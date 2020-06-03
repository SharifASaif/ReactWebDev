import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        return (
          <div>
            <h3>You are logged in with token: {this.props.auth.token} </h3>
            <h3>Email: {this.props.auth.user.email} </h3>

          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
  
    }
  }
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Dashboard));
