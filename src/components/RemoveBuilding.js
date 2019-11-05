import React from 'react';

class RemoveBuilding extends React.Component{

    render() {


        return (
            <p>

                <button onClick = {() => this.props.removeBuilding()}
                ><b>Remove Building</b>
                </button>
                


            </p>
        )
    }
}

export default RemoveBuilding;
