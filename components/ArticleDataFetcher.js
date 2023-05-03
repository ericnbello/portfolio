import { useEffect, useState } from 'react';
import data from '../constants/data';
import ArticlePage from './ArticlePage';

const ArticleDataFetcher = () => {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data);
        setArticleData(response);
        // console.log(articleData)
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchData();
  }, []);

  return articleData ? <ArticlePage articleData={articleData} /> : <div>Loading...</div>;
};

export default ArticleDataFetcher;