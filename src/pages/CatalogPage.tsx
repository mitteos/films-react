import React from 'react';
import FilmList from "../components/FilmList";
import FilterBar from "../components/FilterBar";

const CatalogPage = () => {

    return (
        <div className='container catalog'>
            <FilterBar />
            <FilmList />
        </div>
    );
};

export default CatalogPage;