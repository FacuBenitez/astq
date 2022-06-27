import React from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { motion } from 'framer-motion';

export const JournalEntry = ({id, date, title, body, url}) => {
    


    const noteDate = moment(date);
    const dispatch = useDispatch();
    
    const handleEntryClick = () => {
        dispatch(activeNote(id, {
            title,
            body,
            url
        }))
         }

    return (
        <motion.div className="journal__entry pointer" onClick={handleEntryClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        whileHover={{ scale: 0.95,
        transition: { duration: 0.10 } }}
        
            
        
        >
            
       {  url &&   
                     <div 
                    className="journal__entry-picture"
                    style={{
                    backgroundSize: 'cover',
                       backgroundImage: `url(${url})`
                     }}
                    >
                    </div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                   {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('ddd')}</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </motion.div>
    )
}
