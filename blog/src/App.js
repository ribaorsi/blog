import './App.css';
import {useState} from "react"

let dummyPosts = [
  {
    title: "Cím1",
    content: "Szöveg1",
    date: "2022-02-01",
  },

  {
    title: "Cím2",
    content: "Szöveg2",
    date: "2022-02-02",
  },

  {
    title: "Cím3",
    content: "Szöveg3",
    date: "2022-02-03",
  }
];

function App() {

  const [posts, setPosts] = useState(dummyPosts);

function add() {
  setPosts( {
    title: "Random",
    content: "Szöveg4",
    date: "2022-02-04"
  })
}

  return (
    <div className="App">
      <h1>Blog Posts</h1>

      <div>
        <input type = "text" placeholder="title"></input>
        <input type = "text" placeholder="post"></input>
        <button onClick={add}>New Post</button>
        <button onClick={()=> {setPosts([])}}>Delete all posts</button>
      </div>
        {posts.map((item) => {
          return (
            <div key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p>{item.date}</p>
              <input type = "text" placeholder="New post title"></input>
              <input type = "text" placeholder="New post text"></input>
              <button>Update</button>
              <button>Delete</button>
            </div>
          )
        })}
    </div>
  );
}

export default App;
