// ----------- Lifestyle of React Class Based Component---------//

import React from "react";

class UserClassadv extends React.Component{
   
    constructor(props){
      super(props);
      // If you are creating a state, default/INITIAL value is must.....
      this.state = {
        userInfo:{
            login:"dhanashree",
            location: "TVM",
        },
      };
      console.log(this.props.name+ " Adv Child Constructor")
    }

   async componentDidMount() {
      //Api call
     console.log(this.props.name + " Adv Child Component Did Mount")
      const data = await fetch ("https://api.github.com/users/DhanashreeBalaji");
      const json = await data.json();
    // ------------ UPDATING STATE -----------
     this.setState({
        userInfo: json,
     });
     console.log(json);
   }

   componentDidUpdate() {
    console.log(this.props.name + " Adv Child component did update")
   }
   componentWillUnmount(){
    console.log(this.props.name+ " Adv Child component will unmount")
   }

    render() {
      console.log(this.props.name+ " Adv Child Render")
      const {login,node_id,avatar_url,url} = this.state.userInfo;
        return(
        <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {login}</h2>
        <h3>Location : {node_id}</h3>
        <h4>Contact: {url}</h4>
        </div>
        );
    }

}

export default UserClassadv;