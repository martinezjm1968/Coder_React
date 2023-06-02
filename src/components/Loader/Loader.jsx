import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

function Loader() {
    return (
        <div className="container my-5">

            <div className="loader">
                <div class="loading-wave">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                </div>
                {/*<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>*/}
                Cargando... 
            </div>
        </div>
    );
}

export default Loader;