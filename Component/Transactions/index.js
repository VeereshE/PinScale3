import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from '../Sidebar';
import './index.css';

export default function Transactions() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const queryParams = {
      limit: 2,
      offset: 2,
    };
    axios
      .get("https://bursting-gelding-24.hasura.app/api/rest/all-transactions", {
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "user",
          "x-hasura-user-id": "1",
        },
        params: queryParams,
      })
      .then((response) => {
        console.log(response)
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return<div className='loading'>Loading....</div>
  }




  return (
    <>
   <Sidebar/>  
   <div className='Dashboard-container'>
          <div className='card_heading_section'>
          <h1 className= "dash_head">Transactions</h1>
          <button className='AddTransaction_button'>+ Add Transaction</button>
          </div>
          <div className='list-All-transaction'>
             <div className='list-details'>
                <span className='User_name'>User Name</span>
                <span className='User_name'>Transaction Name</span>
                <span className='User_name'>Category</span>
                <span className='User_name'>Date</span>
                <span className='User_name'>Amount</span>
             </div>
             <hr className='line'/>
             <div className='list-of-all-details'>
             <span className='personUsername'>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690872117/Group_73_emfznf.svg'
              alt="dowm" className='down_cost'/>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690576227/Avatar_mgr8u7.png'
              alt="dowm" className='image_usernmae'/>
              <span className='Username'>Arlene McCoy</span>
             </span>

              <span className='tittle_usename'>Spotify Subscription</span>
              <span className='tittle_usename'>Shopping</span>
              <span className='tittle_usename'>28 Jan, 12.30 AM</span>
              <span className='amount_username'>-$2,500</span>
             </div>
             <hr className='line'/>
             <div className='list-of-all-details'>
             <span className='personUsername'>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690872117/Group_73_emfznf.svg'
              alt="dowm" className='down_cost'/>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690576227/Avatar_mgr8u7.png'
              alt="dowm" className='image_usernmae'/>
              <span className='Username'>Arlene McCoy</span>
             </span>

              <span className='tittle_usename'>Spotify Subscription</span>
              <span className='tittle_usename'>Shopping</span>
              <span className='tittle_usename'>28 Jan, 12.30 AM</span>
              <span className='amount_username'>-$2,500</span>
             </div>
             <hr className='line'/>
             <div className='list-of-all-details'>
             <span className='personUsername'>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690872117/Group_73_emfznf.svg'
              alt="dowm" className='down_cost'/>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690576227/Avatar_mgr8u7.png'
              alt="dowm" className='image_usernmae'/>
              <span className='Username'>Arlene McCoy</span>
             </span>

              <span className='tittle_usename'>Spotify Subscription</span>
              <span className='tittle_usename'>Shopping</span>
              <span className='tittle_usename'>28 Jan, 12.30 AM</span>
              <span className='amount_username'>-$2,500</span>
             </div>
             <hr className='line'/>
             <div className='list-of-all-details'>
             <span className='personUsername'>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690872117/Group_73_emfznf.svg'
              alt="dowm" className='down_cost'/>
             <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690576227/Avatar_mgr8u7.png'
              alt="dowm" className='image_usernmae'/>
              <span className='Username'>Arlene McCoy</span>
             </span>

              <span className='tittle_usename'>Spotify Subscription</span>
              <span className='tittle_usename'>Shopping</span>
              <span className='tittle_usename'>28 Jan, 12.30 AM</span>
              <span className='amount_username'>-$2,500</span>
             </div>
             <hr className='line'/>
          </div>
      </div>
    </>
  );
}
