import React from 'react'
import Background from '../components/Template/Background'
import UpdateTranc from '../components/FinanceComponent/UpdateTranc'

export default function UpdateTransactio() {
    const title = "Update Transaction";

    const details = 
      { name:"Rasangi Nanayakkara",
        transactinId:"T9897864973",
        description:"I have problem with my payment related to ..",
        profile:"https://www.leoranews.com/wp-content/uploads/2020/04/elizabeth-olsen-001.jpg",
        amount:"10000.00",
        date: "2023-04-05 11.26.00 PM"}; 


  return (
    <div>
        <Background contents={<UpdateTranc transactionID={details.transactinId} date={details.date} amount={details.amount} desciption={details.description} profile={details.profile}/>}
        title={title}/>
    </div>
  )
}
