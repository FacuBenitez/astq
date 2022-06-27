import {useEffect, useState} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { JournalScreen } from '../journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import {firebase} from '../../firebase/firabase-config'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import {  startLoadingNote } from '../../actions/notes'


export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {

      
      firebase.auth().onAuthStateChanged(async (user) => {
       if(user?.uid){
         
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true) 

        dispatch(startLoadingNote (user.uid) ); 

       }else{

        setIsLoggedIn(false)
       }

        setChecking(false)
      })

    }, [dispatch, setChecking, setIsLoggedIn])
  
    if(checking){ 
      return(
      <div className="lds-circle "><div></div></div>
      )
    }

  return (
    <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/*'} element={ 
                      <PublicRoute
                      isLoggedIn={isLoggedIn}
                      >

                        <AuthRouter/>
                      </PublicRoute>
                    }/>
                    
                    <Route path={'/'} 
                    element={ 
                      <PrivateRoute
                      isLoggedIn={isLoggedIn}
                      >

                        <JournalScreen/>
                      </PrivateRoute>
                    
                    }

                    />
                </Routes>
            </BrowserRouter>
    
    
    </div>
  )
}
