import styled from 'styled-components';

export const NavigationWrapp = styled.div`
  margin-top: 10px;
  margin-top: 30px;
  margin-left: 100px;
`;
export const NavLink = styled.ul`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: 100px;
  padding: 10px 0;
  border: 1px solid var(--brand-color);
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px var(--brand-color);
`;

// .navLink:not(:first-child) {
//   margin-left: 20px;
// }

// .navLink:hover,
// .navLink:focus {
//   box-shadow: inset 0px 0px 7px 1px var(--brand-color);
//   box-shadow: inset 0px 0px 5px 1px var(--brand-color);
