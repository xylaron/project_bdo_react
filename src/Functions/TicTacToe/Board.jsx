import React from "react";

export default class Board extends React.Component {
  render() {
    let renderSquares = [];
    let rows = 3;
    let cols = 3;
    for (let i = 0; i < rows; i++) {
      let squareRow = [];
      for (let j = 0; j < cols; j++) {
        squareRow.push(
          <Square
            value={this.props.squares[i * rows + j]}
            onClick={() => this.props.onClick(i * rows + j)}
          />
        );
      }
      renderSquares.push(<div>{squareRow}</div>);
    }
    return <div>{renderSquares}</div>;
  }
}

function Square(props) {
  return (
    <button
      className="float-left mt-[-1px] mr-[-1px] h-[100px] w-[100px] border-[2px] border-solid border-white bg-zinc-700 p-0 text-center text-[72px] font-bold leading-10 text-white"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
