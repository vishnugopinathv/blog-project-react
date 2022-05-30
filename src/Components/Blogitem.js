import React from 'react'
import { Link } from 'react-router-dom'
const Blogitem = ({isSmall,imageUrl,title,description,publishedAt,category,id}) => {
  return (
    <Link to= {`/category/${id}`} style={{textDecoration:'none',color:'black'}}>
      <div className="blog__item"  style={isSmall && {flexDirection:"row",padding:"1rem 0"}}>
          <img src={imageUrl} alt={title} style={isSmall&&{width:"9rem",height:"7rem"}} />
          <div className="description__container" style={isSmall&&{justifyContent:"space-around"}}>
              <h2 style={isSmall&&{fontSize:"1rem"}}>{title.slice(0,50)}</h2>
              {isSmall? "" :<p>{description&&description.slice(0,70)}.....Read more</p>}
              <p style={isSmall&&{fontSize:"0.7rem"}}>{category}/<span style={{opacity:'0.5'}}> {publishedAt}</span></p>
          </div>
      </div>
    </Link>
  )
}

export default Blogitem