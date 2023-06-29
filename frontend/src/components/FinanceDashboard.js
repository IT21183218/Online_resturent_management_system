import React, { useState } from 'react'
import styles from './FinanceDashboard.module.scss'
import Barchart from './Barchart'
import{UserData} from './data'
import { Link } from 'react-router-dom'


export default function FinanceDashboard() {
 // eslint-disable-next-line
  const[userData, setUserData] = useState({  

    labels: UserData.map((data) => data.date) ,

    datasets:[{
      label: "Incomes",
      data: UserData.map((data) => data.income),
      backgroundColor: ["blue"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
     
    },
    {
      label: "Expences",
      data: UserData.map((data) => data.expences),
      backgroundColor: ["red"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
    }
  ]

  });
  

  return (

    <div className={styles.FDOutterLayer}>   

      <div className={styles.contentWrapper}>

        <div className={styles.BarchartWrapper}>

          <div className={styles.Barchart}>
            <Barchart chartData={userData}/>
          </div>

        </div>

        <div className={styles.buttonWrapper}>
          <Link to="/Finance/PendingRequest"><button className={styles.one+' '+ styles.button}>Pending Request</button></Link>
          <Link to="/Finance/Inquaries"><button className={styles.button}>View Inquiries</button></Link>
          <Link to="/Finance/GenerateReport"><button className={styles.button}>GenerateReports</button></Link>
          <Link to="/Finance/Transaction"><button className={styles.button}>Transactions</button></Link>
        </div>
        
      </div>

    </div>
  )
}








