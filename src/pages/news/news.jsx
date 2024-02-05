import React, { useContext } from "react";
import { NewsContext } from "./newslist/newslist";
import "./style.css";


const News= ( data ) => {
    console.log(data)

     return(
         <div className='news'>
             <div className="news-full-size">
                 <div className="container">
                     <div className="news__wrapper">
                         <h1>НОВОСТИ</h1>
                         <ul className="news__list">
                            <p></p>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     )
 }
 
 export default News;