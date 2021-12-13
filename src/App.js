import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="../img/logo.svg" alt="logo" className="logo-img" />
        <h1>Antisocial web</h1>
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#!">Profile</a>
          </li>
          <li>
            <a href="#!">Messages</a>
          </li>
          <li>
            <a href="#!">News</a>
          </li>
          <li>
            <a href="#!">Music</a>
          </li>
        </ul>
        <ul className="nav-list">
          <a href="#!">Settings</a>
        </ul>
      </nav>
      <main className="main">
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
          alt="wallpaper"
          className="wallpaper"
        />
        <div className="profile-short-info">
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNgTAOKQDwj1QFQZ6yavofxnyj2MPw0A24w&usqp=CAU"
              alt="avatar"
              className="avatar"
            />
          </div>
          <div className="my-message">Message</div>
        </div>
        <div className="posts">
          <div className="message-post">New post</div>
          <div className="message-post">post-1</div>
          <div className="message-post">post-2</div>
        </div>
      </main>
      <footer className="footer">
        <div>Garrus-learn-react.LTD-JPG-PTU/BLR</div>
      </footer>
    </div>
  );
}

export default App;
