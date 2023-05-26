import React from 'react'
import Axios from 'axios'
function task() {
  return (
  <div className='app'>
    <h1>Daily Task Calender</h1>
    <input type='text'/><label>Task Name</label>
    <input type='date'/><label>Date</label>
    <input type='time'/><label>Time</label>
    <input type='text'/><label>Description</label>
    <button>Add task</button>
  </div>
  )
}

export default task