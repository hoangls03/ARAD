import styles from "../css/Profile.module.css";
import Header from '../components/Header';
import Footer from '../components/footer';

const Profile = () => {

    return (

        <div>
            
            <Header />

            <div className={styles.profile}>

                <div className={styles.userInfo}>
                    <img className={styles.profilePicture} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                    
                    <h1>Firstname Lastname</h1>
                    <h3>example@email.com</h3>
                    <h3>{10} Reviews</h3>
                </div>

                <div className={styles.userArticles}>

                    
                    <div className={styles.articles}>
                        
                        <h1>Reviewed Articles</h1>

                        <div className={styles.preview}>

                            <article>
                                <h2>Article 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque elit enim, eget accumsan lectus ultricies id. Proin sit amet est sed nisi porta lacinia nec sed libero... 
                                </p>
                            </article>
                            
                            <article>
                                <h2>Article 2</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque elit enim, eget accumsan lectus ultricies id. Proin sit amet est sed nisi porta lacinia nec sed libero... 
                                </p>
                            </article>
                            
                            <article>
                                <h2>Article 3</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque elit enim, eget accumsan lectus ultricies id. Proin sit amet est sed nisi porta lacinia nec sed libero... 
                                </p>
                            </article>

                        </div>

                    </div>


                    <div className={styles.articles}>
                        
                        <h1>Uploaded Articles</h1>

                        <div className={styles.preview}>

                            <article>
                                <h2>Article 1</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque elit enim, eget accumsan lectus ultricies id. Proin sit amet est sed nisi porta lacinia nec sed libero... 
                                </p>
                            </article>
                            
                            <article>
                                <h2>Article 2</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque elit enim, eget accumsan lectus ultricies id. Proin sit amet est sed nisi porta lacinia nec sed libero...
                                </p>
                            </article>
                            
                            <article>
                                <h2>Article 3</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque elit enim, eget accumsan lectus ultricies id. Proin sit amet est sed nisi porta lacinia nec sed libero... 
                                </p>
                            </article>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>

    );
    
}

export default Profile;