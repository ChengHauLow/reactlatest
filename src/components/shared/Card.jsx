import '../../assets/styles/card.scss'
const Card = ({children, reverse=false}) => {
    return (
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
    )
}

export default Card