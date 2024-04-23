import React from "react";
import './App.css'
import ListesTodo from "./ListesTodo";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.fetchApi = this.fetchApi.bind(this)

  }

  fetchApi() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => {
        console.log(json)
        this.setState({ items: json })
      })
  }
  componentDidMount() {
    this.fetchApi()
  }

render() {
    return (
      <div className="App">
        <ListesTodo tab={this.state.items} />
      </div>
    );
  }

}

export default App;
