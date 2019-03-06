import React from "react"
import { Link } from "gatsby"
import "../components/uikit.min.css"
import "../components/layout.css"
import Speaker from "../components/speaker"

import SEO from "../components/seo"

const videoURL= 'https://player.vimeo.com/video/318806849';

const Putty = {
  name: "Putty Putman",
  bio: `Putty started the School of Kingdom Ministry, and oversees
  the healing, prophetic, deliverance, and evangelism ministries at The
  Vineyard Church of Central Illinois. Putty was pursuing a doctoral
  degree in theoretical physics at the University of Illinois when God
  thrust him headfirst into the supernatural. After a dramatic supernatural
  encounter in China, Putty began to gather and train people in power ministry
  and pursuing an intimate relationship with God. What began with four people
  as a small group grew to multiple groups, then the first campus of the School
  of Kingdom Ministry, and now multiple locations around the world. He is a
  gifted communicator with a powerful message of identity.`
}

const Kyle = {
  name: "Kyle Howard",
  bio: `Kyle’s deepest passions are to see people encounter the
  loving presence of the Father and for people to walk in the fullness of who
  they were made to be as sons and daughters of the living God. Kyle began
  leading worship over 10 years ago in his youth ministry at the age of 14.
  He is featured on worship albums for the National Vineyard and VWorship.
  Kyle now serves on staff at The Vineyard Church of Central Illinois as
  Worship Pastor. When he isn’t leading worship, Kyle loves to play
  basketball, golf, and hang out with friends.`
}

const Leah = {
  name: "Leah Wenger",
  bio: `Leah is a born and raised Vineyard kid and has served as a pastor for
  the last 11 years at The Vineyard Church of Central IL. From youth ministry
  to planting a multi-site church- she's experienced it all. Leah is a graduate
  of the University of Illinois, Vineyard Leadership Institute and The School of
  Kingdom Ministry and is most passionate about creating a healthy stewardship
  culture and raising up leaders of leaders.  She has been married to her husband
  Ben for 13 years and has three awesome (exhausting) kids; Cohen (8), Claire (6)
  and Gia (4).  In her spare time, she loves to preach, play the guitar, travel
  and drink all.the.coffee.`
}

const theme = {
  backgroundColor: '#f2f4f4',
  color: '#222222',
}

const confTitle = {
  color: '#222222',
  textTransform: 'uppercase',
  fontWeight: '800'
}

const speakerTitle = {
  color: '#f2f4f4',
  textShadow:`
      3px 3px 0 #222222,
      -3px 3px 0 #222222,
      -3px -3px 0 #222222,
      3px -3px 0 #222222
  `,
  textTransform: 'uppercase',
  fontWeight: '800'
}

const promoVideo = {

}

const About = () => (
  <div style={theme}>
    <SEO title="About" />
    <div className="uk-container">
      <h1 className="uk-heading-hero" style={confTitle}>Sons & Daughters</h1>
      <div className="uk-grid uk-margin-large-bottom">
        <div className="uk-width-auto@m">
          <iframe className="promo-video"
            src={videoURL} title="Sons and Daughters Promo"
            frameborder="0" width="640" height="360" webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
        <div className="uk-width-expand@m">
          <p>About</p>
        </div>
      </div>


      <h1 className="uk-heading-hero" style={speakerTitle}>Speakers</h1>
      <Speaker
        speakerName={Putty.name}
        speakerBio={Putty.bio}
        speakerImg="https://images.unsplash.com/photo-1551742911-f6f80ef2b602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80"
      />
      <Speaker
        speakerName={Leah.name}
        speakerBio={Leah.bio}
        speakerImg="https://images.unsplash.com/photo-1551742911-f6f80ef2b602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80"
      />
      <Speaker
        speakerName={Kyle.name}
        speakerBio={Kyle.bio}
        speakerImg="https://images.unsplash.com/photo-1551742911-f6f80ef2b602?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80"
      />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </div>
)

export default About
