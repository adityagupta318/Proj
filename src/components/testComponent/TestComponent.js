import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as testActions from '../../actions/testActions';




class TestComponent extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state={
            someObj: { title: ""}
        };
        // This is required for ES6. Othereise in the render function, 'this'.onClickSave will try to find onClickSave in render function..
        this.onClickSave= this.onClickSave.bind(this);              
        this.onTitleChange= this.onTitleChange.bind(this);
    }

    onTitleChange(event){
        const obj= this.state.someObj;
        obj.title = event.target.value;
        this.setState({someObj : obj});
    }

    onClickSave(){
        this.props.dispatch(testActions.testAction(this.state.someObj));        // See dispatching Action here! 
        //alert(`Saving ${this.state.someObj.title}`);
        const obj= this.state.someObj;
        obj.title = "";
        this.setState({someObj : obj});
    }

    objRow(someObj, index)
    {
        return <div key={index} className="info"> {someObj.title}</div>;
    }

    render(){
        return (                                                          // This should be a container component. Move JSX out to view component.
            <div className="container-fluid text-center">
            <div className="row">
                <div className="col-xs-12">
                <h3 > All Objects </h3>
                {this.props.allObjs.map(this.objRow)}
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                <h4> Testing Input </h4>
                <input type="text"
                onChange={this.onTitleChange}
                value={this.state.someObj.title} />
                <input type="submit"
                value="save"
                onClick={this.onClickSave}/>
                </div>
            </div>
            </div>
        );
    } 

}
TestComponent.PropTypes= {
    dispatch: PropTypes.func.isRequired,
    allObjs: PropTypes.array.isRequired
};


//mapStateToProps
function mapStateToProps (state, ownProps) {    // state here represents the state that is in redux store. ownProps let us access components props.
    return {
        allObjs: state.testReducer
    };
}


//export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(component)  // removing optional parameter of mapDispatchToProps and will access dispatch-action using default dispatcher prop
export default connect(mapStateToProps)(TestComponent);  // connect for creating component that can interact with redux.


 



//ES5 way of creating class
/*
const TestComponent = React.createClass({

    render: ()=>{
        return (
            <div className="container-fluid">
            <p>This is test!</p>
            </div>

        );
    }

});
*/