import React from 'react';
import TagRow from './TagRow';


class TableRow extends React.Component{

    constructor(props, context){
        super(props, context);
        
        this.newTagName="";
        this.newTagValue="";
        
        this.handleAddTagClick=this.handleAddTagClick.bind(this);
        this.handleNewTagNameChange=this.handleNewTagNameChange.bind(this);
        this.handleNewTagValueChange=this.handleNewTagValueChange.bind(this);
    }

    handleNewTagNameChange(event)
    {
        this.newTagName=event.target.value;

    }
    handleNewTagValueChange(event)
    {
        this.newTagValue=event.target.value;
    }

    handleAddTagClick()
    {
        this.props.onNewtag(
            {
                Column:this.props.column,
                TagName: this.newTagName,
                TagValue:this.newTagValue
            });
    }


    render(){
        let rows=[];
        this.props.tagInfo.forEach(ex=> {
            rows.push(<TagRow tagName={ex.TagName} tagValue={ex.TagValue}/>);
        });

        return (
            <tr  > 
                <td>{this.props.column}
                </td>   
                <td>
                    <table className="table  container">
                        <tbody>
                        {rows}
                        <tr>
                            <td> <input  name="tagName" onChange={this.handleNewTagNameChange}/> </td>
                            <td> <input name="tagValue" onChange={this.handleNewTagValueChange}/> </td>
                            <td> <input type="submit" value="Add Tag" onClick={this.handleAddTagClick}/> </td>
                        </tr>
                        </tbody>
                    </table>
                </td>   
            </tr>
        );
    }
}


export default TableRow;