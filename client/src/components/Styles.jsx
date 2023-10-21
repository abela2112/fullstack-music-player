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
  
  &:hover {
    transform: translateY(-10%);
  }
`;

export const Heading = styled.h1`
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
display: flex;
flex-direction: column;
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

export const profile = styled.img`

`
export const Span = styled.span`
  ${space}
  ${position}
    ${color}
    ${border}
    ${space}
    
    ${typography}
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
    background-color:'white';
  border-radius:'10px';
  max-width: 50rem;
  padding: 2rem;
  border: 0;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;

  &::backdrop {
    background: hsl(0 0% 0% / 50%);
  }
`

export const Box = styled("div")(
  {
    display: "flex",
    position: 'relative'
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
const SideBarContainer = styled.div`
    
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

export const Title = styled.h2`
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
  font-size: 20px;
  border-radius: 10px;
  width:100%;
  min-height: 30px;
  padding: 10px 5px 10px 20px;
  letter-spacing: .5px;
  font-family: 'Poppins, sans-serif';

  border: 2px solid #b0b0ac;;
  /* border-bottom: 2px solid #f0f0f0;  */
  &:valid {
    border-color: #636364; }
  &:focus {
    outline: none;
    border-color: #b0b0ac; }
 
  

  

  /* :focus {
    color: black;
    border: 2px solid black;
  } */
  ::placeholder {
    text-transform: capitalize;
  }
  @media screen and (min-width: 40em){
    font-size: 1.3rem;
    padding: 16px;
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
export const FlexNavLink = styled(NavLink)(
  {
    position: 'relative',
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    textDecoration: "none",
    textTransform: "capitalize",
    fontFamily: "Nunito",
    fontSize: "1.2rem",
    fontWeight: "500",
    padding: '0.2rem 1rem',
    color: "#2B2D42",
    "&:hover": {
      color: "#EF233C",
    },
    "&active": {
      color: "#fff"
    }
  },

  flexbox,
  space,
  fontSize,
  fontWeight,
  display
);
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

    // "&:active": {
    //   color: "white",
    //   
    // },


  })

export const Typography = styled.p`
  ${fontWeight}
  ${fontSize}
    ${space}
    ${typography}
    ${color}
`;
export const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
})
export const Label = styled.label`
  font-size: 22px;
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
  outline: none;
  border: 1px solid gray;
  border-radius: 80px;
  font-size: 1.1rem;
  position: relative;
  :focus {
    color: black;
    border: 2px solid black;
  }
  ::placeholder {
    text-transform: capitalize;
  }
  width: auto;
`;
