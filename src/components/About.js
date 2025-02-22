import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          Loggin User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
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