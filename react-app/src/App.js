import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="../img/logo.svg" alt="logo" />
        <h1>Antisocial web</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
        </ul>
        <ul>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="main">
        <img src="../img/wallpaper.jpg" alt="wallpaper" className="wallpaper" />
        <div className="profile-short-info"></div>
        <div className="posts"></div>
      </main>
      <footer className="footer">
        <div>Garrus-learn-react.LTD-JPG-PTU/BLR</div>
      </footer>
    </div>
  );
}

export default App;
