import React from 'react';

export default class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "hurray"
    }
    this.handleText = this.handleText.bind(this);
  }
  componentWillMount() {
    console.log('Component will mount');
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentWillReceiveProps() {
    console.log('component will receive props');
  }
  componentDidUpdate() {
    console.log('component did update');
  }
  componentWillUpdate() {
    console.log('component will update');
  }
  shouldComponentUpdate() {
    if (this.state.text == "hello") {
      console.log('should component update -- if');
      return false;
    } else {
      console.log('should component update -- else');
      return true;
    }
  }
  handleText() {
    let randomArr = ['hello', 'whoo hooo', 'joo jeeee'];
    let rand = randomArr[Math.floor(Math.random() * randomArr.length)];
    this.setState({text: rand});
  }
  render() {
    console.log('render');
    return(
      <div>
        <h1> Testing React Lifecycle Methods </h1>
        <span> {this.state.text} </span>
        <button onClick={this.handleText}> Random Text </button>
      </div>
    );
  }
}