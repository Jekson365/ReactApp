import "./App.css";
import { Item } from "./components/Item";

function App() {
  const items = [
    {
      id: Math.floor(Math.random() * 999999999),
      question: "Question 1",
      answer:"Answer 1"
    },
    {
      id: Math.floor(Math.random() * 999999999),
      question: "Question 2",
      answer:"Answer 2"
    },
    {
      id: Math.floor(Math.random() * 999999999),
      question: "Question 3",
      answer:"Answer"
    },
  ];
  return(
  <div className="container">
      {items.map((single) => {
        return (
          <Item items={items} />
        )
      })}
    </div>
  )
}

export default App;
