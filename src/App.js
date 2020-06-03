import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper'
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

//Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import Blog from './components/Pages/Blog';
import Single from './components/Pages/Single'
import SignUp from './components/Pages/SignUp'

//Admin Pages
import Dashboard from './components/Pages/Admin/Dashboard';
import Posts from './components/Pages/Admin/Posts'
import Users from './components/Pages/Admin/Users'
import AddPost from './components/Pages/Admin/AddPost'


import AdminWrapper from './components/AdminWeapper';
import LoginWrapper from './components/LoginWrapper'
class App extends Component {
  render(){
    return (

      <Router>
        <Switch>
          <Route 
            path='/admin/users'
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <Users />
                    </AdminWrapper>
                  :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  }
                </div>
              )
            }} 
          />
          <Route 
            path='/admin/posts/:view/:id'
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  }
                </div>
              )
            }}  
          />
          <Route 
            path='/admin/posts/:view'
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <AddPost />
                    </AdminWrapper>
                  :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  }
                </div>
              )
            }}  
          />
          <Route 
            path='/admin/posts'
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <Posts />
                    </AdminWrapper>
                  :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  }
                </div>
              )
            }} 
          />
          <Route
            path="/signup"
            render={props => {
              if(this.props.auth.token){
                return (
                  <Redirect to="/" />
                )
              }else{
                return (
                  <LoginWrapper>
                    <SignUp />
                  </LoginWrapper>
                )
              }
            }}
          />
          <Route 
            path='/admin'
            render={props => {
              return (
                <div>
                  {this.props.auth.token ?
                    <AdminWrapper>
                      <Dashboard />
                    </AdminWrapper>
                  :
                    <LoginWrapper>
                      <Login />
                    </LoginWrapper>
                  }
                </div>
              )
            }}  
          />
        </Switch>

            <Route 
              exact={true}
              path='/'
              render={props => (
                <PageWrapper>
                  <Home {...props}/>  
                </PageWrapper>
                )} 
            />
            <Route 
              exact={true}
              path='/blog/:slug'
              render={props => (
                <PageWrapper>
                  <Single {...props}/>  
                </PageWrapper>
                )} 
            />
            <Route 
              exact={true}
              path='/blog'
              render={props => (
                <PageWrapper>
                  <Blog {...props}/>  
                </PageWrapper>
                )} 
            />
            <Route 
              path='/about'
              render={props => (
                <PageWrapper>
                  <About {...props}/>  
                </PageWrapper>
                )} 
            />
            <Route 
              path='/contact'
              render={props => (
                <PageWrapper>
                  <Contact {...props}/>  
                </PageWrapper>
                )}           
            />
      </Router>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
