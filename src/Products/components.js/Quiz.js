import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';

const Quiz = () => {
    return (
        <div className='quiz-section'>
            <div >
                <ChatIcon  className='quiz-icon'/>
            </div>
            <div className='quiz-cant-decide'>
                <p>Cant decide ?</p>
            </div>
            <div className="quiz-right-direction">
                Our quiz will take you to the right direction.
            </div>
        </div>
    )
}
export default Quiz;