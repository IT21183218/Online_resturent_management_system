import React from 'react'


export default function Viewcomp(props) {
  return (
    <div>
       <div className='w-xl h-40 px-6 py-12 bg-backGrnd border-black border rounded-2xl flex flex-row items-center gap-10'>

<div className='w-24 h-24 bg-purple-500 border-black border rounded-full'>
    <img className='w-24 h-24 rounded-full object-cover ' src={props.picture} alt='profile'/>
</div>

<div className='flex flex-col gap-0'>
    <div className='text-left px-2 py-1'>
        <span className='font-bold text-left text-base'></span>
    </div>
    <div className='text-left px-2 py-1 text-sm font-semibold flex flex-row items-center gap-5'>
        <span>Transaction ID : </span>
    </div>
       
    <div className='text-left px-2 py-1 text-sm font-semibold flex flex-row items-center gap-5'>
        <span>Ammount : </span> 
    </div>
    <div className='text-left px-2 py-1 text-sm font-semibold flex flex-row items-center gap-5'>
        <span>Date Time : </span>
    </div>
    <div className="flex flex-col gap-5 items-center">
        <span className="h-fit w-fit">{props.id} </span>

        <span className="w-fit h-fit ">{props.date} </span>

        <span className="h-fit w-fit">{props.expences}</span>
      
    </div>
                
</div>
 
</div>


<div className='flex flex-row gap-4'>
    
        <button className='w-28 h-11 p-2 bg-white rounded-lg font-bold text-right text-xs flex items-center gap-4 border-black border'>
            <span className='bg-white inline-block rounded-full w-8 h-8'>                            
                <svg className='stroke-current text-black w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
        </span>
            Edit    
        </button> 
   
    <button className='w-28 h-11 p-2 bg-white rounded-lg font-bold text-right text-xs flex items-center gap-4 border-black border'>                    
            <span className='inline-block rounded-full w-8 h-8'>
                <svg className='stroke-current text-red-600 w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </span>
            Delete                   
        </button> 
    </div>
    </div>
  )
}
