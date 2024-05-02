import { Component } from "react"
import CardList from "./components/CardList"
import Navbar from "./components/Navbar"

import { network } from "./utils/data"


class App extends Component 
{
  
  constructor()
  {
    super()
    this.state = {
        network
    }
  }

  handleRemove = (propsData)=>{
    const {network} = this.state;
    const getId = network.indexOf(propsData);
    network[getId].show = false;
    this.setState({
      network
    })
  }

  render()
  {
    const {network} = this.state
    return (
      <>  
          < Navbar />
          < CardList  network = {network} handleRemove = {this.handleRemove}/>
      </>
    )
  }
}

export default App
