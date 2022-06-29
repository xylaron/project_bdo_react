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
      className="bg-zinc-800 text-white text-center font-bold text-[72px] mt-[-1px] mr-[-1px] w-[100px] h-[100px] border-[2px] border-solid border-white p-0 leading-10 float-left"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
