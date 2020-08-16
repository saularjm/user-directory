import React, { Component } from "react";
import friends from "../../friends.json";
import Card from "../Card";


class Main extends Component {
    state = {
        friends
    }

    filterFriends = gender => {
        const friends = this.state.friends.filter(friend => friend.gender !== gender);
        this.setState({ friends });
    }

    resetFriends = () => {
        this.setState({friends});
    }

    render() {
        return (
            <div>
                <button onClick={() => this.filterFriends("Female")}>Show men</button>
                <button onClick={() => this.filterFriends("Male")}>Show women</button>
                <button onClick={() => this.resetFriends()}>Show all</button>
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