import React from 'react'
import PropTypes from 'prop-types'


export const FirstApp = ({title,subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <div>
        {subtitle+1} 
      </div>
    </>
  )
}

// agregando  proptypes
// los ProtoTypes son una forma de tipar las props de un componente
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

// agregando defaultProps
// defaultProps es una forma de dar valores por default a props de un componente
FirstApp.defaultProps = {
  title : 'No  hay titulo' ,
  subtitle : 0
}