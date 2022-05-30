import React,{ useState,useContext}  from "react";
import { articleData } from "../data/articles";
const ArticleContext= React.createContext();

export const ArticleContextProvider=({children})=>{
    const [article,setArticle]=useState(articleData)
    return(
    <ArticleContext.Provider value={{article,setArticle}} >
        {children}
    </ArticleContext.Provider>
    )
}

export const useArticleContextConsumer =()=>{
    return useContext(ArticleContext);
}