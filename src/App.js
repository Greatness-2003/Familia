import logo from './logo.svg';
import './App.css';


const family ={
  title: "Emmanuel-king Children: Who Are They?",
  children: {
    "1": {
      "nomen": "Praise",
      "position": "First",
      "age": "24",
      "appearance": "Stout, dark, buff",
      "character": "Loves food, ",
      "education": "College: Graduated"
    },
    "2": {
      "nomen": "Shalom",
      "position": "Second",
      "age": "23",
      "appearance": "Tall, lean",
      "character": "",
      "education": "College: Attending"
    },
    "3": {
      "nomen": "Fortune",
      "position": "Third",
      "age": "21",
      "appearance": "Full hair, tall, lean but buff",
      "character": "Full of himself, smart",
      "education": "College: Attending"
    },
    "4": {
      "nomen": "Greatness",
      "position": "Fourth",
      "age": "19",
      "appearance": "Plump, short-haired, medium-heighted",
      "character": "Sensible",
      "education": "College: Attending"
    },
    "5": {
      "nomen": "Peculiar",
      "position": "Fifth",
      "age": "18",
      "appearance": "Fatty-bobo, cute",
      "character": "Annoying",
      "education": "A-level: Attending"
    }
  }
};
function handleClick (child){
  // route us to child page with child props

}
const ChildrenButton = ({ children }) => {
  return(
  Object.values(children).map(child => 
      <>
      <div>
        <button onClick={handleClick(child)}>
          {child.nomen}
        </button>
      </div>
    
      </>
    )
  )
}

function App() {
  return (
    <div className="App">
      <h1>{family.title}</h1>
      <div>
        <ChildrenButton children ={family.children}/>
      </div>
    </div>
  );
}


export default App;
