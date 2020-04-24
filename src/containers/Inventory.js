import React, { Component } from 'react';

import Aux from '../hoc/Aux';
import Scooter from '../components/Scooters/Scooters';

class Inventory extends Component {
    render () {
        return (
            <Aux>
                <Scooter />
            </Aux>
        );
    }
}

export default Inventory;