import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <table className="table">
            <tbody>

            <tr className="row">
                <td>
                    |
                </td><td>
                    
                </td><td>
                    
                </td><td>
                    
                </td><td>
                    
                </td><td>
                    
                </td><td>
                    
                </td><td>
                    
                </td><td>
                    
                </td><td>
                    
                </td><td className="td">
                    |
                </td>
            </tr>
            <tr>
                <td>
                    0
                </td><td>
                    1
                </td><td>
                    2
                </td><td>
                    3
                </td><td>
                    4
                </td><td>
                    5
                </td><td>
                    6
                </td><td>
                    7
                </td><td>
                    8
                </td><td>
                    9
                </td><td className="td">
                    10
                </td>
            </tr>
        </tbody>
        </table>
        )
    }
}

export default Table;