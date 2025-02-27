import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DashboardHeader from './components/DashboardHeader'
import MyCalendar from './components/MyCalendar'

function App() {
 
  return (
    <>
      <div className="h-full w-full p-8 ">
            <div className="bg-gray pb-6 ">
              <DashboardHeader title="Team E Hackathon Calendar"/>
            </div>
            <MyCalendar/>
        </div>
    </>
  )
}

export default App
