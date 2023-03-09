import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { imageDefaultLink } from '../../services/imageDefaultLink';
import * as API from '../../services/API';
import styles from './Reviews.module.css';


function Reviews () {
    const [reviews, setReviews] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        API.getReviewsById(movieId).then((data) => setReviews(data.results));
    }, [])   
    
    return  (reviews?.length > 0
            ? <ul className={styles.cardList}>
            {reviews.map(({ id, author, content, author_details: { avatar_path: avatar } }) => {     
                    console.log(avatar)
                    return <li key={id}>
                                <div className={styles.cardReview}>
                                    <div className={styles.authorReview}>
                                        <img className={styles.avatar} src={avatar?.slice(1, 6) === "https"
                                            ? avatar.slice(1, avatar.length)
                                            : `${imageDefaultLink}${avatar}`}
                                            alt={author} />
                                        <h3>{author}</h3>
                                    </div>
                                    <p>{content}</p>
                                </div>
                            </li>
                })}
            </ul>
            : <div>No reviews</div>)       
}

export default Reviews;