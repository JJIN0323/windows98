import React from 'react'
import Clock from 'react-live-clock'
import { User1 } from '@react95/icons'

function TaskBar() {
    return (
        <div className='taskBar'>
            <button className='startButton'>
                <User1 variant='16x16_4' /> Start</button>
            <p className='clock'>
                <Clock format={'hh:mm A'} ticking={true} timezone={'ROK'} />
            </p>
            <div className='taskBarFrame'>
                <div className='frameContents'>
                    frameContents
                </div>
            </div>
        </div>
    )
}

export default TaskBar
