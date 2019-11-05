import React from 'react';

class AddBuilding extends React.Component{

    addBuilding(){

        var building = 
        {
            id: this.props.nextIndex,
            name: this.myName.value,
            code: this.myCode.value,
            coordinates:{ 
                latitude: this.myLat.value, 
                longitude: this.myLon.value},
            address: this.myAddress.value

        }
        //this.props.data.push(building)
        /*building.id = this.myID.value
        building.name = this.myName.value
        building.code = this.myCode.value*/
        //this.props.nextIndex+=1

        this.props.addBuilding(building)
    }


    render() {


        return (
            <p>


                <p>
					{' '}
					<i>Fill in the following fields to add a building</i>

				</p>

                
                <p>
					<i>Code: </i>
					<input
                    type = "text"
                    ref = { (value) => {this.myCode = value} }
                    style={{width: "400px", height: "40px"}}
                    />
				</p>
				<p>
					<i>Name: </i>
					<input
                    type = "text"
                    ref = { (value) => {this.myName = value} }
                    style={{width: "400px", height: "40px"}}
                    />
				</p>
				
				<p>
					<i>	Latitude: </i>
					<input
                    type = "text"
                    ref = { (value) => {this.myLat = value} }
                    style={{width: "200px", height: "40px"}}
                    />
					<i>	Longitude: </i>
					<input
                    type = "text"
                    ref = { (value) => {this.myLon = value} }
                    style={{width: "200px", height: "40px"}}
                    />
				</p>
				<p>
					<i>Address: </i>
					<input
                    type = "text"
                    ref = { (value) => {this.myAddress = value} }
                    style={{width: "400px", height: "40px"}}
                    />
				</p>

                <button
                onClick = { this.addBuilding.bind(this) }
                >
                <b>Add Building</b>
                </button>


            </p>
        )
    }
}

export default AddBuilding;