import React from 'react';
import {getFunName} from "../helpers";

class StorePicker extends React.Component {

    goToStore(event) {
        // Stop from submitting
        event.preventDefault();

        // Get text from the input

        // Route to the text entered
        console.log(event);
    }

    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker