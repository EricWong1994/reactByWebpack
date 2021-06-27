import React, { Component } from 'react';
// import ForwardRefTest from './forwardRefTest.jsx'
// import ForwardRefTest from './forwardRefTest.jsx'
import ForwardRefTest from '@components/ref/forwardRefTest'
class Index extends Component {
    render() {
        return (
            <div>
                forwradRef
                <ForwardRefTest></ForwardRefTest>
            </div>
        );
    }
}

export default Index;
