import { useState } from 'react'
import AuthForm from '../components/auth/AuthForm'
import AuthLayout from '../components/auth/AuthLayout'

function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')

  return (
    <AuthLayout mode={mode} onModeChange={setMode}>
      <AuthForm
        mode={mode}
        onToggleMode={() => setMode(mode === 'login' ? 'register' : 'login')}
      />
    </AuthLayout>
  )
}

export default LoginPage
