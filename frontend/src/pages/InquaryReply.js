import React, { useEffect, useState } from 'react'
import Reply from '../components/FinanceComponent/Reply';
import Background from '../components/Template/Background'
import axios from 'axios';

export default function InquaryReply() {
    const title = "inquiry reply";
    const details = []; 
     


    const[InquaryReply, setInquaryReply] = useState([]);

    useEffect(() => {
      const getData = () => {
        axios.get("http://localhost:8000/inquaries/view").then((res) => {
          setInquaryReply(res.data);
          console.log(typeof(res.data));
        }).catch((err) => {
          console.log(err);
        })
      }
      getData();
    },[])
    
    InquaryReply.map((item, id) => {
      details.push(item)
    })


    return (
      <div>
          <Background contents = {
              <div className='flex flex-col items-center gap-10 p-10'>                            
                    <Reply details={details}/>                                       
              </div>            
          } title = {title}/>
      </div>
    )
  }
  

