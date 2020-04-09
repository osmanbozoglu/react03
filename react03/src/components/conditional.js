import React from "react";

class Conditional extends React.Component {

    state = {
        loading: true
    }

    render() {

        if (this.state.loading) {
            return (<div>Loading...</div>)
        }
        else {
            return (
                <>
                    <div>Conditional</div>
                </>
            )
        }


    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 3000)
    }

}

export default Conditional;