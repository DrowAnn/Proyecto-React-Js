import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="headerDiv">
        <div className="logoRD">RD</div>
        <div className="keywordsReference">
          <a href="https://www.google.com" target="_blank">
            Home
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            Contact us
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
