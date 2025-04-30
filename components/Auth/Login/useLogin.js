import { User } from "@/components/Context/context"
import { useNextFetch } from "@/customHooks/useNextFetch"
import { settingUpToken } from "@/util/authUtil"
import { useContext } from "react"
import { useFormStatus } from "react-dom"

export const useLogin = () => {
    const { pending } = useFormStatus()
    const { setUser } = useContext(User)
    const login = async (formData) => {
        console.log("formData.get('name')", formData.get("name"))
        try {
            const res = await useNextFetch(
                '/api/login', 
                'POST', 
                { 'Content-Type': 'application/json' },
                {
                    username: formData.get("name"),
                    password: formData.get("password")
                },
            )
            const result = JSON.parse(res)
            console.log('res', result);
            const token = result?.data?.jwt
            if(result?.data?.name) {
                const name = result?.data?.name
                localStorage.setItem('name', JSON.stringify(result?.data?.name))
                setUser(JSON.parse(localStorage.getItem('name')))
            }
            settingUpToken({login_token: token})
        } catch(err) {
            console.error(err);
        }
    }
    return {
        pending,
        login,
    }
}