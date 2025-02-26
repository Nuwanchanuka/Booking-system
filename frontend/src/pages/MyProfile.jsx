import React,{useState} from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

 const [userData, setUserData] = useState({
  name:"Edward Vincent",
  image:assets.profile_pic,
  email:'nuwanchanuka@gmail.com',
  phone :'o717511510',
  address:{
    line1:'54709 willms station',
    line2:'Suite 350',
  },
  gendr:'Male',
  dob:'1996-02-02',


 })
 const [isEdit,setIsEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} alt=""/>
      {
        isEdit
        ? <input type="type" value={userData.name} onChange={e => setUserData(pre => ({...prev,name:e.target.value}))}/>
        :<p>{userData.name}</p>
      }
    </div>
  )
}

export default MyProfile
