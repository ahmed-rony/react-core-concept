import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Photoshop', price: '$79.99', review:'Great'},
    {name: 'Illustrator', price: '$67.99', review:'Good'},
    {name: 'PDF Reader', price: '$7.99', review:'Normal'},
    {name: 'PDF Acrobat', price: '$15.99', review:'Normal'},
    {name: 'Ebook Reader', price: '$27.99', review:'Normal'}
  ]
  // const productNames = products.map(product => product.name);  // map kore info dhora;
  const students= ['ron', 'hermonie', 'luna','ginny'];

  
  return (
    <div className="App">
      <header className="App-header">
        {/* =========================== */}
        <Counter></Counter>
        {/* =========================== */}
        <Users></Users>
        {/* =========================== */}
        <Users2></Users2>
        {/* =========================== */}
        <ul>
          {students.map(name => <li>{name}</li>)}
          {products.map(product=> <li>{product.name}</li>)}
        </ul>
        <ul>
          {products.map(product=> <li>{product.name}</li>)}
        </ul>
        <ul>
          {products.map(product => <Product product = {product}></Product>)}
        </ul>
        {/* ============================= */}
        <Product product={products[0]} name={products[0].name}></Product>
        <Product product={products[1]} name={products[1].name}></Product>
        <Product product={products[2]} name={products[2].name}></Product>
      </header>
    </div>
  );
}
/* ============================  fetching external data =================================================== */ 
function Users(){
  const [user, setUser] = useState([]);

  useEffect(() => {   //  useeEffect()  == external data load kore;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users {user.length}</h3>
      {
        user.map(users => <li style={{textAlign: 'left'}}>{users.name} - {users.email}</li>)
      }
    </div>
  )
}
  /* ============================  fetching external data =================================================== */ 
  function Users2(){
    const [user2, setUser2]= useState([]);

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUser2(data))
    }, [])
    return (
      <div>
        {
          user2.map(user3 => <p style={{padding: '10px 10px', border: '2px solid cyan', fontSize: '17px'}}>{user3.title}</p>)
        }
      </div>
    )
  }
/* ================================= button e click korle count barbe-kombe; shopping cart er moto ============================================= */ 
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);  // () => setCount(count + 1) == onclick btn e likhleo hoy;
  // const handleIncrease = () => {
  //   const newCount = count + 1;  // setCount(count + 1) == likhle ei line dorkar nei; shortcut;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}
/* ============================================================================== */ 
function Product(props){
  const productStyle= {
    border: '2px solid yellow',
    borderRadius: '5px',
    padding: '20px 30px'
  }

  const {name, price, review} = props.product;
  return (
    <div style={productStyle}>
      <h2>Name: {name}</h2>
      <h1 style={{color: 'gold'}}>{props.product.price}</h1>
      <p>review: {review}</p>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
