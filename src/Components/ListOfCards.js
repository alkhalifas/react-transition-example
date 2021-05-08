import CardComponent from "./CardComponent";
import React, {Component} from "react";

class ListOfCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardsList: [
                {
                    id: 123,
                    name: "resume1"
                },
                {
                    id: 234,
                    name: "resume2"
                },
                {
                    id: 345,
                    name: "resume3"
                },
                {
                    id: 456,
                    name: "resume4"
                },
            ]
        }
    }


    render() {
        return (
            <div className={"container"}>
                <h1>List of Cards:</h1>
                <div className={"row"}>
                    {
                        this.state.cardsList.map((card, index) => (
                            <CardComponent
                                key={card.index}
                                name={card.name}> </CardComponent>
                        ))
                    }
                </div>

            </div>
        )
    }
}
export default ListOfCards