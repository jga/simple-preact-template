import { h, render, Component } from 'preact';
import configureStore from './store/configureStore'
import { Provider } from 'preact-redux'
import App from './containers/App'

import './styles/main.scss';

const store = configureStore()

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(<Main />, document.getElementById('app'));

