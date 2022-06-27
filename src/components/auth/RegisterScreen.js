import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from "validator";
import { useDispatch, useSelector } from 'react-redux';
import { setError,removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { motion } from 'framer-motion';


export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    name:'Facu',
    email: 'facu@gmail.com',
    password: 'asdasd',
    password2: 'asdasd'
  });


  const {name, email, password, password2} = formValues;
  
  const dispatch = useDispatch();

  const {msgError} = useSelector(state => state.ui);

 

  const handleRegister = (e) => {
    e.preventDefault();

   if (isFormValid()) {
     dispatch(startRegisterWithEmailPasswordName(name, email, password));
   }
     
   }
  
  const isFormValid = () => {
    if(name.trim().length === 0){
      dispatch(setError('Name is required'));
      return false;
    }
    else if(!validator.isEmail(email)){
      dispatch(setError('Email is invalid'));
      return false;

    }
    else if(password !== password2 || password.length <= 5){
      dispatch(setError('Password must be at least 5 characters and match'));
      return false;
    }
    dispatch(removeError()); 
    return true;
  }

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
      >   
      <h3 className="auth__title"> Register Screen </h3>

        <form onSubmit={handleRegister}>
        {
          msgError && 
          (<div className="auth__alert-error"> {msgError} </div>)
        } 

          <input
          type="text" 
            placeholder="Name"
            name="name"
              className="auth__input"
              autoComplete='off'
              value={name}
              onChange={handleInputChange}
          />
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
          <input 
          type="password" 
          placeholder="Confirm"
            name="password2"
            className="auth__input"
            autoComplete='off'
            value={password2}
            onChange={handleInputChange}
          />
          <button 
          className="btn btn-primary btn-block mb-5"
          type="submit"

          >
            Register
          </button>

          
        <Link
        className="link"
        to={"/auth/login"}
        >
            Alredy Registered?
        </Link>

        </form>

  </motion.div>
  )
}
