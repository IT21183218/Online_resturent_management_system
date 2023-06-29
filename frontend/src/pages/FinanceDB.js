import React from 'react'
import Background from '../components/Template/Background'
import FinanceDashboard from '../components/FinanceDashboard'

export default function FinanceDB() {
  return (
    <div>
        <Background contents = {<FinanceDashboard/>}/>        
    </div>
  )
}
