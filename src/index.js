import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App'; // komponent (zawartość) strony

ReactDOM.render(<App />, document.getElementById('app')); // znajdź element (w index.html), którego id to 'app', i wstaw do niego komponent App (ściezka powyżej)

