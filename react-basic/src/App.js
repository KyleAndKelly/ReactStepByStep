const message = "hello world"
const isLogin = true
const flag = true
function getNum() {
    return 10
}

const testList= [
  {id:1,val:"test1"},
  {id:2,val:"test2"},
  {id:3,val:"test3"}
]
function App() {
  return (
    <div className="App">
      {/* <h3>Title</h3>
      {message}
      {getNum()}
      {'test string'}
      {new Date().getDate()} */}

      <li>test1</li>
      <li>test2</li>
      <li>test3</li>
      {testList.map(item=><li key={item.id}>{item.val}</li>)}
      {isLogin? "Login":"not Login"}
      {flag && <span>flag is true</span>}
    </div>
  );
}

export default App;
