import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {
  background,
  border,
  color,
  display,
  flex,
  flexbox,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  grid,
  layout,
  opacity,
  overflow,
  position,
  shadow,
  space,
  textAlign,
  textStyle,
  typography,
  variant,

  width,
} from "styled-system";

export const P = styled.p`
  ${space}
  ${position}
    ${color}
    ${border}
    ${textStyle}
    ${typography}
    ${fontStyle}
    ${fontSize}
    text-decoration: none;
  transition: all 0.5s ease-in-out;
  transform: translateY(0);
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  &:hover {
    transform: translateY(-10%);
  }
`;

export const Heading = styled.span`
${typography}
  ${textAlign}
${color}
  ${fontSize}
  ${fontFamily}
  font-size: 36px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`;
export const Form = styled.form`
  ${space}
  ${position}
${flex}
${color}
${border}
${typography}
${fontStyle}
${fontSize}
${width}
${flexbox}
display: flex;
flex-direction: column;
 gap:1rem;
`;

export const slideUp = keyframes`
 from { opacity: 0;
     transform: translateY(25%); }
 to { opacity: 1;
  transform: none;} 
`;

export const SongCardBox = styled("div")(
  {
    display: "flex",
    animation: `${slideUp} 3s ease-in-out`,
  },
  flexbox,
  space,

  color,
  border,
  layout,
  position,
  shadow,
  background,
  opacity,
  width
);
export const Img = styled.img`
  ${space}
  ${position} 
  ${layout}
  ${border}
  object-fit: cover;
  
`;
export const ActionButton = styled.button`
                    color: #fff;
                    border: none;
                    width:100%;
                    font-size:16px;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    padding:8px 12px;
                    ${color}
                    ${space}
`
export const OutlineButton = styled.button`
                    color: ${({ theme }) => theme.colors.primaryColor};
                    background-color: transparent;

                    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
                    width:100%;
                    font-size:16px;
                    font-weight: 400;
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    padding:8px 12px;
                    ${color}
                     ${space}
`
export const profile = styled.img`

`
export const Span = styled.span`
  ${space}
  ${position}
    ${color}
    ${border}
    ${space}
    
    ${typography}
     font-family: 'Poppins', sans-serif;

`;

export const Dialog = styled.dialog`
    ${space}
    ${position}
    ${color}
    ${border}
    ${space}
    ${flexbox}
    ${display}
    ${typography}
    ${overflow}
    ${width}
  position: relative;
  background-color:'white';
  border-radius:'10px';
  max-width: 50rem;
  padding: 2rem;
  border: 0;
  border-radius: 0.5rem;
  /* height: 100%;
  width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 30;
  box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
 
  &::backdrop {
    background: hsl(0 0% 0% / 50%) !important;
  }
`

export const Box = styled("div")(
  {
    display: "flex",
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  flexbox,
  space,
  color,
  border,
  layout,
  position,
  shadow,
  background,
  opacity,
  width,
  overflow
);
export const SideBarContainer = styled.div`

  ${flexbox}
  ${space}
  ${color}
  ${border}
  ${layout}
  ${position}
  ${shadow}
  ${background}
  ${opacity}
  ${width}
  ${overflow}
  display: flex;
  position: relative;
  width: ${props => props.close ? "88px" : "250px"};
transition: all 0.5s ease;
`
export const AnimationBox = styled("div")(
  {
    display: "flex",
    transition: 'all',
    animation: `${slideUp} 4s ease-in-out`,
  },

  flexbox,
  space,
  color,
  border,
  layout,
  position,
  shadow,
  background,
  opacity,
  width
);

const lightTheme = {
  background: "#FFFFFF",
  color: "#000000",
};

const darkTheme = {
  background: "#333333",
  color: "#FFFFFF",
};

export const Title = styled.span`
  ${typography}
  ${fontSize}
  ${fontWeight}

`;

export const Input = styled.input`
  ${space}
  ${border}
  ${layout}
  ${typography}
  ${color}
  background-color: transparent;
  font-size: 16px;
  /* border-radius: 10px; */
  width:100%;
  min-height: 30px;
  padding: 10px 5px 10px 20px;
  letter-spacing: .5px;
  font-family: 'Poppins, sans-serif';
  color: rgba(0, 0, 0,0.75);
  /* border: 1px solid #64636324; */
  border:none;
  border-bottom: 1px solid rgb(0,0,0);
  &:valid {
    border-color: #000; }
  &:focus {
    outline: none;
    border-color: #000; }
 
  

  

  /* :focus {
    color: black;
    border: 2px solid black;
  } */
  ::placeholder {
    /* text-transform: capitalize; */
  }
  @media screen and (min-width: 40em){
    font-size: 1.3rem;
    padding: 10px;
  }
  
`;
export const Button = styled.button`
    ${space}
    ${border}
    ${layout}
    ${typography}
    ${color}
    ${position}
    ${display}
    ${flexbox}
   
  display: flex;
  
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
export const GridBox = styled.div`
  display: grid;
  grid-template-columns:50% 50%;
  gap: 1rem;
  width:100%;
  height:100%;
  ${space}
  ${color}
  ${border}
  ${layout}
  ${position}
  ${shadow}
  ${background}
  ${opacity}
  ${width}
  ${overflow}

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr; // Change the number of columns for smaller screens if needed
  }
