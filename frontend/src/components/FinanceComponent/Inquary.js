import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Inquary(props) {
    const details = [{
        name: props.userName,
        userProfile: props.profile,
        description:props.description,
        payment:props.payment,
        id:props.id
    }];       
    const [itemList, setItemList] =useState([])
    const navigate = useNavigate()
    const goBack = (e)=>navigate("/Finance/Inquaries")

  return (
    details.map((item,idx) => {

   return(
    <div>
        <div className='w-xl h-40 px-6 py-12 bg-backGrnd border-black border rounded-2xl flex flex-row items-center gap-10'>

            <div className='w-24 h-24 bg-purple-500 border-black border rounded-full'>
                <img className='w-24 h-24 rounded-full object-cover ' src={item.userProfile} alt={details.userProfile}/>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='text-left px-2 py-1'>
                    <span className='font-bold text-left text-base'>{item.name}</span>
                </div>
               
                <div className='w-96 h-12 px-2 py-1 overflow-x-hidden text-left text-sm font-normal'>
                    <span>{item.description}</span>
                </div>
            </div>

            <div className='flex flex-row gap-4 '>
                <Link to={"/Finance/Inquary/reply"} state={{details}} >
                <button className='w-28 h-11 p-2 bg-white rounded-lg font-bold text-right text-xs flex items-center gap-4 border-black border'>
                    <span className='bg-white inline-block rounded-full w-8 h-8'>                   
                        <svg className='stroke-current text-purple-600 w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>
                   </span>
                    Reply    
                </button>    
                </Link>
                <Link to={"/Finance/Inquaries/delete"} state={{details}}>      
                <button onClick={(e)=>{
                         
                         if(window.confirm("Are you sure you want to delete this item")){
                           const p = {
                            InquaryID : item.id
                            
                            } 
                           axios.delete("http://localhost:8000/inquaries/delete",{data : p}).then((result)=>{
                             setItemList([])
                             goBack();
                           })
                         }{ console.log(item.id)}
                       
                 }}  className='w-28 h-11 p-2 bg-white rounded-lg font-bold text-right text-xs flex items-center gap-4 border-black border'>                    
                    <span className='inline-block rounded-full w-8 h-8'>
                        <svg className='stroke-current text-red-600 w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </span>
                    Delete                   
                </button>      
                </Link>            
            </div>

        </div>       

    </div>
   )
     })
  )
}