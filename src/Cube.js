import React from "react";

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: null, face: 1 };
    this.position = ["front", "back", "right", "left", "top", "bottom"];
  }

  renderFigures() {
    let figures = [];
    for (let i = 1; i <= 6; i++) {
      figures.push(
        <figure
          key={i}
          className={this.position[i - 1]}
        >
          {i}
        </figure>
      );
    }
    return figures;
  }

  render() {
    console.log(this.state);
    const resetter = this.state.face > 6 ? this.setState({face : 1}) : null;
    return <section className="container">
        <div id="cube" 
          className={`show-${this.state.show}`} 
          onClick={() => this.setState(
              { show: this.position[this.state.face++] }
            )}>
          {this.renderFigures()}
        </div>
      </section>;
  }
}

export default Cube;
