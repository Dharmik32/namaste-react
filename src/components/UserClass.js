import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https:/dummy-photo",
            }
        }

        console.log(this.props.name + " Child Constructor");
    }

    async componentDidMount(){
        console.log(this.props.name + " Child Component Did Mount");

        this.timer = setInterval(() => {
            console.log("NAMASTE RECAT OP");
        }, 1000);

        // Api Call

        const data = await fetch("https://api.github.com/users/Dharmik32");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log("json", json);
    }

    componentDidUpdate(){
        console.log("Component Did Upedate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component will unMount");
    }

    render(){
        // const {name, location} = this.props;
        const {name, location, avatar_url} = this.state.userInfo;
        console.log(this.props.name + " Child Render");
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: 9328772732</h2>
                <h2>Social Media: dharmikchavda07</h2>
    
            </div>
        )
    }
}

export default UserClass;