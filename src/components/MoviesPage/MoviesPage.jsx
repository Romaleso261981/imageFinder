import { CardMovie } from "components/MoviesList/CardMovie";
import MoviesList from "components/MoviesList/MoviesList";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import * as API from '../../services/API';
import styles from './MoviesPage.module.css';

function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState(null);
    const [data, setData] = useState(null);
    const {pathname, search} = useLocation()

    const currenUrl = `${pathname}${search}`;

    const handleChange = (event) => {
        setInputValue(event.currentTarget.value);
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchValue(inputValue);
        setSearchParams({...searchParams, query: inputValue });
        setInputValue('');
    }

    useEffect(()=> {
        if (search) {
            const query = searchParams.get('query')
            API.getSearchMovies(query).then((response) => setData(response.results))
        }
    },[])

    useEffect(() => {
        if (searchValue) {
            API.getSearchMovies(searchValue).then((response) => setData(response.results));
        }
    }, [searchValue]);

    return (
        <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="search" value={inputValue} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
            {data &&               
            <MoviesList>
                {data.map(({id, title, poster_path}) => {
                    return <CardMovie
                        key={id}    
                        state={currenUrl}
                        id={id}
                        title={title}
                        poster={poster_path} />
                    
                })} 
            </MoviesList> 
        }
        </>                
    )
}

export default MoviesPage;