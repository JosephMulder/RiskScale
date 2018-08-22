import React from 'react';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="categories">

                <div className={`category ${this.props.displayC.fire}`} onClick={this.props.changeFire}>
                    Fire Risk
                </div>

                <div className={`category ${this.props.displayC.flood}`} onClick={this.props.changeFlood}>
                    Flood Risk
                </div>

                <div className={`category ${this.props.displayC.hurricane}`} onClick={this.props.changeHurricane}>
                    Hurricane Risk
                </div>

                <div className={`category ${this.props.displayC.storm}`} onClick={this.props.changeStorm}>
                    Storm Risk
                </div>

                <div className={`category ${this.props.displayC.crime}`} onClick={this.props.changeCrime}>
                    Crime Rate
                </div>
            </div>
        )
    }
}

export default Categories;