// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button} from "react-bootstrap";


// const Cart = (props) => {
//     console.log("from cart", props.cart)
//     const { cart } = props;
//     // const {id} = props.cart;
//     let totalQuantity = 0;
//     let total = 0;
//     for (const item of cart) {
//         if(!item.quantity){
//             item.quantity = 1;
//         }
//         total = total + item.price * item.quantity;
//         totalQuantity = totalQuantity + item.quantity;
//     }
//     // let count = 0;

//     return (
//         <div>
//             <h3>Items Order</h3>
//             <h5>Items Order: {totalQuantity}</h5>
//             <br />
//             <p>Total: {total}</p>

//             {/* <Link className='d-inline-block mx-auto w-100 border mt-3' to={`/myorder/${id}`}>
//               <Button className='w-100 bg-warning border-0'>Add to MyOrder</Button>
//             </Link> */}


//             {/* <div className="border p-2">
//                 <h5>Added Item: {props.cart.length}</h5>

//                 <h5>Total Price: {total}</h5>
//                 {
                    
//                     cart?.map(cartData => {
//                         count++;
//                         // console.log('datyassss', cartData)
//                         return (
//                             <div className="border border-warning px-3 py-3 my-2">
//                                 <h3> <span>{count}. </span> {cartData?.props.title}</h3>
//                             </div>
//                         )
//                     })
//                 }
//             </div> */}
//         </div>
//     );
// };

// export default Cart;