import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <>
               <ol key = {'relativeList'}>
                   <li key = {'relativeListItem1'}>Item1</li>
                   <li key = {'relativeListItem2'}>Item2</li>
                   <li key = {'relativeListItem3'}>Item3</li>
               </ol>
            </ >
        )
    }
}


export default App;
