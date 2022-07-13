import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const url = 'https://jsonplaceholder.typicode.com/users'

function App() {

  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    setLoading(true)
    try {

      const response = await fetch(url)
      const fetchUsers = await response.json()
      setLoading(false)
      setUsers(fetchUsers)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if(loading){
    return <Loading />
  }

  const check = (id) => {
    if(id > users.length -1){
      return 0
    }else if(id < 0){
      return users.length -1
    }
    return id
  }

  const nextButton = () => {
    setIndex(id => {
      let newId = id + 1
      return check(newId)
    })
  }

  const prevButton = () => {
    setIndex(id => {
      let newId = id - 1
      return check(newId)
    })
  }
  
  return (

    <div className="App">

      <h1>Our Reviews</h1>

      <div className="container">

        <div className="pic"></div>
        <h2 className="name">{users[index].name}</h2>
        <p className="email">{users[index].email}</p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe dolorum illo soluta qui laudantium beatae excepturi
          dolorem sunt nesciunt facere.
        </p>

      </div>

      <div className="buttons">

        <button className="prev-btn" onClick={prevButton}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className="next-btn" onClick={nextButton}>
          <i className="fa-solid fa-angle-right"></i>
        </button>

      </div>

    </div>
  );
  
}

export default App;
