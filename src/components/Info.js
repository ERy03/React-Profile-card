import React from "react"

function ContactButtons(){
  return (
    <div className="info-button-container">
      <button><i class="fas fa-envelope"></i>Email</button>
      <button><i class="fab fa-linkedin"></i>LinkedIn</button>
    </div>
  )
}


export default function Info() {
  return (
  <div className="info">
    {/* <img src="http://source.unsplash.com/random/317x317/?portrait" className="portrait-img" alt="portrait" /> */}
    <h1>John / Jane Doe</h1>
    <p>Frontend Developer</p>
    <a href="https://ryotaenoki.me/" rel="noreferrer" target="_blank">ryotaenoki.me</a>
    < ContactButtons />
  </div>
  )
}
