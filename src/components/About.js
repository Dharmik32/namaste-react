import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
  constructor(props){
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount");
  }

  render(){
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is about us page in namaste react series.</h2>
        {/* <UserClass name={"Dharmik (Class Component)"} location={"Amedaabed Class"}/> */}
        <User/>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>This is about us page in namaste react series.</h2>
//       {/* <User name={"Dharmik (Function Component)"}/> */}
//       <UserClass name={"Dharmik (Class Component)"} location={"Amedaabed Class"}/>
//     </div>
//   );
// };

export default About;