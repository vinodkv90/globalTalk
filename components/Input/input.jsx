import React, { useState } from 'react'
import Button from '../Button'
import IcoMoon from '../IcoMoon'

const Input = ({label, type, name, className, containerClass, id='inputField', placeholder, ...rest}) => {
    const [show, setShow] = useState(false)
    return (
        <fieldset className={containerClass || ''}>
            {label && <label htmlFor={id || null}>{label}</label>}
            <input
                type={type === 'password' ? (show ? 'text' : 'password') : type || 'text'}
                name={name || null} 
                className={`text-field ${show ? 'password' : ''} ${className || ''}`} 
                id={id || null} 
                placeholder={placeholder || null}
                {...rest} 
            />
            {
                type === 'password' && (
                    <Button size='sm' className={`visibility-toggle`} onClick={()=>setShow(!show)} curved={false}>
                        {show ? <IcoMoon icon='eye-off' size={16} color="currentColor" /> : <IcoMoon icon='eye' size={16} color="currentColor" />}
                    </Button>
                )
            }
        </fieldset>
    )
}

export default Input