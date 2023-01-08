import React from 'react'

const regestration=()=> {
  return (
    <div className="ui main">
     <form>
    <label>NAME</label>
    <input type='text'
     placeholder='enter name'/><br/><br/>
     <label>EMAIL</label>
     <input type="text"
      placeholder='enter email'/>
      <br/><br/>

    <button className="ui button red">add</button>
    </form>
    </div>
  )
}

export default regestration;