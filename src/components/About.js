import User from "./User"
import UserClass from "./UserClass"
import UserClassadv from "./UserClassadv"
import React from "react"
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props) {
        super(props);
       console.log("Parent About Constructor")
    }

   async componentDidMount() {
    console.log("Parent About Component Did Mount")
   }

   componentDidUpdate() {
    console.log( " Parent component did update")
   }
   componentWillUnmount(){
    console.log(" Parent component will unmount")
   }

   render(){
    console.log("Parent About Render")
    return(
        <div>
        
         LoggedIn User
         <UserContext.Consumer>
            {/* { (data) => console.log(data)} */}
            {
                ({loggedInUser}) => (
                    <h1> {loggedInUser} </h1>
                )
            }
         </UserContext.Consumer>

            <h1>Its About Page. This is Namaste React Web Series.</h1>
            {/* Functional Components */} 
            <User name = "Aditya Roy Child1" location = {"Delhi"} /> 
            {/* Class Components */}
            <UserClass name = "Shraddha Child 2" location = {"Pune"} />
            <UserClass name = {"Ananya Child 3"} location = {"Mumbai"} />
            <UserClassadv name = "Sifra adv child" />
        </div>
    )
   }
}


// Functional React Component

// const About = () => {
// return(
//     <div>
//         <h1>Its About Page</h1>
//         {/* Functional Components */}
//         <User name = "Aditya Roy Child1" location = {"Delhi"}/> 
//         {/* Class Components */}
//         <UserClass name = "Shraddha Child 2" location = {"Pune"}/>
//         <UserClass name={"Ananya Child 3"} location = {"Mumbai"}/>
//         <UserClassadv/>
//     </div>
// )
// }
export default About;
