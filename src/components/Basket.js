import React from 'react'

export default function Basket({basket,cost}) {
  return (
    <div>
    <div className='mainBasket'>
    <div className='showBasket'>
    <h2>Basket</h2>
    {basket.length === 0 && <p>not found result</p> || null}
    {
     basket.map(item => (
       <div className='basketList'>
       <img width="100" src={item.img} />
       <p>{item.name} x {item.amount}</p>
       <p> $ {item.price * item.amount}</p>

       </div>
       ))
     }
     {cost && <p>Total : $ {cost}</p> || null}
     </div>
     

     </div>
     </div>
     )
   }
