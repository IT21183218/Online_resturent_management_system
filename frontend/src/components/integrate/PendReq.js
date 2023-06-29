import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Background from '../Template/Background';
import ApprovelTab from '../FinanceComponent/ApprovelTab';

const title = "pending requests";


const PendingReq = () => {

    const[preq ,setPreq] = useState([]); 


    useEffect(() => {

        const getData = () => {
            axios.get("http://localhost:8000/posts").then((res) => {
                setPreq(res.data);
                console.log(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }
        getData();        
        
    },[])


    return(
        <div>
            <Background contents = {
                <div className='flex flex-col items-center gap-10 p-10'>                  
                    {preq.map((item, idx)=>{
                        return(
                            <div key={idx++}>
                                <ApprovelTab userName={item.name} description={item.description} profile={item.userPhoto} payment = {item.amount} /> 
                            </div>
                        )  
                    })}
                </div>            
            } title = {title}/>
        </div>
    )
   

}
export default PendingReq;