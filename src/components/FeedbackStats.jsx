import '../assets/styles/feedbackStats.scss'
import React from 'react'

const FeedbackStats = ({feedback=[]}) => {
    let averageRating = feedback.length > 0 ? parseFloat(feedback.reduce((acc, item) => (acc + item.rating), 0)/feedback.length).toFixed(2):0
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(averageRating)?0:averageRating}</h4>
    </div>
  )
}

export default FeedbackStats