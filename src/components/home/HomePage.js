import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron text-center">
                <h2> Tagging, DataMap</h2>
                <p> Add and remove tags </p>
                <Link to="test" className="btn btn-primary btn-lg"> Test component </Link>
            </div>
        );
    }
}

export default HomePage;