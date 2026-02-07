import Card from "./components/Card"
import Greeting from "./components/Greeting"
import DeveloperCard from "./components/DeveloperCard"
import FruitList from "./components/FruitList"
import UserList from "./components/UserList"
import Button from "./components/Button"
import HandleClick from "./components/HandleClick"
import HandleSubmit from "./components/HandleClick"
function App() {
  const developerObj = {
    name: "Alice",
    age: 30,
    country:"USA",
  }

  return (
  <>
  {/* <Greeting name="Jessica" />
  <Greeting name="Vivek" />
  <Greeting name="Alisa" /> */}

  {/* <Card>
    <h2>Hello</h2>
  </Card> */}

    <div className="App">
      <Greeting isLoggedIn={false}/>
    </div>
  <div className="App">
    <DeveloperCard {...developerObj}/>
  </div>

  <FruitList />

  <UserList />
<div>
  <Button />
  
  </div>
<HandleClick />
<HandleSubmit/>
  </>
  )
}

export default App
