import React from 'react'

export default function ApprovelTab(props) {

    const details = {
        name: props.userName,
        profile: props.profile,
        description:props.description,
        payment:props.payment,
    };       

  return (
    <div>
        <div className='w-xl h-40 px-6 py-12 bg-backGrnd border-black border rounded-2xl flex flex-row items-center gap-10'>

            <div className='w-24 h-24 bg-purple-500 border-black border rounded-full'>
                <img className='w-24 h-24 rounded-full object-cover ' src={details.profile} alt={details.profile}/>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='text-left px-2 py-1'>
                    <span className='font-bold text-left text-base'>{details.name}</span>
                </div>
                <div className='text-left px-2 py-1 text-sm font-semibold flex flex-row items-center gap-5'>
                    <span>Request payment of : </span><span className='bg-white rounded-3xl px-2 py-1'>{details.payment}</span>
                </div>
                <div className='w-96 h-12 px-2 py-1 overflow-x-hidden text-left text-sm font-normal'>
                    <span>{details.description}</span>
                </div>
            </div>

            <div className='flex flex-row gap-4 '>
                <button className='w-28 h-11 p-2 bg-white rounded-lg font-bold text-right text-xs flex items-center gap-4 border-black border'>
                    <span className='bg-green-600 inline-block rounded-full w-8 h-8'>
                        <svg className='stroke-current text-white w-8 h-8'  xmlns="http://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                   </span>
                    Approve    
                </button>            
                <button className='w-28 h-11 p-2 bg-white rounded-lg font-bold text-right text-xs flex items-center gap-4 border-black border'>                    
                    <span className='bg-red-500 inline-block rounded-full w-8 h-8'>
                        <svg className='stroke-current text-white w-8 h-8 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                    </span>
                    Decline                   
                </button>                
            </div>

        </div>       

    </div>
  )
}