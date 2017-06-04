import React from 'react';
import TableRow from './TableRow';


class TaggingTable extends React.Component{

     constructor(props, context){
        super(props, context);
        
        // This is required for ES6. Othereise in the render function, 'this'.onClickSave will try to find onClickSave in render function..
        // this.onClickSave= this.onClickSave.bind(this);              
        // this.onTitleChange= this.onTitleChange.bind(this);
        this.handleAddingTag=this.handleAddingTag.bind(this);
    }

    handleAddingTag(ex){
        this.props.onNewTagCreated(ex);
    }

    render(){
        

        let rows=[];
        this.props.tagGroups.forEach(ex=> {

            rows.push(<TableRow tagInfo={ex.Tags} column={ex.Column} onNewtag={this.handleAddingTag}  />);

        });

        return (
            <table   className=" table-striped table-bordered container text-center  ">
        <thead>
          <tr  >
            <th>Column Name</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
        );
        
    }





}


export default TaggingTable;