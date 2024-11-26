import React from "react"


const message = "hello world"
const isLogin = true
const flag = true
const contentType = 1
function getNum() {
    return 10
}
function getContent(){
  if(contentType ===1){
      return <span>1 Page Mode</span>
  }else if(contentType ===2){
      return <span>2 Page Mode</span>
  }else if(contentType ===3){
      return <span>3 Page Mode</span>
  }
}

const testList= [
  {id:1,val:"test1"},
  {id:2,val:"test2"},
  {id:3,val:"test3"}
]

function testClick1(){
  console.log("clicked")  
}

function testClick2(e){
  console.log("clicked Event: ",e)  
}

function testClick3(param){
  console.log("clicked Event: ",param)  
}

function testClick4(param,e){
  console.log("clicked Event: ",param,e)  
}

// function TestComponent1(){
//   return <div>
//       <h3>Test Component</h3>
//       <button>test component</button>
//     </div>
  
// }



function App() {
  const [count, setState] = React.useState(0)
  const updateCount = ()=>{
    // count++ //not work
    setState(count+2)
  }

  const [form, setForm] = React.useState({name:"kyle"})
  const updateForm = ()=>{
    // form.name = jack //not work
    setForm({
      ...form,
      name:"jack"
    })
  }
  return (
    <div className="App">

      {/* <h3>Title</h3>
      {message}
      {getNum()}
      {'test string'}
      {new Date().getDate()} */}

      {/* <li>test1</li>
      <li>test2</li>
      <li>test3</li>
      {testList.map(item=><li key={item.id}>{item.val}</li>)}
      {isLogin? "Login":"not Login"}
      {flag && <span>flag is true</span>} */}

      {/* {getContent()} */}

      {/* {<button onClick={testClick1}>Button1</button>}
      {<button onClick={testClick2}>Button2</button>}
      {<button onClick={()=>testClick3("kyle")}>Button3</button>}
      {<button onClick={(e)=>testClick4("kyle",e)}>Button4</button>} */}

      {/* {
        <div>
        <TestComponent1/>
        <TestComponent1></TestComponent1>
        </div>
      } */}

      {/* {
        <div> 
          <button onClick={updateCount}>{count}</button>
          <button onClick={updateForm}>{form.name}</button>
        </div>
      }   */}


    </div>
  );
}

export default App;
