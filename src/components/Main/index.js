import React, { Component } from "react";
import friends from "../../friends.json";
import Card from "../Card";
import "./style.css";

class Main extends Component {
    // Set state to array from friends.json
    state = {
        friends
    }

    // Function to filter cards by gender
    filterFriends = gender => {
        const friends = this.state.friends.filter(friend => friend.gender !== gender);
        this.setState({friends});
    }

    // Function to reset cards to original
    resetFriends = () => {
        this.setState({friends});
    }

    // Function to sort cards alphabetically by name
    sortName = () => {
        const friends = this.state.friends.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({friends});
    }

    // Function to sort cards alphabetically by occupation
    sortOcc = () => {
        const friends = this.state.friends.sort((a, b) => a.occupation.localeCompare(b.occupation));
        this.setState({friends});
    }

    render() {
        return (
            <div>
                <button onClick={() => this.filterFriends("Female")} className="btn">Show men</button>
                <button onClick={() => this.filterFriends("Male")} className="btn">Show women</button>
                <button onClick={() => this.resetFriends()} className="btn">Show all</button>
                <br />
                <button onClick={() => this.sortName()} className="btn">Sort by name</button>
                <button onClick={() => this.sortOcc()} className="btn">Sort by occupation</button>
                {this.state.friends.map(friend => (
                <Card
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                    image={friend.image}
                    occupation={friend.occupation}
                    gender={friend.gender}
                />
                ))}
            </div>
        )
    }
}

export default Main;