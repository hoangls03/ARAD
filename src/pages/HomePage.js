//Import Components
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import "../css/HomePageModule.css";
import Dropdown from '../components/Dropdown';
import { db } from '../firebase/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

export const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchArticles = async () => {
      try {
        const articlesCollection = await getDocs (collection(db, "Articles"));
        const articlesData = articlesCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesData);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="mainOne">
        <div className='bar_home'>
          <div className='searchbar_home'>
            <form className="searchbar-form" action="/search" method="get">
            <input className="searchbar" type="text" name="q" placeholder="Type your search here"></input> <button className='search-button'><img src="MagGlass.png" alt="Search" id='search-img'/></button>
            </form>
          </div>
        <div className = 'Dropdown_Home'><Dropdown  className = 'Dropdown_bar' /></div>
        </div>
        <div className='space_between_home'></div>
        <div className='articles_home'>
          <h1>Articles</h1>
          <ul>
            {articles.map(article => (
              
              <li className={"article"} key={article.id}>
                <div className={"red"}>

                  <h1>{article.Name}</h1>
                  <p className={"font"}>IntroChapter: {article.IntroChapter}</p>
                  <p className={"font"}>Link: {article.Link}</p>
                  <p className={"font"}>Reference: {article.Reference}</p>
                  <p className={"font"}>Topics: {article.Topics}</p>

                </div>
                <div className={"black"}>

                  <h1>Literary Review:</h1>
                  <p className={"font"}>Difficulty: {article.Difficulty}</p>
                  <p className={"font"}>NumReviews: {article.NumReviews}</p>
                  <p className={"font"}>TimeMin: {article.TimeMin}</p>
                </div>
                    {/*<h2>{article.Name}</h2>*/}
                    {/*<p>IntroChapter: {article.IntroChapter.join(', ')}</p>*/}
                    {/*<p>Link: {article.Link}</p>*/}
                    {/*<p>Reference: {article.Reference}</p>*/}
                    {/*<p>Topics: {article.Topics.join(', ')}</p>*/}

                    {/*<p>Review:</p>*/}
                    {/*<p >Difficulty: {article.Difficulty}</p>*/}
                    {/*<p >NumReviews: {article.NumReviews}</p>*/}
                    {/*<p >TimeMin: {article.TimeMin}</p>*/}
              </li>

            ))}

          </ul>   
        </div>
      </main>
      <Footer />
    </div>
  );
};
