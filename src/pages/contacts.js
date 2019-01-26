import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import config from '../config'

const { socialLinks } = config

const disqusShortname = 'amadev'
const disqusConfig = {
  identifier: 'contacts',
  title: 'contacts',
}

const Contacts = () => (
  <div className="contactsPage">
    <h1>Contacts</h1>
    <p>
      Welcome to Amadevs blog! Here you can find some explanation and accompanying code for YouTube video tutorials.
      Feel free to leave your feedback or share ideas for future videos.
    </p>
    <h2>Links:</h2>
    <ul>
      <li>
        <a href={socialLinks[0].link} rel="noreferrer">YouTube</a>
      </li>
      <li>
        <a href={socialLinks[1].link} rel="noreferrer">GitHub</a>
      </li>
    </ul>
    <DiscussionEmbed
      shortname={disqusShortname}
      config={disqusConfig}
    />
  </div>
)

export default Contacts
