import React, {useEffect} from 'react';
import FilmItem from "./UI/FilmItem/FilmItem";
import {useAppDispatch, useAppSelector} from "../hooks/store";
import {fetchFilms, fetchSearchFilms} from "../store/asyncActions/fetchFilms";
import Spinner from "./UI/Spinner/Spinner";
import {useParams} from 'react-router-dom';
import Pagination from "./UI/Pagination/Pagination";

const FilmList = () => {

    const dispatch = useAppDispatch()
    const {title, page} = useParams()
    const {films, error, isLoading, selectedGenresAndCountries, pageCount} = useAppSelector(state => state.filmSlice)



    // todo: оптимизировать повторные запросы
    useEffect(() => {
        title
            ? dispatch(fetchSearchFilms(title))
            : !films.allFilms.length && dispatch(fetchFilms(page ? Number(page) : 1, selectedGenresAndCountries))
    }, [title])

    useEffect(() => {
        dispatch(fetchFilms(page ? Number(page) : 1, selectedGenresAndCountries))
    }, [page, selectedGenresAndCountries])

    return (
        <div className="list">
            <div className="list__container">
                {isLoading && <Spinner />}
                {title
                    ? films.searchFilms.map(film =>
                        <FilmItem key={film.kinopoiskId} filmInfo={film} />
                    )
                    : films.allFilms.map(film =>
                        <FilmItem key={film.kinopoiskId} filmInfo={film} />
                    )

                }
                {error && <h3>{error}</h3>}
            </div>
            {!title && <Pagination pageCount={pageCount}/>}
        </div>
    );
};

export default React.memo(FilmList);