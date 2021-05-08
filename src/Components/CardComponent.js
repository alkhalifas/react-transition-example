import React, {Component} from "react"

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            editing: false
        }
    }

    render() {
        return(
            <div className={"card border"}>
                <h5>Card:</h5>
                <h5>{this.props.name}</h5>
            </div>
        )
    }
}

export default CardComponent;