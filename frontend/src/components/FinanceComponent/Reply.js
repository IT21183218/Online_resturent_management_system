import React, {useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
const user = "Naveen";

export default function Reply(props) {
  
  const [itemList ,setItemList]=useState([])
  const[name,setName] = useState("hoss")
  const[description,setDescription] = useState("")
  const[position,setPosition] = useState("2")
  const[userPhoto,setUserPhoto] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s")

  const navigate = useNavigate()
  // const refresher = (e)=>navigate("/Finance/Inquaries")
  const goBack = (e)=>navigate("/Finance/Inquary/reply")
  const cancel = (e)=>navigate("/Finance/Inquaries")

  function refreshPage() {
    window.location.reload(false);
  }


  const det = props.details;
  return (
    <div>
        <div className="h-96 px-10 w-full overflow-auto">

          {
            det.map((item, idc)=>{

              if(item.name === user){
                return(
                  <div className="flex w-full flex-row-reverse items-center gap-8 mb-10">
                    <div className="w-fit">
                      <div className="h-16 w-16 rounded-full bg-blue-950">
                        <img className='h-16 w-16 rounded-full object-cover' src={item.userPhoto} alt="item.profile" />
                      </div>
                    </div>

                    <div className="max-w-xl">
                      <div className="text-right text-sm font-semibold">You</div>
                      <div className="rounded-md border-2 border-black px-5 py-2 text-left text-sm">{item.description}</div>
                    </div>
                  </div>
                )
              }else{
                return(
                  <div className="mb-10 flex w-full flex-row items-center gap-8">
                    <div className="w-fit">
                      <div className="h-16 w-16 rounded-full bg-blue-950">
                        <img className='h-16 w-16 rounded-full object-cover' src={item.userPhoto} alt="item.profile" />
                      </div>
                    </div>
                    <div className="max-w-xl">
                      <div className="text-left text-sm font-semibold">{item.name}</div>
                      <div className="rounded-md border-2 border-black px-5 py-2 text-left text-sm">{item.description}</div>
                    </div>
                  </div>
                )
              }
              
            })
          }

        </div>
        <form onSubmit={(e) => {
           e.preventDefault()
           const newProduct = { 
              name:user,
              description:description,
              position:position,
              userPhoto:userPhoto
           }
           axios.post("http://localhost:8000/inquaries/post",newProduct).then((response)=>{
              setItemList([])
              refreshPage();
              // goBack();
           })
        }}>

        <div className="m-auto mb-4 w-96 rounded-b-lg bg-white px-4 py-2">
          <label htmlFor="editor" className="float-left mb-2 block text-sm font-bold text-gray-700">You</label>
          <textarea onChange={(e)=> {
            setDescription(e.target.value);
          }} id="editor" rows="3" className="block w-96 border border-black bg-white p-2 text-sm text-gray-800 focus:ring-0" placeholder="Type your reply here..." required></textarea>
        </div>

        <div className="mb-10 flex w-96 flex-row m-auto gap-48 p-4">
          <div>
            <button type="button" onClick={
              (e) =>{
                cancel();
              }
            } className="h-10 w-24 rounded-xl bg-blue-700 text-center text-lg font-semibold text-white">Cancel</button>
          </div>
          <div>
            
            <button type="submit" className="h-10 w-24 rounded-xl bg-red-700 text-center text-lg font-semibold text-white">Reply</button>
            
          </div>
        </div>
        </form>
    </div>
  )
}