`;

export const GridContainer = styled.div`
  display: grid;
  ${grid}
  ${layout}
  ${space}

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr; // Change the number of columns for smaller screens if needed
  }

  @media screen and (min-width: 800px) and (max-width:1200px) {
    grid-template-columns:60% 40%;// Change the number of columns for smaller screens if needed
  }
  @media screen and  (min-width:1200px) {
    grid-template-columns: 60% 40%; // Change the number of columns for smaller screens if needed
  }
`
// export const FlexNavLink = styled.NavLink(
//   {
//     position: 'relative',
//     display: "flex",
//     // justifyContent: "start",
//     alignItems: "center",
//     textDecoration: "none",
//     height: "50px",
//     marginTop: "10px",
//     fontSize: "16px",
//     fontWeight: "500",
//     borderRadius: "5px",
//     color: "#707070",
//     transition: "all 0.3s ease",
//     "&:hover": {
//       backgroundColor: "primaryColor",
//       color: "sideBarColor",
//     },
//     "&active": {
//       color: "#fff"
//     }
//   },

//   flexbox,
//   space,
//   fontSize,
//   fontWeight,
//   display,

// );
// FlexNavLink.defaultProps = {
//   color: props => props.theme.primaryColor
// }
export const FlexNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  /* justify-ontent: center; */
  align-items: center;
  text-decoration: none;
  height: 50px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  color: #707070;
  transition: all 0.3s ease;
 &:hover {
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.sideBarColor};
}

`;
export const List = styled.li`
list-style: none;
  position: relative;
  display: flex;
  /* justify-ontent: center; */
  align-items: center;
  text-decoration: none;
  height: 50px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  color: #707070;
  transition: all 0.3s ease;
 &:hover {
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.sideBarColor};
}


`

export const NavLinkButton = styled(NavLink)(
  {
    fontSize: '1.2rem',
    textDecoration: "none",
    padding: '0.5rem 1rem',
    margin: '0.5rem 1.2rem',
    fontFamily: "Nunito",
    backgroundColor: 'rgba(204,204,204,60%)',
    color: '#464646',
    borderRadius: '10px',
    width: '300px',
    "&:hover": {
      color: "white",
    },

    flexbox,
    space,
    fontWeight,
    display,

    "&:active": {
      color: "white",

    },


  })

export const Typography = styled.span`
  ${fontWeight}
  ${fontSize}
    ${space}
    ${typography}
    ${color}
    transition: all 0.3s ease;
    white-space: nowrap;
opacity: ${ props => props.close ? 0 : 1};
color: ${({ theme }) => theme.colors.textColor};

`;
export const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
})
export const Label = styled.label`
font-size: 16px;
  font-weight: 400;
  color: #2a2826;
  text-align: start;
  font-family: 'Poppins','sans-serif';
  text-transform: capitalize;
  padding: 0.5rem;
  ${space}
  @media screen and (max-width: 1000px) {
    font-size:18px; // Change the number of columns for smaller screens if needed
  }

`;
// export const Span = styled.span`
// ${fontSize}
// ${fontWeight}
// ${color}
// ${layout}
// ${space}
// `

export const Search = styled.input`
  ${space}
  ${border}
  ${layout}
  ${typography}
  ${color}
  border: none;
  outline: none;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  position: relative;
  :focus {
    color: black;
   
  }
  ::placeholder {
    text-transform: capitalize;
  }
  
`;
