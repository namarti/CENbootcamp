import React from 'react';

class ViewBuilding extends React.Component {

	render() {

		const {data, selectedBuilding} =this.props

		/*const buildingInfo = this.props.data.map( id =>{
			const info = this.props.data[this.props.selectedBuilding -1]
			return(
				<p>
				<p>
					<i>ID #: </i>
					{info.id}
				</p>
				<p>
					<i>Code: </i>
					{info.code}
				</p>
				<p>
					<i>Name: </i>
					{info.name}
				</p>
				
				<p>
					<i>Coordinates: </i>
					<i>	Latitude: </i>
					{info.coordinates.latitude}
					<i>	Longitude: </i>
					{info.coordinates.longitude}
				</p>
				<p>
					<i>Address: </i>
					{info.address}
				</p>
				</p>
			)
		})*/

		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>		
				</p>
				
				<p>
					<i>ID #: </i>
					{data[selectedBuilding -1].id}
				</p>
				<p>
					<i>Code: </i>
					{data[selectedBuilding -1].code}
				</p>
				<p>
					<i>Name: </i>
					{data[selectedBuilding -1].name}
				</p>
				
				<p>
				    <i>Coordinates: </i>
					<i>	Latitude: </i>
					{data[selectedBuilding -1].coordinates.latitude}
					<i>	Longitude: </i>
					{data[selectedBuilding -1].coordinates.longitude}
					
				</p>
				<p>
					<i>Address: </i>
					{data[selectedBuilding -1].address}
				</p>

			</div>
		);
	}
}
export default ViewBuilding;
