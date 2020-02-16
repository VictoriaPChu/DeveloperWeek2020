import React, { Component } from "react";
import ChannelForm from "./components/ChannelForm";
import Call from "./components/Call";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ""
    };
  }

  selectChannel = channel => {
    this.setState({ channel });
  };

  render() {
    return (
      <div className="App">
        <ChannelForm selectChannel={this.selectChannel} />
        <CardDeck>
        <Call channel={this.state.channel} />
      </CardDeck>
      </div>
    );
  }
}

export default App;
