function NavbarTest() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px 10px" }}>
      
      <ul>

        <li style={{display:"inline", margin:"1rem"}}><a style={{textDecoration: "none", color: "inherit"}} href="home">Home</a></li>
        <li style={{display: "inline", margin:"1rem"}}><a style={{textDecoration: "none", color: "inherit"}} href="contact">Contact</a></li>
        <li style={{display: "inline", margin:"1rem"}}><a style={{textDecoration: "none", color: "inherit"}} href="services">Services</a></li>
        <li style={{display: "inline", margin:"1rem"}}><a style={{textDecoration: "none", color: "inherit"}}  href="about">About</a></li>
        
      </ul>
    </nav>
    </div>
  );
}

export default NavbarTest;