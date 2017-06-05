import React from 'react';
import {connect} from 'react-redux';
import * as act from '../../actions/testReddit';

class HomePage extends React.Component {

    constructor(props, context)
    {
        super(props, context);
        this.getRedditStuff= this.getRedditStuff.bind(this);

    }

    getRedditStuff()
    {
        this.props.dispatch(act.fetchStuffFromReditt());
    }

    render(){
        return (
            <div className="jumbotron text-center">
                <h2>Yo</h2>
                <input type="submit"
                value="DoYourThing!"
                onClick={this.getRedditStuff}/> 
                <h3>{this.props.data[0].tmp}</h3>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return ({
        data:state.stuff
    });
}

export default connect (mapStateToProps)( HomePage);