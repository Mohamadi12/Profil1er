import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (

        <div className='card'>
        <img className="card-image" src='https://upload.wikimedia.org/wikipedia/commons/d/d7/Ibrahim_Traor%C3%A9_-_2023_%28cropped%29.png' alt="photo de profil"></img>
        <h2 className="card-title">Nana Mohamadi</h2>
        <p className="card-text">Etudiant</p>
        <h5 className="card-text">Burkinabé && GoMyCode</h5>
        <hr/>
        <h3>{this.state.timer}</h3>
        </div>
        
      )
  }
}

export default Profile
