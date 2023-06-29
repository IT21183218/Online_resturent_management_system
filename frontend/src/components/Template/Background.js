import React from 'react'
import styles from './Background.module.scss'
import Image from './Pictures/Search.png'
import Logo from './Pictures/logo2.png'
import Notification from './Pictures/Notification.png'
import Menue from './DropdownMenue'
import Dashboard from './Dashboard'


export default function Background(props) {

  const user = {
    name: 'Wickramasinghe',
  }

  return (

    <div className="block max-xmd:w-928 ">

      {/* Top section of background */}
      <div className={styles.TopSection}> 

        <div className="Dashboard">
          {<Dashboard/>}
        </div> 
        
        <div className={styles.HeadingRow}>
          
        
            <img  className={styles.logo} src={Logo}  alt='Logo'/>
     
          <div className={styles.SearchBtnWrapper}>
            <input type='search' placeholder='Search...' id='search' className={styles.SearchBar}/>
            <label htmlFor='search' className={styles.SearchLbl}><img src={Image} alt='Search button'/></label>         
          </div>

          <div className={styles.LogoNotification}>            
            <img src={Notification}alt='Notification'/>
          </div> 

          <div className="absolute right-40 top-8">
            {<Menue userName ={user.name}/>}
          </div>

        </div> 

      </div> 

      {/* Make contents inside here */}
      <div className={styles.ContentSection}>
        <h1 className='text-3xl font-bold text-center uppercase p-6'>{props.title}</h1>
        {props.search}
        {props.contents}
      </div>  
 
      {/* This is bottom of Background */}
      <div className={styles.BottomSection}/>

    </div>
  )
}