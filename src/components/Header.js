/** importing all the react dom imports */
import styled from "styled-components";

/** importing all the components */

// The JSX

const Header = (props) => {
  return (
    <Nav>
      <Logo>
            <img src="/images/logo.svg" alt="disney logo"></img>
      </Logo>
      <NavMenu>
          <a href="/home">
              <img src="/images/home-icon.svg" alt="home"></img>
              <span>Home</span>
          </a>
          
      </NavMenu>
    </Nav>
  );
};

/** styled components */

// styling the Nav

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: index 3;
  
  
`;

//styling the disney logo

const Logo = styled.a`
    padding:0;
    width:80px;
    height:34px;    
    max-height:70px;
    display:inline-block;
    img{
        display:block;
        width:100%;
    }


`

// stlying menu

const NavMenu = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    height:100%;
    margin:0px;
    padding:0px;
    position:relative;
    margin-right:auto;
    margin-left:25px;
    a{
        display:flex;
        align-items:center;
        padding: 0  12px;

        img{
            height:20px;
            min-width:20px;
            width:20px;
            z-index:auto;
        }
        span{
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.80;
            padding:2px 0px;
            white-space: nowrap;
            position:relative;
        }
       
    }
    
    /* @media (max-width: 768px) {
        display:none;
    } */
`;

export default Header;
