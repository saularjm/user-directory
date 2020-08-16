import React, { Component } from "react";
import friends from "../../friends.json";
import Card from "../Card";


class Main extends Component {
    state = {
        friends
    }

    

    render() {
        return (
            <div>
                {this.state.friends.map(friend => (
                <Card
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                    image={friend.image}
                    occupation={friend.occupation}
                    location={friend.location}
                />
                ))}
            </div>
        )
    }
}

export default Main;