
/*import MovieStars from "../../components/MovieStars";*/
/*import MovieScore from "../../components/MovieScore";*/
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { BASE_URL } from "../../utils/requests";
import { MoviePage } from "../../types/movie";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {

        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response => {

            //console.log(response.data);
            const data = response.data as MoviePage;
            setPageNumber(data.number);
        });

    }, []);

    //forma errada
    

    return (

        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">

                <div className="row">

                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                </div>

            </div>
        </>
    );

}

export default Listing;