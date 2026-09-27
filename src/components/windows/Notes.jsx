import React, { useState,useEffect } from 'react'
import Macwindow from './macwindow'
import "./notes.scss"
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Notes = ({windowName,setwindowState}) => {


    const [markDown, setmarkDown] = useState(null);

    useEffect(()=>{
        fetch("/nav-icons/note.txt")
        .then((res)=>{
           return res.text();
        })
        .then((text)=>{
            return  setmarkDown(text);
        })
    },[]);


  return (
    <Macwindow windowName={windowName} setwindowState={setwindowState}>
        <div className='note-window'>
            {markDown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markDown}</SyntaxHighlighter> : <p>loading...</p> }
        </div>
    </Macwindow>
  )
}

export default Notes
