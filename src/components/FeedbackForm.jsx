import '../assets/styles/feedbackForm.scss'
import { useState } from 'react'
import Card from './shared/Card'
import React from 'react'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const handleTextChange = (e) =>{
    setText(e.target.value)
  } 
  return (
    <Card>
        <form>
          <h4 className='formTitle'>How would you rate your services with us?</h4>
          <div className="input-group">
            <input type="text" placeholder="Write a review" value={text} onChange={handleTextChange}/>
            <button type="submit">Send</button>
          </div>
        </form>
    </Card>
  )
}

export default FeedbackForm