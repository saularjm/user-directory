import React, { Component } from "react";
import friends from "../../friends.json";
import Card from "../Card";


class Main extends Component {
    state = {
        friends
    }

    filterFriends = gender => {
        const friends = this.state.friends.filter(friend => friend.gender !== gender);
        this.setState({friends});
    }

    resetFriends = () => {
        this.setState({friends});
    }

    sortName = () => {
        const friends = this.state.friends.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({friends});
    }

    sortOcc = () => {
        const friends = this.state.friends.sort((a, b) => a.occupation.localeCompare(b.occupation));
        this.setState({friends});
    }

    render() {
        return (
            <div>
                <button onClick={() => this.filterFriends("Female")}>Show men</button>
                <button onClick={() => this.filterFriends("Male")}>Show women</button>
                <button onClick={() => this.resetFriends()}>Show all</button>
                <br />
                <button onClick={() => this.sortName()}>Sort by name</button>
                <button onClick={() => this.sortOcc()}>Sort by occupation</button>
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