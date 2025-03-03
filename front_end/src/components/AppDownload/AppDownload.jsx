import React from 'react'
import './AppDownload.css';
import {assets} from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app_download' id='app_download'>
      <p>For better experience Please Download <br />
      <span>Tasty Food</span>   App
      </p>
      <div className="app_download_platform">
            <img src={assets.play_store} alt="play-store-icon" />
            <img src={assets.app_store} alt="play-store-icon" />
      </div>
    </div>
  )
}

export default AppDownload
