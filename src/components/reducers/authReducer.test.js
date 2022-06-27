import { types } from "../../types/types"
import { authReducer } from "./authReducer"

describe('Pruebas en authReducer', () => {
    
    test('should first realize logging', () => { 
        const initialState = {}
        const action = {
            type:types.login,
            payload: {
                uid: '12345',
                displayName: 'Juan' 

            }
        }

        const state = authReducer(initialState, action)

        console.log( state );
     })
})

