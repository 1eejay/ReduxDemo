import React from "react";
import Square from "./Square";
import "./Board.css";

export default function Board({ squares = [] }) {
  return (
    <div className={"board"}>
      <div className={"row"}>
        <Square pos={0} type={squares[0]} />
        <Square pos={1} type={squares[1]} />
        <Square pos={2} type={squares[2]} />
      </div>
      <div className={"row"}>
        <Square pos={3} type={squares[3]} />
        <Square pos={4} type={squares[4]} />
        <Square pos={5} type={squares[5]} />
      </div>
      <div className={"row"}>
        <Square pos={6} type={squares[6]} />
        <Square pos={7} type={squares[7]} />
        <Square pos={8} type={squares[8]} />
      </div>
    </div>
  );
}
