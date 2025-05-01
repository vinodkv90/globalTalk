"use client"
import { getToken } from '@/util/authUtil'
import React, { createContext, useEffect, useState } from 'react'

export const Loader = createContext(null)
export const User = createContext(null)
export const Token = createContext(null)

const Context = ({children}) => {
    const[user, setUser] = useState(null)
    const[token, setToken] = useState(null)
    const[loading, setLoading] = useState(true)
    
    useEffect(() => {
      if(localStorage.getItem('name')) {
        const name = localStorage.getItem('name')
        if(name) {
          setUser(JSON.parse(name))
        }
      }
      if(getToken()) {
        const tkn = getToken()
        if(tkn) {
          setToken(tkn)
        }
      }
    }, [user, token])
    
    return (
      <User.Provider value={{user, setUser}}>
        <Token.Provider value={{token, setToken}}>
          <Loader.Provider value={{loading, setLoading}}>
            {children}
          </Loader.Provider>
        </Token.Provider>
      </User.Provider>
    )
}

export default Context