import React from "react"

class UserClass extends React.Component {
   
   constructor(props){
    super(props);

    this.state={
        count:0,
        count2:1,
    };
  console.log(this.props.name + " Child Constructor"); 
   }

 async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount")
    //API Call Hoga Yahan
} 
   componentDidUpdate() {
    console.log(this.props.name + " Child component did update")
   }
   componentWillUnmount(){
    console.log(this.props.name+ " Child component will unmount")
   }

    render(){

     console.log(this.props.name + " Child Render")

     // ---------Destructuring Props----------//
     const{name,location} = this.props;

    //  console.log(this.state.count)
    //  console.log(this.state.count2)

        return(
            <div className="user-card">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h4>Contact: @dhanashreeblj</h4>
          <button 
            onClick={() => {
                this.setState({
                    count:this.state.count+1,
                });
            }}
            >
             CountIncrease : {this.state.count}
          </button>
            </div>
        )
    }

}

export default UserClass;

/***
 * Accessing the state is in the way: <this.state>.statevariable name
 * Accessing the prop is in the way: <this.props>.propname
 * 
 */