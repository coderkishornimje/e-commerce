import React from 'react'
import {product} from './data/products.js';
import {useDispatch,useSelector} from 
'react-redux';
import Card from 'react-bootstrap/Card';
import './App.css';

function Home(props) {
 const dispatch=useDispatch();
 const {count}=useSelector(state=>state.custom);
  
 const addbtn=()=>{
 dispatch({
  type:'increment'
 })
 }

 console.log(dispatch);
  return (
    <div className='product-list'>
     <h1>card item:{count}</h1>
      {
        product.map((item)=>{
          return(
          <div className='product-list'>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
          Price:{item.price}<br/>
          cDate:{item.cDate}<br/>
          uDate:{item.uDate}<br/>
          Product_id:{item.p_id}<br/>
          <button onClick={addbtn} variant="primary">Add to Card</button>
          <button variant="primary">View Details</button>
    
          </Card.Text>
          </Card.Body>
          </Card>
          </div>
          )
        })
      }
    </div>
  )
}

export default Home
