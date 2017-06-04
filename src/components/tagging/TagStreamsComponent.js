import React from 'react';
import {connect} from 'react-redux';
import {loadTags, addNewTag, saveAllTags, addNewColumn} from '../../actions/streamTaggingActions';
import TaggingTable from './TaggingTable';
 

class TagStreamsComponent extends React.Component {

     constructor(props, context){
        super(props, context);
        this.onClickSave= this.onClickSave.bind(this);
        this.onClickSubmitURL= this.onClickSubmitURL.bind(this);
        this.onTitleChange= this.onTitleChange.bind(this);
        this.handleNewTagCreation= this.handleNewTagCreation.bind(this);
        this.onAddNewColumn= this.onAddNewColumn.bind(this);
        this.onColNameChange= this.onColNameChange.bind(this);
        this.inputString="";
        this.colName="";

    }
    onTitleChange(event){
        this.inputString = event.target.value;
    }
    onClickSubmitURL(){
        this.props.fetchTags(this.inputString);
    }
    onClickSave(){
        this.props.saveTags(this.props.tags);
    }

    handleNewTagCreation(tagInfo)
    {
        let tmp = "sdf";
        this.props.addTag(tagInfo);
        // Here Call Redux action for creationg new tag! 
    }
    onAddNewColumn()
    {
        this.props.addNewColumn(this.colName);
    }
    onColNameChange(event)
    {
        this.colName=event.target.value;
    }



    render(){
        
        return (                                                     
            <div className="container-fluid text-center">
            <div className="row">
                <div className="col-xs-12">
                <h4> URI </h4>
                <input  type="text"
                onChange={this.onTitleChange} 
                />
                <input type="submit" 
                value="submit"
                onClick={this.onClickSubmitURL}/>
                </div>
            </div>
            <div className=" row">
                <div>
                <h4 > URI: {this.props.tags.URI} </h4>
                <div className="table-responsive">
                <h4 > Tagging Table </h4>
                <TaggingTable tagGroups={this.props.tags.TagGroups} onNewTagCreated={this.handleNewTagCreation} />
                </div>
                </div>
            </div>
            <div className="row">
                <div >
                    <input  type="text"
                        onChange={this.onColNameChange} 
                    />
                    <input type="submit" className="btn btn-primary"
                    value="Create Column"
                    onClick={this.onAddNewColumn}/>
                    <input type="submit" className="btn btn-primary"
                    value="Save"
                    onClick={this.onClickSave}/>
                </div>
                    
            </div>
            </div>
        );
    }
}



function mapStateToProps (state, ownProps) {   
    return {
        tags: state.tags
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTags: (url) => dispatch(loadTags(url)),
        addTag: (tagData) => dispatch(addNewTag(tagData)),
        saveTags: (data)=> dispatch(saveAllTags(data)),
        addNewColumn: (colName)=> dispatch(addNewColumn(colName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TagStreamsComponent); 


/*
let datString = JSON.stringify(this.props.tags, null, 2);
        datString="Dont show URI response";

            <div className="row">
                <div className="col-xs-12">
                <h4 > URI Response </h4>
                <pre>{datString}</pre>
                </div>
            </div>
*/