import React from 'react';

class Markers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>

                <div className={`marker ${this.props.display.fire}`}>
                    Fire Risk
                </div>
                <div className={`marker2 ${this.props.display.hurricane}`}>
                    Hurricane Risk
                </div>
                <div className={`marker3 ${this.props.display.crime}`}>
                    Crime Rate
                </div>
                <div className={`marker4 ${this.props.display.storm}`}>
                    Storm Risk
                </div>
                <div className={`marker5 ${this.props.display.flood}`}>
                    Flood Risk
                </div>
                <div className={`markerline ${this.props.display.fire}`}>
                |
                </div>
                <div className={`markerline2 ${this.props.display.hurricane}`}>
                |
                </div>
                <div className={`markerline3 ${this.props.display.crime}`}>
                |
                </div>
                <div className={`markerline4 ${this.props.display.storm}`}>
                |
                </div>
                <div className={`markerline5 ${this.props.display.flood}`}>
                |
                </div>

            </div>
        )
    }
}

export default Markers;