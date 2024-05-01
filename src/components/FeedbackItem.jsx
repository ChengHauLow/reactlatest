import React from 'react'
import { useState } from 'react'

const FeedbackItem = () => {
    const [rating, setRating] = useState(0)
    const [text, setText] = useState('This is just a feedback item')

    const handleAdd = ()=>{
        setRating(preValue=>{
            return preValue += 1
        })
        setText(preText=>{
            return preText = 'Rating is being added: '
        })
    }
    const handleMinus = ()=>{
        setRating(preValue=>{
            if(preValue <= 1){
                return preValue = 0
            }
            return preValue -= 1
        })
        setText(preText=>{
            return preText = 'Rating is being reducing: '
        })
    }
    return (
    <div className='card'>
        <div className="num-display">{rating}</div>
        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
        <button className="btn btn-primary" onClick={handleMinus}>Minus</button>
        <div className="text-display">
            {text} {rating}
        </div>
    </div>
    )
}

export default FeedbackItem
