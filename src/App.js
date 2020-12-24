import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Main/Home";
import CreateStory from "./components/Form/CreateStory";
import EditStory from "./components/Form/EditStory";
import Story from "./components/Main/Stories/Story/Story";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/create">
        <CreateStory />
      </Route>
      <Route path="/edit">
        <EditStory />
      </Route>
      <Route path="/story">
        <Story />
      </Route>
    </BrowserRouter>
  );
}

export default App;
