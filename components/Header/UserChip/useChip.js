
import { Token, User } from '@/components/Context/context'
import { redirect } from 'next/navigation'
import { useContext } from 'react'

export const useChip = () => {
    const { token, setToken } = useContext(Token)
    const { user, setUser } = useContext(User)
    const signOut = () => {
        localStorage.clear()
        setToken(null)
        setUser(null)
        console.log('sign out');
        redirect('/')
    }    
    return {
        signOut,
        token,
        user,
    }
}