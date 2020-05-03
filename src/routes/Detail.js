import React from "react"; 
import Movie from "../components/Movie";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="movies">
                <Movie
                    year={location.state.year}
                    title={location.state.title} 
                    summary={location.state.summary} 
                    poster={location.state.poster}
                    genres={location.state.genres}
                    rating={location.state.rating}
                />
                </div>
                
            )
        } else {
            return null;
        }
    }
}

export default Detail;