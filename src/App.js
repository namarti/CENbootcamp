import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 1,
      nextIndex: 149
      //nextIndex: this.props.data.length -1
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function

    this.setState({
      selectedBuilding: id,
    })
  }

  removeBuilding() {
    var temp = this.props.data.splice(this.state.selectedBuilding-1, 1)
    this.setState({
      data: temp
    })
  }

  addBuilding(building){
    //building.id=this.props.nextIndex
    //var temp2 = this.props.nextIndex+1
    //this.props.nextIndex = temp2

    var tempB = this.props.data.pop()
    building.id = tempB.id +1
    var temp = this.props.data.push(tempB)
    temp = this.props.data.push(building)

    this.setState({
      data: temp,
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1 className="header">UF Directory App</h1>
        </div>

        <Search
        filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              selectedBuilding = {this.state.selectedBuilding}
              data = {this.props.data}
              />
              <RemoveBuilding
              removeBuilding = {this.removeBuilding.bind(this)}
              />
            </div>
            <div className = "column3"><AddBuilding
            addBuilding = {this.addBuilding.bind(this)}
            nextIndex = {this.state.nextIndex}
            /></div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
