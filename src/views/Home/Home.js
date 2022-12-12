import React from 'react'
import { useState , useEffect } from 'react'
import './Home.css'

function Home() {

    const [notes , setNotes] = useState([
        {
            title : "note 1",
            contents : "this is the content of note 1"
        },
        {
            title : "note 2",
            contents : "this is the content of note 2"
        },
        {
            title : "note 3",
            contents : "this is the content of note 3"
        },
        {
            title : "note 4",
            contents : "this is the content of note 4"
        }
    ])


  return (
    <div>
        <div className='main-head-container'>
            <h1>My Notes</h1>
        </div>
        <div className='main-notes-container'>
            <div className='notes-container col-lg-6 col-sm-12'>
                {
                    notes.map((note)=>{
                        return
                        {
                            
                        }
                    })
                }
            </div>
            <div className='add-note-container col-lg-6 col-sm-12'>

            </div>
        </div>
    </div>
  )
}

export default Home