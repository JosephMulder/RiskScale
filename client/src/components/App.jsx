import React from 'react';
import Categories from './Categories.jsx';
import Table from './Table.jsx';
import Markers from './Markers.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: {fire: "red", flood: "red", hurricane: "red", storm: "red", crime: "red"},
            displayC: {fire: "black", flood: "black", hurricane: "black", storm: "black", crime: "black"}
        }
        this.changeFire = this.changeFire.bind(this);
        this.changeFlood = this.changeFlood.bind(this);
        this.changeHurricane = this.changeHurricane.bind(this);
        this.changeStorm = this.changeStorm.bind(this);
        this.changeCrime = this.changeCrime.bind(this);

    }

    changeFire() {
        this.setState({
            display: {fire: "red", flood: "white", hurricane: "white", storm: "white", crime: "white"},
            displayC: {fire: "red", flood: "black", hurricane: "black", storm: "black", crime: "black"}

        })
    }
    changeFlood() {
        this.setState({
            display: {fire: "white", flood: "red", hurricane: "white", storm: "white", crime: "white"},
            displayC: {fire: "black", flood: "red", hurricane: "black", storm: "black", crime: "black"}

        })
    }
    changeHurricane() {
        this.setState({
            display: {fire: "white", flood: "white", hurricane: "red", storm: "white", crime: "white"},
            displayC: {fire: "black", flood: "black", hurricane: "red", storm: "black", crime: "black"}
        })
    }
    changeStorm() {
        this.setState({
            display: {fire: "white", flood: "white", hurricane: "white", storm: "red", crime: "white"},
            displayC: {fire: "black", flood: "black", hurricane: "black", storm: "red", crime: "black"}

        })
    }
    changeCrime() {
        this.setState({
            display: {fire: "white", flood: "white", hurricane: "white", storm: "white", crime: "red"},
            displayC: {fire: "black", flood: "black", hurricane: "black", storm: "black", crime: "red"}

        })
    }
    render() {
        return (
            <div>
                <header className="head">
                    <h>Risk Scale</h>
                </header>
                <Categories changeFire={this.changeFire} changeCrime={this.changeCrime} changeFlood={this.changeFlood} changeHurricane={this.changeHurricane} changeStorm={this.changeStorm} displayC={this.state.displayC}/>
                <Table/>
                <Markers display={this.state.display}/>

            </div>
        )
    }
}

export default App;