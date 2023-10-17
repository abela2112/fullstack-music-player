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
    text-decoration: underline;
  transition: all 0.5s ease-in-out;
  transform: translateY(0);
  cursor: pointer;
  &:hover {
    transform: translateY(-10%);
  }
`;

export const Heading = styled.h1`

  ${textAlign}
${color}
  ${fontSize}
  ${fontFamily}
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
  font-size: 1.2rem;
  border-radius: 10px;
  width: calc(100% - 30px);
  min-height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  letter-spacing: .5px;

  border: 1px solid #b0b0ac;;
  /* border-bottom: 2px solid #f0f0f0;  */
  &:valid {
    border-color: #247fcf; }
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
    width: 'auto',
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
  font-size: 1.2rem;
  font-weight: 500;
  color: #2a2826;
  text-transform: capitalize;
  padding: 0.5rem;
  ${space}
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
  :focus {
    color: black;
    border: 2px solid black;
  }
  ::placeholder {
    text-transform: capitalize;
  }
  width: auto;
`;
