import { h, render, Component } from 'preact';
import Router from 'preact-router';
import { connect } from 'preact-redux'

const AppComponent = () => (
  <div class='app__router-container'>
    <Router>
      <ContactContainer path='/' />
    </Router>
  </div>
)

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


const App = connect(
  mapStateToProps, mapDispatchToProps
)(AppComponent)

export default App

