import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { imageDefaultLink } from '../../services/imageDefaultLink';
import * as API from '../../services/API';
import styles from './Cast.module.css';
import placeholderImage from '../../placeholder.png';

function Cast () {
    const [data, setData] = useState(null);
    const movieId = useParams().movieId;

    useEffect(() => {
        API.getCreditsById(movieId).then((response) => setData(response.cast));
    }, [movieId])
    
    console.log(data)
    return ( data &&
        <ul className={styles.cardList}>
            {data.map((response) => {
                return <li key={response.id} className={styles.cardCast}>
                            <div>
                                <img src={response.profile_path ? `${imageDefaultLink}${response.profile_path}` : placeholderImage} alt={response.name} />
                                <h3>{response.name}</h3>
                                <p>{response.character}</p>
                            </div>
                        </li>
            })}
        </ul>
        )
}   

export default Cast;