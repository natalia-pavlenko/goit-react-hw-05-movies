import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
padding: 20px 0;
display: flex;
gap: 20px;
font-size: 20px;
border-bottom: 1px solid #030303;
`;

export const HeaderNavLink = styled(NavLink)`
color: #030303;
font-size:16px;

&.active{
 color: #orange
 border-bottom: 1px solid orange;   
}
`;
export const Container = styled.div`
display: flex;
flex-direction: column;
width: 1200px;
margin: 0 auto;
`;

export const HeaderNav = styled.nav`
display: flex;
gap: 20px;

 `;