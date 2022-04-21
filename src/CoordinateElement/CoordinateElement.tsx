import React from 'react'
import './Coordinate.css'



const CoordinateElement = () => {
    const changePositon = (e : React.MouseEvent) => {
        console.log(e)
        console.log(e.clientX)
        console.log(e.clientY)
    }
  return (
    <div className='wrapper'>
        <div className="box" onClick={changePositon}></div>
    </div>
  )
}

export default CoordinateElement