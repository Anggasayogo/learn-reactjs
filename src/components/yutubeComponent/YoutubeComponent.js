import React, { useEffect, useState } from 'react'
import './YoutubeComponent.css';

const YoutubeComponent = ({img,time,title,desc}) => {
    const [properti,setProperti] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setProperti(true);
        },3000)
    },[])
    return (
       <div className="youtube-wrapper">
           <div className="img-thumb">
                <img src={img}/>
                <p className="time">{time}</p>
            </div>
           {properti &&
              <div>
                  <p className="title">{title}</p>
                  <p className="desc">{desc}</p>
              </div>
           }
            
       </div>
    )
}

YoutubeComponent.defaultProps = {
    time : '00.00',
    img : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
    title: 'Title',
    desc : 'Description'
}

export default YoutubeComponent;
