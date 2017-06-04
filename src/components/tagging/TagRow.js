import React from 'react';


class TagRow extends React.Component{

     constructor(props, context){
        super(props, context);
        
        // This is required for ES6. Othereise in the render function, 'this'.onClickSave will try to find onClickSave in render function..
        // this.onClickSave= this.onClickSave.bind(this);              
        // this.onTitleChange= this.onTitleChange.bind(this);
    }


    render(){

        return (
            <tr >
            <td> {this.props.tagName}</td>
            <td> {this.props.tagValue}</td>
            </tr>
        );
    }
}


export default TagRow;