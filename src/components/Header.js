function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>Inclusive Reality Lab</h1>
      <h1>in development by Yun Suen Pai, come back later!</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
