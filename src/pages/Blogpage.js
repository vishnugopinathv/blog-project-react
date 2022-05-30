import React, { useEffect, useState } from 'react'
import { useArticleContextConsumer } from '../Context/articleContext'
import Blogitem from '../Components/Blogitem'
const Blogpage = ({category}) => {
    const[data,setData]=useState([]);
    const{article}=useArticleContextConsumer();
    useEffect(() => {
        const filtered=article.filter(v=>{
            return(
               v.category===category
            )
        })
        setData(filtered);
        window.scrollTo(0,0);
    }, [category,article])
    
  return (
    <div className="blog__page__container">
        <div className="category__posts">
            <h1>{category}</h1>
            {
                data.map((v)=>{
                    return(
                        <Blogitem
                    imageUrl={v.Image} 
                    title={v.title}
                    publishedAt={v.pubtime}
                    category={v.category}
                    description={v.description}
                    id={v.id}
                    key={Math.random()}/>
                    )
                })
            }
        </div>
        <div className="top__posts">
            <div>
                <h1>Top Posts</h1>
                {
                    data.map(v=>{
                        return(
                            <Blogitem isSmall
                imageUrl={v.Image} 
                title={v.title}
                publishedAt={v.pubtime}
                category={v.category}
                id={v.id}
                key={Math.random()}/>
                        )
                    })
                }
            </div>
            <div className="ad__container">
                <p>Advertisment</p>
            </div>
        </div>
    </div>
  )
}

export default Blogpage