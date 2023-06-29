import React,{useRef} from 'react';
import ReportComp from '../components/ReportComp';
import Background from '../components/Template/Background';
import ReactToPrint from 'react-to-print';

import {GenerateReportPrint} from "./GenerateReportPrint"

export default function GenerateReport() {
  const componentRef = useRef();                                                               

    const title = "Generate report";
    const details = [
        { transactinId:"#9897864973",
          userId:"cus-93739329",
          description:"I have problem with my payment related to ..",
          profile:"https://www.leoranews.com/wp-content/uploads/2020/04/elizabeth-olsen-001.jpg",
          payment:"10000.00",
          date: "2023-04-05 11.26.00 PM"},     
    
        { transactinId:"#4747757353",
          userId:"emp-8873699",
          description:"I have problem with my payment related to ..",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnRF8HuMKwukfdfI-WxhWUmzjS65ztmm5lw&usqp=CAU",
          payment:"980000.00",
          date: "2023-04-05 11.26.00 PM"},
    
        { transactinId:"#343567845",
          userId:"mgr-9315499",
          description:"I have problem with my payment related to ..",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSiPALjr_Buz4DjT8BlCPlSDDgt5dtuCKqAw&usqp=CAU",
          payment:"490000.00",
          date: "2023-04-05 11.26.00 PM"},
    
        { transactinId:"#6478636873",
          userId:"mgr-9645499",
          description:"I have problem with my payment related to ..",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30rhaS9uhhdwr0Y81t8f-SLSS5l7xk_LLlKPBPChxsUnH9UGUseIWx92B5QLxT42Ekg0&usqp=CAU",
          payment:"-780000.00",
          date: "2023-04-05 11.26.00 PM"},

          { transactinId:"#6478636873",
          userId:"mgr-9645499",
          description:"I have problem with my payment related to ..",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30rhaS9uhhdwr0Y81t8f-SLSS5l7xk_LLlKPBPChxsUnH9UGUseIWx92B5QLxT42Ekg0&usqp=CAU",
          payment:"-80000.00",
          date: "2023-04-05 11.26.00 PM"}, 

          { transactinId:"#6478636873",
          userId:"mgr-9645499",
          description:"I have problem with my payment related to ..",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30rhaS9uhhdwr0Y81t8f-SLSS5l7xk_LLlKPBPChxsUnH9UGUseIWx92B5QLxT42Ekg0&usqp=CAU",
          payment:"780000.00",
          date: "2023-04-05 11.26.00 PM"}, 

          { transactinId:"#6478636873",
          userId:"mgr-9645499",
          description:"I have problem with my payment related to ..",
          profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30rhaS9uhhdwr0Y81t8f-SLSS5l7xk_LLlKPBPChxsUnH9UGUseIWx92B5QLxT42Ekg0&usqp=CAU",
          payment:"780000.00",
          date: "2023-04-05 11.26.00 PM"},        
      ]; 
      <div>
        <button className="my-button">Click Me!</button>

      </div>
       
      
    return (
      <div>

<ReactToPrint

trigger={() => <button type='submit' >Print</button>}

content={() => componentRef.current} ></ReactToPrint>
          
          <GenerateReportPrint ref = {componentRef}>
            

          <Background contents = {
              <div className='flex flex-col items-center gap-10 p-10'>   
                    <ReportComp details={details}/>   
              </div>            
          } title = {title}/>
          </GenerateReportPrint>
      </div>
      
    )
    
  }
  