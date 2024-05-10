import '../css/UploadArticle.css'
import Header from '../components/Header';
import Footer from '../components/footer';
import chapters from '../constants/chapters';
import topics from '../constants/topics';
import { useState } from "react";

export const UploadArticle = () => {

    const [searchChapter, setsearchChapter] = useState('');
    const [searchTopic, setSearchTopic] = useState('');
    const [filteredChapters, setfilteredChapters] = useState(chapters);
    const [filteredTopics, setfilteredTopics] = useState(topics);


    const filterChapters = (e) => { 
        


        const searchTerm = e.target.value;
        setsearchChapter(searchTerm)

        const filteredItems = chapters.filter((chapter) =>
            chapter.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setfilteredChapters(filteredItems);
    }

    const filterTopics = (e) => { 

        const searchTerm = e.target.value;
        setSearchTopic(searchTerm)

        const filteredItems = topics.filter((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setfilteredTopics(filteredItems);

    }

    const dropdownChapters = filteredChapters.map(chapter => <a href='' className='chapters'>{chapter}</a>);
    const dropdownTopics = filteredTopics.map(topic => <a href='' className='topics'>{topic}</a>);

    const displayChapters = () => {

        const chapters = document.getElementsByClassName('chapters');

        for (let i = 0; i < chapters.length; i++){
            chapters[i].classList.add('displayChapters');
        }

    }

    const hideChapters = () => {

        const chapters = document.getElementsByClassName('chapters');

        for (let i = 0; i < chapters.length; i++){
            chapters[i].classList.remove('displayChapters');
        }

    }

    const displayTopics = () => {

        const topics = document.getElementsByClassName('topics');

        for (let i = 0; i < topics.length; i++){
            topics[i].classList.add('displayTopics');
        }

    }

    const hideTopics = () => {

        const topics = document.getElementsByClassName('topics');

        for (let i = 0; i < topics.length; i++){
            topics[i].classList.remove('displayTopics');
        }

    }

    const displayReview = (e) => {

        let isChecked = e.target.checked;
        const review = document.getElementById('review');

        if (isChecked) {
            review.style.display = 'flex';
        }

        else {
            review.style.display = 'none'; 
        }

    }

    const [difficulty, setDifficulty] = useState('');
    const [reviewCount, setReviewCount] = useState('');
    const [readTime, setReadTime] = useState('');

    const numbersOnly = (e, type) => {

        const regex = /^[0-9\b]+$/;
        const inputValue = e.target.value;

        if (inputValue === '' || regex.test(inputValue)){

            switch(type) {
                case 'difficulty':
                    setDifficulty(inputValue);
                    break;
                case 'reviewCount':
                    setReviewCount(inputValue);
                    break;
                case 'readTime':
                    setReadTime(inputValue);
                    break;
            } 


        }

    }

    return (

        <div>

            <Header />

            <form className='uploadArticle'>

        	    <label for='name'>Article Name</label>
                <input type='text' id='name' className='text_input'></input>
                
                <label for='chapters'>Chapters</label>
                <div id='chapterDropdown' className='dropdown'>

                    <input 
                        type='text' 
                        id='chapterInput' 
                        className='text_input'
                        value={searchChapter}
                        onChange={filterChapters}
                        onFocus={displayChapters}
                        onBlur={hideChapters}
                    />

                    <div id='chapterItems' className='dropdownItems'>
                        {dropdownChapters}
                    </div>

                </div>

                <label for='topics'>Topics</label>
                <div id='topicsDropdown' className='dropdown'>

                    <input 
                        type='text' 
                        id='topicsInput' 
                        className='text_input'
                        value={searchTopic}
                        onChange={filterTopics} 
                        onFocus={displayTopics}
                        onBlur={hideTopics}
                    />

                    <div className='dropdownItems'>
                        {dropdownTopics}
                    </div>

                </div>

                <label for='references'>References</label>
                <textarea name='references'></textarea>

                <div className='addReview'>

                    <input type='checkbox' id='reviewCheckbox' onChange={displayReview}></input>
                    <label for='reviewCheckbox'>Add a Review</label>

                </div>

                <div id='review' className='review'>

                    <label for='difficulty'>Difficulty</label>
                    <input 
                    type='text' 
                    pattern='[0-9]*' 
                    value={difficulty}
                    onChange={(e) => numbersOnly(e, 'difficulty')}/>

                    <label for='reviewCount'>Number of Reviews</label>
                    <input
                    className='text_input' 
                    type='text'
                    pattern='[0-9]*' 
                    value={reviewCount}
                    onChange={(e) => numbersOnly(e, 'reviewCount')}/>

                    <label for='time'>Reading Time</label>
                    <input 
                    type='text' 
                    className='text_input'
                    pattern='[0-9]*' 
                    value={readTime}
                    onChange={(e) => numbersOnly(e, 'readTime')}/>

                </div>

                <input type='submit' className='submitBtn'></input>

            </form>

            <Footer />

        </div>

    );

}