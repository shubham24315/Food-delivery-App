import User from "./User";
import UserClass from "./UserClass";
import React from "react"   
// we can also use import {Component} from "react"
class About extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    componenetDidMount(){
        // console.log("About mounted");
    }
    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is a namaste react webseries</h2>
    
            <User  name={"Parent"}/>
            <UserClass name={"Child1"} location={"Dehradun class"}/>
            {/* all the props are combined into a single object and send  */}
            {/* we are creating instance of a class */}
            </div>
        )
    }
}


export default About;

/*
suppose we have only one child
-Parent constructor cla
-Parent render
-Child constructor class
-Child render
-Child componentDidMount
-Parent componentDidMount

*/ 

/*
if there are multiple children then things will be called differently.react try to optimize 
-DOM manipulation is very expensive which occurs after reneder phase and before componentDidMount
so react optimize it it renders all the children and then call componentDidMount of all the children and then call componentDidMount of parent it is optimization
render phase is very fast and commit phase is slow due to DOM manipulation so to optimize react batches all the children render phase togther and then call componentDidMount of all the children and then call componentDidMount of parent
website link:-https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
-Parent constructor 
-Parent render
-Child1 constructor
-Child1 render
-Child2 constructor
-Child2 render
<DOM UPDATED - IN SINGLE BATCH>
-Child1 componentDidMount
-Child2 componentDidMount
-Parent componentDidMount
*/ 
