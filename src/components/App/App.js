import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ.js';
import List from '../List/ListContainer.js';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import SearchResults from '../SearchResults/SearchResultsContainer.js';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/..." component={SearchResults} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;