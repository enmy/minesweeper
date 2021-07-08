import React from 'react'

export default function CustomDimensionsForm ({ boardDimensions, showForm }) {
  const { setBoardDimensions, ...dimensions } = boardDimensions

  return (
    <div className={showForm ? '' : 'invisible'}>
      <label htmlFor='width'>
        Width
        <input
          type='number'
          className='dimension'
          name='width'
          value={dimensions.height}
          onChange={e => setBoardDimensions(dimensions.width, e.target.value, dimensions.mines)}
        />
      </label>
      <br />
      <label htmlFor='height'>
        Height
        <input
          type='number'
          className='dimension'
          name='height'
          value={dimensions.width}
          onChange={e => setBoardDimensions(e.target.value, dimensions.height, dimensions.mines)}
        />
      </label>
      <br />
      <label htmlFor='mines'>
        Mines
        <input
          type='number'
          className='dimension'
          name='mines'
          value={dimensions.mines}
          onChange={e => setBoardDimensions(dimensions.width, dimensions.height, e.target.value)}
        />
      </label>
    </div>
  )
}
