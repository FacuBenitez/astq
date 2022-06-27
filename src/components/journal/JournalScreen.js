import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {

  const {active} =useSelector(state => state.notes);

  return (
    <motion.div className="journal__main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
    >
  
    
        <Sidebar />


          <main>

             { active ? <NoteScreen /> : <NothingSelected /> }
             
           
          </main>

    </motion.div>
  )
}
