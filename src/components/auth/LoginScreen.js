
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'






export const LoginScreen = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
      email: '',
      password: ''
    });

  
    const { email, password } = formValues;


    const handleLogin = (e) => {
      e.preventDefault();
      
      dispatch(startLoginEmailPassword(email, password));
      navigate('/')
  
       
    
    }
    
    const handleGoogleLogin = () => {
      dispatch(startGoogleLogin());
      navigate('/')
    }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >   
        <h3 className="auth__title"> Login Screen </h3>

          <form onSubmit={ handleLogin }>

            <input
             type="text" 
               placeholder="Email"
               name="email"
                className="auth__input"
                autoComplete='off'
                value={email}
                onChange={handleInputChange}
             />
            <input 
            type="password" 
            placeholder="Password"
              name="password"
              className="auth__input"
              autoComplete='off'
              value={password}
              onChange={handleInputChange}

            />
            <button 
            className="btn btn-primary btn-block"
            type="submit"
            disabled={loading}
            >
              Login
            </button>
            <hr />
            
            <div className="auth_social-networks">
                <p>Login with social networks</p>

                <div className="google-btn" onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                        alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>

               
            </div>
          <Link
          className="link"
          to={"/auth/register"}
          >
              Create new account
          </Link>

          </form>
    
    </motion.div>
  )
}
