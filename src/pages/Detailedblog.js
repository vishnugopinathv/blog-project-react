import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Blogitem from '../Components/Blogitem';
import { useArticleContextConsumer } from '../Context/articleContext'
const Detailedblog = () => {
    const {article}=useArticleContextConsumer();
    const params=useParams()
    const {id}=params;
    const filteredBlog=article.find(v=>{
        return(
            v.id===id
        )
    })
    console.log(filteredBlog)
    const categoryFilter=article.filter(v=>{
        return (
            v.category===filteredBlog.category
        )
    })
    const moreContent=categoryFilter.filter((v)=>{
      return(v.id!==filteredBlog.id)  
    })
    console.log(moreContent)
    useEffect(() => {
      window.scrollTo(0,0)
    }, [id])
    
    return (
    <div className='detailed__blog__container'>
        <div className="headline">
            <h1>{filteredBlog.title}</h1>
            <img src={filteredBlog.Image} alt="" />
            <p>{filteredBlog.description}</p>
        </div>
        <div className="more__blog__container">
            <h2>More from {filteredBlog.category}</h2>
            <div className="underline" style={{transform:'scaleX(1)',marginLeft:"2rem",width:'14rem'}}></div>
            <div className="more__blog">
                {
                    moreContent.map(v=>{
                        return(
                            <Blogitem
                        imageUrl={v.Image}
                         title={v.title}
                        category={v.category}
                         publishedAt={v.pubtime}
                        description={v.description}
                        id={v.id}
                        key={Math.random()}
                      />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Detailedblog