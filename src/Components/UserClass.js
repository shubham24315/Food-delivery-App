import React from "react"

class UserClass extends React.Component{
//in class based components we use constructor to recieve props and we need to use super(props)
//when instance of class is created constructor is called
    constructor(props){
        super(props);
        // console.log(props);
        this.state={
          userInfo:{
            name:"Dummy",
            location:"Default location"
          }
        };
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/shubham24315");
        const jsonData=await data.json();
        // console.log(jsonData);
        this.setState({
           userInfo:jsonData,
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.count!==prevState.count ||
            this.state.count2!==prevState.count2){

//if we want to update on the basis of some state
// this.state.count!==prevState.count this checks if preivious count is equal to latest count
        
        }
    //after the update of our state in second phase t his is called
        // console.log("Component updated");
    }
    
     componentWillUnmount(){
        //when the compoenent will be gone from the page basically when we go the new page
        //ummount means dissaperaing from the ui
        //mount means showing on the ui 
        // console.log("Component unmounted");
    }
    render(){
        // const {name,location}=this.props;
        return  (
        <div className="user-card">
   
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>Location: {this.state.userInfo.location}</h3>
        <h4>Contact: @akshaymarch7</h4>
        </div>   
        );
    }
}

export default UserClass;

/*
constructor(dummy data in state)
render(dummy data in state)
<HTML UPDATED>
componentDidMount
<API CALL>
<this.setState>
-----UPDATE PHASE-----
render(API data)
<HTML new API data>
componentDidUpdate
 */ 