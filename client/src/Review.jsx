import React from 'react'
import Stars from './Stars'
import buttonStyle from './ButtonStyle'

const ReviewHeader = {
    fontWeight:'700',
    fontSize:'18px',
}
const NickNameStyle = {
    fontWeight:'700',
    fontSize:'14px'
}
const ButtonCont = {
    paddingLeft:'5px'
}

const reviewContainer = {
    width:'100',
    display:'flex',
    flexDirection:'row',
    flexFlow: 'row wrap',
    padding:'10px',
    
}
const reviewInfo = {
    borderLeft: '1px solid gray',
    paddingLeft: '20px',
    flexGrow:'1'
}
const reviewStyle = {
    flexGrow:'1',
    width:'50%'

}
const Review = (props) => {
    
    return(
        <div style={reviewContainer}>
            <div style={reviewStyle}>
                <div style={ReviewHeader}>{props.data.title}</div>
                <Stars starsGiven={props.data.starsGiven}/>
                <div>{props.data.detailed}</div>
            </div>
            <div style={reviewInfo}>
                <div style={NickNameStyle}>{props.data.nickname}</div>
                <div>Was this review hurtful?</div>
                <div style={ButtonCont}>
                    <button style={buttonStyle}>YES</button>
                    <button style={buttonStyle}>NO</button>
                </div>

            </div>
        </div>

    )
}

export default Review;