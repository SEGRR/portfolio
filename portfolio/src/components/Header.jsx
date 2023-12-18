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
          <p> Hello, I'm  Shaikh Sufiyan, an Engineer with a passion for Software Development . With a blend of 6 years of experience and a commitment to write high quality code, I thrive in web development and programming in general.</p>
        </div>
        </div>
      </div>
    );

}