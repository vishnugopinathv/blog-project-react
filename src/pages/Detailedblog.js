import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Blogitem from '../Components/Blogitem';
import { useArticleContextConsumer } from '../Context/articleContext'
const Detailedblog = () => {
    const {article}=useArticleContextConsumer();
    const params=useParams()
    const {id}=params;
    const filteredBlog=article.filter(v=>{
        return(
            v.id===id
        )
    })
    const categoryFilter=article.filter(v=>{
        return (
            v.category===filteredBlog[0].category
        )
    })
    console.log(categoryFilter);
    const moreContent=[categoryFilter[parseInt(Math.random()*10)],categoryFilter[parseInt(Math.random()*10)],categoryFilter[parseInt(Math.random()*10)]]
    console.log(moreContent)
    useEffect(() => {
      window.scrollTo(0,0)
    }, [id])
    
    return (
    <div className='detailed__blog__container'>
        <div className="headline">
            <h1>{filteredBlog[0].title}</h1>
            <img src={filteredBlog[0].Image} alt="" />
            <p>{filteredBlog[0].description}</p>
        </div>
        <div className="more__blog__container">
            <h2>More from {filteredBlog[0].category}</h2>
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