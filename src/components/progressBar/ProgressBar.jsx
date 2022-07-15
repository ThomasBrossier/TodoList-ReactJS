import React from 'react'

const ProgressBar = ({progress}) => {

    const Container = {
        height: 2.5,
        width: '100%',
        backgroundColor: 'whitesmoke',
        marginBottom: '2px'
      }
      
      const Bar = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'green',
        textAlign: 'center'
      }
  return (
    <div style={Container}>
      <div style={Bar}>
      </div>
    </div>
  )
}

export default ProgressBar