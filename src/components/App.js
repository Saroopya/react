import React,{PropTypes} from 'react';

class App extends React.Component{
    render(){
        return(
           <div className="container">
               <p>Header comes here</p>
               {this.props.children}
               <p>footer comes here</p>
           </div> 
        )
    }
}
App.propTypes={
    children:PropTypes.object.isRequired
};
export default App;

