import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as testData from '../../data/testData';

class TestComponentView extends React.Component{

    constructor(props, context){
        super(props, context);
    }



    objRow(someObj, index)
    {
        return <div key={index} className="info"> {someObj.title}</div>;
    }

    render(){

        const dat= testData.testJson;
        const datString = JSON.stringify(dat, null, 2);

        return (                                                          // This should be a container component. Move JSX out to view component.
            <div className="container-fluid text-center">
            <div className="row">
                <div className="col-xs-12">
                <h3 > All Objects </h3>
                {this.props.allObjs.map(this.objRow)}
                </div>
            </div>
            <div>
                <h3> Presenting some json data </h3> 
                <pre>{datString}</pre>
            </div>

            </div>
        );
    } 

}
TestComponentView.PropTypes= {
    dispatch: PropTypes.func.isRequired,
    allObjs: PropTypes.array.isRequired
};


//mapStateToProps
function mapStateToProps (state, ownProps) {    // state here represents the state that is in redux store. ownProps let us access components props.
    return {
        allObjs: state.objectReducer
    };
}

//export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)  // removing optional parameter of mapDispatchToProps and will access dispatch-action using default dispatcher prop
export default connect(mapStateToProps)(TestComponentView);  // connect for creating component that can interact with redux.

