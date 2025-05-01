import styles from './login.module.scss'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useLogin } from './useLogin'

const Login = () => {
    const { pending, login, } = useLogin()
    return (
        <div className={styles.login}>
            <h1 className={`title ${styles.title}`}>Login</h1>
            <form action={login}>
                <Input type="text" name='name' id='username' placeholder='username' />
                <Input type="password" name='password' id='password' placeholder='Password' />
                <Button type="submit" variant="primary" size='md' disabled={pending} curved={false} className={styles.submitBtn}>
                    {pending ? 'loading' : 'login'}
                </Button>
            </form>
        </div>
    )
}

export default Login