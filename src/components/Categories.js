
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Categories extends Component {
  render() {
    const { news, fetching } = this.props.news;
    if (fetching) {
      return <div> Yükleniyor </div>;
    } else {
      
      return (
        
        <div
          style={{ borderColor: "blue", borderStyle: "solid", margin: "2px" }}
        >

           {/* {console.log(JSON.stringify(news, null, 3))} */}
           {news.articles.map((value,index)=>{
             return(
               <div key ={index}
               style={{
                display: "flex",
                
                width: "100%",
                
                flexDirection:"column"

                
              }}>
                <div
                style={{
                  display: "flex",
                 
                  
                  flexDirection:"row"
                  }}>
                     <img width="20%" src={value.urlToImage} alt={value.title}/>
                 <span
                 style={{
                  display: "flex",
                 
                  width: "20%",
                  fontWeight:"800"
                  
                  }}>
                  {value.title}<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
                  {value.url}</span>
                  
                 
                
                 </div>
                 <div style = {{display:"block"}}>
                   <p
                   style={{
                    display: "flex",
                    
                    width: "40%",
                  }}>{value.content}</p>
                   <button
                   style={{
                    display: "flex",
                    marginBottom:"2rem",
                    backgroundColor:"white",
                    color:"black"
                    
                  
                  }}>
                     <Link
                     
                      target={"_blank"} to = {value.url}> Devamını Oku...
                     </Link>

                   </button>
                 </div>
                 </div>
             )
           })}
        </div>
      );
    }
  }
}

export default Categories;
