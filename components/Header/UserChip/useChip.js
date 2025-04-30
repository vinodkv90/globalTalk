
export const useChip = () => {
    const signOut = () => {
        localStorage.clear()
        console.log('sign out');
    }    
    return {
        signOut
    }
}