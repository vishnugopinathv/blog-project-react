import React from 'react'
import Blogitem from '../Components/Blogitem';
import { useArticleContextConsumer } from '../Context/articleContext'
import { Link } from 'react-router-dom';
const Home = () => {
  const{article}=useArticleContextConsumer();
  const randomItem= [article[2],article[14],article[33]]
  console.log(randomItem)
  return (
    <div className="home__container">
      <div className="home__head">
        <div className="head__img__container">
        <img src={article[0].Image} alt="" />
        <div className="hover__content">{article[0].title}<Link to={`/category/${article[0].id}`}><button>Read More</button></Link></div>
        </div>
        <div className="head__img__container">
        <img src={article[11].Image} alt="" />
        <div className="hover__content">{article[11].title}<Link to={`/category/${article[11].id}`}><button>Read More</button></Link></div>
        </div>
        <div className="head__img__container">
        <img src={article[21].Image} alt="" />
        <div className="hover__content">{article[21].title} <Link to={`/category/${article[21].id}`}><button>Read More</button></Link></div>
        </div>
      </div>
      <div className="latest__articles">
        <h1>The Latest</h1>
        <div className="underline" style={{transform:'scaleX(1)',marginLeft:"6rem",width:'10rem'}}></div>
        <div className="article__box__latest">
          {
            randomItem.map(v=>{
              return(
                <Blogitem column
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

export default Home