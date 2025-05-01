import { User } from "@/components/Context/context"
import { useNextFetch } from "@/customHooks/useNextFetch"
import { settingUpToken } from "@/util/authUtil"
import { useContext } from "react"
import { useFormStatus } from "react-dom"
import { useRouter } from "next/navigation"

export const useLogin = () => {
    const { pending } = useFormStatus()
    const { setUser } = useContext(User)
    const router = useRouter()
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
            const token = result?.data?.jwt
            settingUpToken({login_token: token})
            const name = result?.data?.name
            localStorage.setItem('name', JSON.stringify(name))
            setUser(name)
            router.push('/')
        } catch(err) {
            console.error(err);
        }
    }
    return {
        pending,
        login,
    }
}