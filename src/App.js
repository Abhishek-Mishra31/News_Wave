import { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsItem from "./Components/NewsItem";
import React from "react";

export default class App extends Component {
  ApiKey = process.env.REACT_APP_MY_API_KEY;

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsItem
                  key="general"
                  apikey={this.ApiKey}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/Business"
              element={
                <NewsItem
                  key="Business"
                  apikey={this.ApiKey}
                  category="Business"
                />
              }
            />
            <Route
              exact
              path="/Entertainment"
              element={
                <NewsItem
                  key="Entertainment"
                  apikey={this.ApiKey}
                  category="Entertainment"
                />
              }
            />
            <Route
              exact
              path="/Health"
              element={
                <NewsItem key="Health" apikey={this.ApiKey} category="Health" />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsItem
                  key="science"
                  apikey={this.ApiKey}
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/Sports"
              element={
                <NewsItem key="Sports" apikey={this.ApiKey} category="Sports" />
              }
            />

            <Route
              exact
              path="/Technology"
              element={
                <NewsItem
                  key="Technology"
                  apikey={this.ApiKey}
                  category="Technology"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
