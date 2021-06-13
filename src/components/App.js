import React, { Suspense } from 'react'
import './App.css'

import TaskBar from '../components/views/TaskBar/TaskBar'
import Wallpapers from '../components/views/Wallpapers/Wallpapers'

function App() {
  return (
    <Suspense fallback={(<div>Loading-</div>)}>
      <div className='wrap'>
        <Wallpapers />
        <TaskBar />
      </div>
    </Suspense>
  )
}

export default App;
