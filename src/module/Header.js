import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav= styled.nav`
 background: pink;
 text-align: center;
`
const Ul= styled.ul`
 display: flex;
`
const Li= styled.li`
 list-style: none;
 text-decoration: none;
 margin:30px;



`
const Header =()=>{
    return(
    <>
    <Nav>
        <Ul  className="container">
            <Li><Link to="/">DashboardPage</Link></Li>
            <Li><Link to="/about">AboutUsPage</Link></Li>
            <Li><Link to="/contact">Contact</Link></Li>

        </Ul>
    </Nav>
</>
    );
}
export default Header;