import { useFormStatus } from 'react-dom'
import styles from './register.module.scss'
import Input from '@/components/Input'
import Button from '@/components/Button'

const Register = () => {
  const { pending } = useFormStatus()
  const register = (formData) => {
      // console.log("formData.get('name')", formData.get("name"))
  }
  return (
    <div className={styles.register}>
      <h1 className={`title ${styles.title}`}>Register</h1>
      <form action={register}>
        <Input type="text" name='name' id='username' placeholder='username' />
        <Input type="email" name='email' id='email' placeholder='Email' />
        <Input type="tel" name='phone' id='phone' placeholder='Phone' />
        <Input type="password" name='password' id='password' placeholder='Password' />
        <Input type="password" name='password' id='rePassword' placeholder='Re enter Password' />
        <Button type="submit" variant="primary" size='md' disabled={pending} curved={false} className={styles.submitBtn}>
          {pending? 'loading' : 'Register'}
        </Button>
      </form>
    </div>
  )
}

export default Register