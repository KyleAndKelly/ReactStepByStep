import React from "react"
import {createContext,useContext} from "react"
import {useEffect} from "react"

// const MsgContext = createContext()
// const message = "hello world"
// const isLogin = true
// const flag = true
// const contentType = 1
// const URL = "http://geek.itheima.net/v1_0/channels"
 



// function getNum() {
//     return 10
// }

// function getContent(){
//   if(contentType ===1){
//       return <span>1 Page Mode</span>
//   }else if(contentType ===2){
//       return <span>2 Page Mode</span>
//   }else if(contentType ===3){
//       return <span>3 Page Mode</span>
//   }
// }

// const testList= [
//   {id:1,val:"test1"},
//   {id:2,val:"test2"},
//   {id:3,val:"test3"}
// ]

// function testClick1(){
//   console.log("clicked")  
// }

// function testClick2(e){
//   console.log("clicked Event: ",e)  
// }

// function testClick3(param){
//   console.log("clicked Event: ",param)  
// }

// function testClick4(param,e){
//   console.log("clicked Event: ",param,e)  
// }

// function TestComponent1(){
//   return <div>
//       <h3>Test Component</h3>
//       <button>test component</button>
//     </div>
// }

// function Son1(props) {
//    console.log(props.name)
//    console.log(props.age)
//    console.log(props.isTrue)
//    console.log(props.list)
//    console.log(props.obj)
//    console.log(props.funct)
//    console.log(props.child)
// }

// function Son2(props) {
//   console.log(props.children)
// }

// function Son3({onGetMsg}){
//   const  sonMsg = "hello bro"
//   onGetMsg(sonMsg)
// }

// function Son4(props){
//   console.log("now in Son4")
//   console.log(props.msg)
// }

// function Son5(){
//   return (  <Son6/>)
// }

// function Son6(){
//   console.log("now in Son6")
//   console.log(useContext(MsgContext))
// }


function App() {

  // const [count, setState] = React.useState(0)
  // const [form, setForm] = React.useState({name:"kyle"})
  // const [inputValue,setInputValue] = React.useState("")
  // const [message,setMsg] = React.useState("")
  // const inputRef = React.useRef(null)
  // const [list, setList] = React.useState([])

  // const updateCount = ()=>{
  //   // count++ //not work
  //   setState(count+2)
  // }

  // const updateForm = ()=>{
  //   // form.name = jack //not work
  //   setForm({
  //     ...form,
  //     name:"jack"
  //   })
  // }

  // const updateInputValue = (val) =>{
  //   setInputValue(val)
  //   console.log(inputValue)
  // }

  // const onInputChange = () =>{
  //   console.log("on ref change")
  //   console.log(inputRef.current.value)
  // }

  // const getMsg = (msg)=>{ 
  //   setMsg(msg)
  // } 

  // useEffect (()=>{
  //     async function getList(){
  //       const res = await fetch(URL)
  //       const jsonRes = await res.json()
  //       console.log(jsonRes)
  //       setList(jsonRes.data.channels)
  //     }
  //     getList()
  //   },[])

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

      {/* {<input 
        type="text"
        value ={inputValue}
        onChange={(e)=>{updateInputValue(e.target.value)}}>
        </input>}

        {<input 
        type="text"
        ref ={inputRef}
        onChange={onInputChange}>
        </input>} */}

      {/* {
        <Son1
          name="this is son1"
          age={20}
          isTrue={false}
          list={['Vue', 'React']}
          obj={{ name: "jack" }}
          funct={() => console.log(123)}
          child={<span>123</span>}></Son1>

      } */}

      {/* {
      <Son2>
        <span> this is son2</span>
      </Son2>
      } */}

      {/* <Son3 onGetMsg = {getMsg}></Son3>
      <Son4 msg = {message}></Son4> */}

      
      {/* <MsgContext.Provider value={"hello son"}>
        <Son5/>
      </MsgContext.Provider> */}

      {/* {
        <ul>
          {list.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
      } */}


    </div>
  );
}

export default App;
