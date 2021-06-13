import React from 'react'
import { Computer, RecycleFull, Folder, Inetcpl1313, Mspaint } from '@react95/icons'

function DesktopIcons() {
    return (
        <div className='floatLeft'>
            <div className='desktopIcons'>
                <Computer variant='32x32_4' />
                <span className='iconName'>My Computer</span>
            </div>
            <div className='desktopIcons'>
                <RecycleFull variant='32x32_4' />
                <span className='iconName'>Recycle Bin</span>
            </div>
            <div className='desktopIcons'>
                <Inetcpl1313 variant='32x32_4' />
                <span className='iconName'>Internet</span>
            </div>
            <div className='desktopIcons'>
                <Folder variant='32x32_4' />
                <span className='iconName'>Folder</span>
            </div>
            <div className='desktopIcons'>
                <Mspaint variant='32x32_4' />
                <span className='iconName'>Mspaint</span>
            </div>
        </div>
    )
}

export default DesktopIcons
