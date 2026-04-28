import type { ReactNode } from 'react'

type AuthMode = 'login' | 'register'

type AuthLayoutProps = {
  mode: AuthMode
  onModeChange: (mode: AuthMode) => void
  children: ReactNode
}

const authContent = {
  login: {
    title: 'Welcome back',
    subtitle: 'Sign in to continue your learning journey.',
  },
  register: {
    title: 'Create account',
    subtitle: 'Join Learnify to start your personalized learning path.',
  },
}

function AuthLayout({ mode, onModeChange, children }: AuthLayoutProps) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <header className="auth-header">
          <p className="brand">Learnify</p>
          <h1>{authContent[mode].title}</h1>
          <p>{authContent[mode].subtitle}</p>
        </header>

        <div className="auth-switch" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            className={mode === 'login' ? 'switch-tab active' : 'switch-tab'}
            onClick={() => onModeChange('login')}
            role="tab"
            aria-selected={mode === 'login'}
          >
            Login
          </button>
          <button
            type="button"
            className={mode === 'register' ? 'switch-tab active' : 'switch-tab'}
            onClick={() => onModeChange('register')}
            role="tab"
            aria-selected={mode === 'register'}
          >
            Register
          </button>
        </div>

        {children}
      </section>
    </main>
  )
}

export default AuthLayout
