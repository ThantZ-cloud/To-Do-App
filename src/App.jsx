import {useState, useRef} from 'react';
function Item({name}){
  return <ul>
    <li>{name}</li>
  </ul>
}


export default function App(){
  const inputRef = useRef();
   let [data , setData] = useState([
    {id:4, name: "Apple", done: true},
    {id:3, name: "Orange", done: false},
    {id:2, name: "Bread", done: true},
    {id:1, name: "Egg", done: true},
  ]);
  

const add = () => {
  let id = data[0].id + 1;
  let name = inputRef.current.value;
  setData([{id, name, done: false}, ...data]);
}

  return <div>
      <h1>Hello React</h1>
      <form onSubmit={e => {
        e.preventDefault();
        add();
        e.currentTarget.reset();
      }
      }>
        <input type='text' ref={inputRef} />
        <button type='submit'>ADD</button>
      </form>
      
      {data.map(item => <Item key={item.id} name={item.name}/> )}
    </div>

}