import React from 'react';

var styles = {
  content: {
    color: "blue",
    fontSize: "28px",
    backgroundImage: "url('./src/images/bg2.jpg')",
    backgroundAttachment: "fixed",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  parallax: {
    backgroundImage: "url('./src/images/bg1.jpg')",
    height: "550px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  parallax1: {
    backgroundImage: "url('./src/images/bg1.jpg')",
    height: "550px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
}
export default class Parallax extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <div>
          <center><h1> Parallax </h1></center>
        </div>
        <br />

        <div style={styles.parallax}></div>

        <div style={styles.content}>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>
        <center><span> Lets do parallax </span></center>   
        </div>

        <div style={styles.parallax1}></div>
                                                                               
      </div>
    );
  }
}