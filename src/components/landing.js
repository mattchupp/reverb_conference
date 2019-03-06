import { Link } from "gatsby"
import React from "react"

import "./video.css"


const videoURL= 'https://player.vimeo.com/video/318806849?muted=1&autoplay=1&loop=1';
const registerURL= 'https://thevineyardchurch.ccbchurch.com/goto/forms/915/responses/new';


const Landing = () => (

  <div className="vimeo-wrapper">
    <iframe
      src={videoURL} title="Sons and Daughters Promo"
      frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
    </iframe>
    <div
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
          pointerEvents: 'all'
        }}
      >
      <div className="landing-links">
        <a style={{color: 'white', fontSize: '1.2rem'}} className="uk-button uk-button-default uk-margin-right uk-button-large" href={registerURL}>Early-Bird</a>
        <Link style={{color: 'white', fontSize: '1.2rem'}} className="uk-button uk-button-default uk-button-large" to='/about'>Learn More</Link>
      </div>
    </div>
  </div>

)

export default Landing
