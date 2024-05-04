import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback=[]}) => {
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }
    console.log(feedback);
    return (
    <div className="feedback-list">
        {/* hello */}
        {feedback.map((item)=> <FeedbackItem key={item.id} item={item} />)}
    </div>
    )
}

export default FeedbackList