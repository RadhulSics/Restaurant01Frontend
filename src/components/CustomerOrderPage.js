import React, { useState } from "react";
import menu1 from "../Assests/menu1.jpg";
import menu2 from "../Assests/menu2.jpg";
import menu3 from "../Assests/menu3.jpg";
import menu4 from "../Assests/menu4.jpg";
import menu5 from "../Assests/menu5.jpg";
import menu6 from "../Assests/menu6.jpg";
const CustomerOrderPage=()=>{
const [selectedItems,setSelectedItems]=useState([])
// const [order,setOrder]=useState({
//   productName: '',
//     quantity: 0,
//     totalPrice: 0
// })

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedItems);
    alert('Order Submitted!');
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setOrder(prevOrder => ({
  //     ...prevOrder,
  //     [name]: value
  //   }));
  // };

const handleAddToOrder=(item)=>{
    setSelectedItems([...selectedItems,item]);
}

  return (
    <div>


      <div class="row row-cols-1 row-cols-md-3 g-4">
      
        <div class="col">
          <div class="card">
            <img
              src={menu1}
              style={{ width: "432px", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Noodles</h5>
              <p class="card-text">Rs:160</p>
              <button class="btn btn-light"  onClick={()=>handleAddToOrder("Noodles")}>Add Item</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu2}
              style={{ width: "432px", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Burger</h5>
              <p class="card-text">Rs:200</p>
              <button class="btn btn-light" onClick={()=>handleAddToOrder("Burger")}>Add Item</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu3}
              style={{ width: "432px", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Chicken Biriyani</h5>
              <p class="card-text">Rs:180</p>
              <button  class="btn btn-light"onClick={()=>handleAddToOrder("Chicken Biriyani")}>Add Item</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu4}
              style={{ width: "432px", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Alfah Mandi</h5>
              <p class="card-text">Rs:820(full)</p>
              <p class="card-text">Rs:430(half)</p>
              <p class="card-text">Rs:220(quater)</p>
              <button class="btn btn-light" onClick={()=>handleAddToOrder("Alfah Mandi")}>Add Item</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu5}
              style={{ width: "432px", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Porotta & Beef (Combo)</h5>
              <p class="card-text">Rs:100</p>
              <button class="btn btn-light" onClick={()=>handleAddToOrder("Porotta & Beef (Combo)")}>Add Item</button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src={menu6}
              style={{ width: "432px", height: "23rem", position: "relative" }}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Beef Biriyani</h5>
              <p class="card-text">Rs:200</p>
              <button class="btn btn-light" onClick={()=>handleAddToOrder("Beef Biriyani")}>Add Item</button>
              
            </div>

          </div>
        </div>
      </div>
 <div className="select" style={{height:'20rem',width:'30rem'}}>
      <h2>Selected items;</h2>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input type="text" name="productName" value={order.productName} onChange={handleChange} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={order.quantity} onChange={handleChange} />
        </div>
        <div>
          <label>Total Price:</label>
          <input type="number" name="totalPrice" value={order.totalPrice} onChange={handleChange} />
        </div>
       */}
      <ul>
        {selectedItems.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
      <button class="btn btn-primary" onClick={()=>setSelectedItems([])}>Clear order</button>   
      <button class="btn btn-primary" onClick={()=>console.log(selectedItems)}onSubmit={handleSubmit}>Submit Order</button>
      {/* </form>  */}
    
    </div> 


    
      
  </div> 
  );
  
}


export default CustomerOrderPage;
