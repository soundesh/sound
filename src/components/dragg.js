import React from 'react'
import Board from './Board'
import Card from './card'

function Dragg() {
  return (
    <div>
        <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
                <p>cardonevvv</p>
            </Card>
        </Board>
    </div>
  )
}

export default Dragg