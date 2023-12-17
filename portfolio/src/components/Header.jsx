import profile_pic from './img/profile pic.jpg'

export default function Header(){

    return (
        <div className="header-container">
        <div className="welcome-section">
          <h1>Welcome</h1>
        </div>
        <div className="profile-section">
        <div className="left-section">
          <img
            className="profile-pic"
            src={profile_pic}
            alt="Your Name"
          />
          <h1>Sufiyan Shaikh Sajid</h1>
        </div>
        <div className="right-section">
          <p>Your introduction goes here...</p>
        </div>
        </div>
      </div>
    );

}