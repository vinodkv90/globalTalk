import React from 'react'

const Button = ({type = 'button', children, variant, size='md', curved = true, className, ...rest}) => {
  return (
    <button type={type} className={`btn ${variant || ''} ${size} ${curved ? 'curved' : null} ${className || null}`} {...rest}>{children}</button>
  )
}

export default Button