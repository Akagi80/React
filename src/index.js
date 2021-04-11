import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer'; // komponent (zawartość) strony
import { Provider } from 'react-redux';
import store from './redux/store';

// ReactDOM.render(<App />, document.getElementById('app')); // znajdź element (w index.html), którego id to 'app', i wstaw do niego komponent App (ściezka powyżej)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));

