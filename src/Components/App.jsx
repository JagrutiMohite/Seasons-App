import React,{Component} from 'react';
import SeasonsDisplay from "./SeasonsDisplay";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {lat: null};
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat: position.coords.latitude})
            },
            (error) => console.log(error)
        );
    }
    render() {
        return (
            <div>
                 Latitude: {this.state.lat}
            <SeasonsDisplay/>
            </div>
        );
    }
}

export default App;
