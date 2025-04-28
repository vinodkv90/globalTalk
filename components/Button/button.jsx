import React from 'react'

const Button = ({children, variant, size='md', curved = true, className, ...rest}) => {
  return (
    <button className={`btn ${variant || ''} ${size} ${curved ? 'curved' : null} ${className || null}`} {...rest}>{children}</button>
  )
}

export default Button