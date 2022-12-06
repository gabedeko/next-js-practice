import React from 'react'

import ArticleItem from './ArticleItem'

import articleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}: {articles: any}) => {
  return (
    <div className={articleStyles.grid}>

    {articles.map((article: any, index: any) => (
    //   <h3 key={article + index}>{article.title}</h3>
    <ArticleItem key={index} article={article} />
      ))}
    </div>
  )
}

export default ArticleList