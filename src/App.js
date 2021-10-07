import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
import MovieLibrary from "./MovieLibrary";
import requests from "./request";
import Row from "./Row";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Banner />
        <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
        <Row fetchUrl={requests.fetchNowPlaying2} />
        <Row fetchUrl={requests.fetchNowPlaying3} />
        <Footer />
        <MovieLibrary />
      </Provider>
    );
  }
}

export default App;
