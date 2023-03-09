import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTrendingMovies } from "../../services/API";
import placeholderImage from '../../placeholder.png';
import  MoviesList  from "components/MoviesList/MoviesList";
import { CardMovie } from "components/MoviesList/CardMovie";
import styles from './HomePage.module.css';

console.log(placeholderImage)

function HomePage() {
    const [data, setData] = useState([]);
    const {pathname, search} = useLocation()
    const currenUrl = `${pathname}${search}`;

    useEffect(() => {
        getTrendingMovies().then( data =>setData(data.results))      
    }, [])   

    const url = useNavigate();
    console.log(url);
    return (
        <>        
        <h2 className={styles.title}>Trending today</h2>
        <MoviesList>
                {data.map(({ id, original_title, poster_path }) => {
                    return <CardMovie
                        key={id}
                        state={currenUrl}
                        id={id}
                        title={original_title}
                        poster={poster_path} />
            })}
            <Outlet />
        </MoviesList>
        </>
    )
}

export default HomePage;
