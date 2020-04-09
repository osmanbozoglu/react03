import React from 'react'

class PureComp extends React.Component {

    state = {
        name: 'Francis'
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.name === this.state.name) {
            return false;
        }
        return true;
    }


    render() {
        console.log("render");
        return (
            <>
                <h3>{this.state.name}</h3>
                <button
                    onClick={
                        () => this.setState({ name: "Steve" })
                    }
                >
                    Click To Change
                </button>
            </>
        )
    }
}


export default PureComp;
