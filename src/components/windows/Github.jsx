import React from 'react'
import Macwindow from './macwindow'
import Gitdata from "../../assets/github.json"
import "./github.scss"



const Gitcard = ({data = {id: 1, image : "", description: "", title : "", tags: "", repoLink : "", demoLink : ""}})=>{
     return <div className='card'>
              <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description' >{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag' key={tag}>{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
     </div>
}



const Github = ({windowName,setwindowState}) => {
  return (
    <Macwindow windowName = {windowName} setwindowState = {setwindowState}>
        <div className='cards'>
            {Gitdata.map((elem,index)=>{
               return  <Gitcard  key={index}  data={elem}/>
            })}
        </div>
    </Macwindow>
  )
}

export default Github

