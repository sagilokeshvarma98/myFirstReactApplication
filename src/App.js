
import './App.css';
import React,{createRef} from 'react';
import Box from './Components/box'
import {FunComp , FunComp2} from './Components/fun';
class App extends React.Component
{
     constructor(){
       super();
        this.state={
          titles :["fruits","vegetables","meat","dairy"],
          items:[
            ["Orange","Mango","Papaya","Gauva"],
            ["Carrot","Beetroot","Beans","Onion","Potato"],
            ["chicken","mutton","pork","fish"],
            ["eggs","bread","cream","butter"]
          ]
        }

        this.addItem = this.addItem.bind(this);
        this.index = createRef();
        this.value = createRef();
     }

     addItem(){
      let stateIndex = this.index.current.value
      let newItem = this.value.current.value
      this.state.items[stateIndex].push(newItem)
      this.setState(this.state)
     }

     render(){
      console.log(this);
         return(
           <div>
              <h1>First React App</h1>
              <div className='inputDiv'>
              <input type="text"  ref={this.value} />
              <select ref={this.index} >
                <option value="0">fruits</option>
                <option value="1">vegetables</option>
                <option value="2">meat</option>
                <option value="3">dairy</option>
              </select>
              <button onClick={this.addItem}>Add</button>
              </div>
              <div className='boxes'>
              {
              this.state.titles.map(
                (x,index)=><Box title={x} key={x} items={this.state.items[index]}></Box>
              )
              }
              </div>
              <div className='funcomp'>
                <FunComp name="lokesh"></FunComp>
                <FunComp2 country="india"></FunComp2>
              </div>
           </div>
         )
     }
}
export default App;