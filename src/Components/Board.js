import React from 'react'
import Button from './Button'

export default function Board() {
    const [boardVal, setBoardVal] = React.useState(Array(9).fill(null))
    const [player, setPlayer] = React.useState(1)

    const winner = calculateWinner()

    const handleClick = (val) => {
        const newArray = boardVal
        if(winner || boardVal[val]) return 
        if (player === 1) {
            newArray[val] = 'X'
            setPlayer(2)
        }
        else {
            newArray[val] = 'O'
            setPlayer(1)
        }
        setBoardVal(newArray)
    }

    function calculateWinner() {
        const winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[1,4,8],[2,4,6]]
        for(const val of winningArray){
            console.log(val)
            if(boardVal[val[0]]===boardVal[val[1]] && boardVal[val[1]]===boardVal[val[2]] && boardVal[val[0]]!==null) return boardVal[val[0]]
        }
        return false
    }
    return (
        <div>
            <div className='board-container'>
                <div style={{ display: 'flex' }}>
                    <Button value={boardVal[0]} onButtonClick={() => handleClick(0)} />
                    <Button value={boardVal[1]} onButtonClick={() => handleClick(1)} />
                    <Button value={boardVal[2]} onButtonClick={() => handleClick(2)} />
                </div>
                <div style={{ display: 'flex' }}>
                    <Button value={boardVal[3]} onButtonClick={() => handleClick(3)} />
                    <Button value={boardVal[4]} onButtonClick={() => handleClick(4)} />
                    <Button value={boardVal[5]} onButtonClick={() => handleClick(5)} />
                </div>
                <div style={{ display: 'flex' }}>
                    <Button value={boardVal[6]} onButtonClick={() => handleClick(6)} />
                    <Button value={boardVal[7]} onButtonClick={() => handleClick(7)} />
                    <Button value={boardVal[8]} onButtonClick={() => handleClick(8)} />
                </div>
            </div>
            <div>
                <h1>Player {player}'s Turn</h1>
                {
                    winner && <h2>{winner} is the Winner</h2>
                }
            </div>
        </div>

    )
}