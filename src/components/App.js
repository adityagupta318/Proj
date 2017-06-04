import React, {PropTypes} from 'react';
import Header from './common/Header';


class App extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );

    }
}

// The following lines are culprit and cause random compiler error/crash. Though not sure why.
// App.prototype = {
// children: PropTypes.object.isRequired
// };

export default App;
