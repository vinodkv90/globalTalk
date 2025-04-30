import Link from 'next/link'
import React from 'react'

const LinkButton = ({children, href, variant, size='md', curved = true, className, ...rest}) => {
    return (
      <Link href={href} className={`btn ${variant || ''} ${size} ${curved ? 'curved' : null} ${className || null}`} {...rest}>{children}</Link>
    )
}

export default LinkButton