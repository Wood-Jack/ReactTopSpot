import React, { Component } from 'react';

class App extends Component {

  constructor(props){

    super(props);

    this.state= {

      topspots:[]
    };
  }

  componentWillMount(){

    axios

    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots}));

  }


  render() {
    <pre>
      {JSON.stringify(this.state.topspots, null, 2)}
    </pre>


    return (
      <div className='App'>
        <div className='container'>
          <h1>San Diego Top Spots</h1>
          <h3>A list of the top 30 places to see in San Diego, California.</h3>




        </div>



      </div>
    );
  }
}

export default App;
