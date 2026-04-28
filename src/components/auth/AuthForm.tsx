type AuthMode = 'login' | 'register'

type AuthFormProps = {
  mode: AuthMode
  onToggleMode: () => void
}

function AuthForm({ mode, onToggleMode }: AuthFormProps) {
  return (
    <>
      <form className="auth-form">
        {mode === 'register' && (
          <>
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" placeholder="Enter your full name" />
          </>
        )}

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" />

        {mode === 'register' && (
          <>
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
            />
          </>
        )}

        <div className="row">
          <label className="checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          {mode === 'login' && (
            <button type="button" className="text-link">
              Forgot password?
            </button>
          )}
        </div>

        <button type="submit" className="primary-btn">
          {mode === 'login' ? 'Sign in' : 'Create account'}
        </button>
      </form>

      <p className="footer-text">
        {mode === 'login' ? 'New user?' : 'Already have an account?'}{' '}
        <button type="button" className="text-link inline" onClick={onToggleMode}>
          {mode === 'login' ? 'Register' : 'Sign in'}
        </button>
      </p>
    </>
  )
}

export default AuthForm
