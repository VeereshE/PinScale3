import React, { useEffect , useState} from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css'

export default function TopthreeTransaction() {

    const [data, setData] = useState([]);
    
    const history = useHistory();
   

    const onClickDeleted= () =>{
        history.push('/delete')
    }

    const onClickEdited= () =>{}

    useEffect (() =>{

        const queryParams = {
            limit: 2,
            offset: 2,
          };
        axios.get("https://bursting-gelding-24.hasura.app/api/rest/all-transactions",
        
        {
         headers:{
           "Content-Type": "application/json",
               "x-hasura-admin-secret":
                 "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
               "x-hasura-role": "user",
               "x-hasura-user-id": "1",
         },
         params: queryParams,
        }
        
        )
        .then((response) => {
         //console.log(response)
         setData(response.data);
         
       })
        .catch((error) => {
         console.error("Error fetching data:", error);
         
       });
     }, []);
     
  return (
    <div className='last-transcation'>
             <h1 className='last_heading'>Last Transaction</h1>
             <div className='last-transcation-details'>
                <div className='first-list'>
                  <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690803124/Group_328_hyooka.svg'
                  alt='red' className='red_container'/>
                  <h1 className='heading_list'>Subscription</h1>
                  <span className='shopping'>Entertainment</span>
                  <span className='time'>28 Jan, 12.30 AM</span>
                  <span className='value'>-$999</span>
                  <button className='button1'>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690804978/pencil-02_vvjx6b.svg'
                    alt='pencial' className='pencial'/>
                  </button>
                  <button className='button1'>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690805534/trash-01_rix8iz.svg'
                    alt='pencial' className='pencial'/>
                  </button>
                </div>

                <div className='first-list'>
                  <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690803124/Group_328_hyooka.svg'
                  alt='red' className='red_container'/>
                  <h1 className='heading_list'>work</h1>
                  <span className='shopping'>Salary</span>
                  <span className='time'>27 July, 1.00 AM</span>
                  <span className='value'>$500</span>
                  <button className='button1'>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690804978/pencil-02_vvjx6b.svg'
                    alt='pencial' className='pencial'/>
                  </button>
                  <button className='button1'>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690805534/trash-01_rix8iz.svg'
                    alt='pencial' className='pencial'/>
                  </button>
                </div>

                <div className='first-list'>
                  <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690803124/Group_328_hyooka.svg'
                  alt='red' className='red_container'/>
                  <h1 className='heading_list'>Spotify Subscription</h1>
                  <span className='shopping'>Shopping</span>
                  <span className='time'>28 Jan, 12.30 AM</span>
                  <span className='value'>-$150</span>
                  <button className='button1' onClick={onClickDeleted}>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690804978/pencil-02_vvjx6b.svg'
                    alt='pencial' className='pencial'/>
                  </button>
                  <button className='button1' onClick={onClickEdited}>
                    <img src='https://res.cloudinary.com/dgvec2ipx/image/upload/v1690805534/trash-01_rix8iz.svg'
                    alt='pencial' className='pencial'/>
                  </button>
                </div>
             </div>
          </div>
  )
}
