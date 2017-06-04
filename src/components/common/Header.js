import React from 'react';
import {Link, IndexLink} from 'react-router';


const Header = (props) => {
    return(
        <div style={{background: 'white'}}  >
        <h2 style={{color: 'blue'}}>DataMap Tagging</h2>
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {"  | "}
            <Link to="/about" activeClassName="active">About</Link>
            {"  |  "}
            <Link to="/test" activeClassName="active">Test</Link>            
            {"  |  "}
            <Link to="/testView" activeClassName="active">Test View</Link>            
            {"  |  "}
            <Link to="/tagStreams" activeClassName="active">Tag Stream</Link>            
        </nav>
        </div>
    );
};

export default Header;