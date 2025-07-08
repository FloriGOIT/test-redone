//full Class

import React from 'react';

const DEFAULT_COLOR = 'blue';

class CarTest extends React.Component {
  static totalCarsCreated = 0;

  static getTotalCars() {
    return CarTest.totalCarsCreated;
  }

  constructor(props) {
    super(props);

    this.dataState = {
      createdAt: new Date(),
      owner: props.owner,
    };
    CarTest.totalCarsCreated++; // increment static counter
  }

    state = {
        speed: 0,
        color: DEFAULT_COLOR,
      }; // i can add it in constructor with thi.state (preferable this way)

  accelerate = () => {
    this.setState(prevState => ({
      speed: prevState.speed + 10,
    }));
  };

  render() {
    return (
      <div>
        <h2>Car owned by: {this.dataState.owner}</h2>
        <p>Created at: {this.dataState.createdAt.toLocaleString()}</p>
        <p>Speed: {this.state.speed} km/h</p>
        <p>Color: {this.state.color}</p>
        <p>Total: {CarTest.totalCarsCreated}</p>
        <button onClick={this.accelerate}>Accelerate</button>
      </div>
    );
  }
}

export default CarTest;
