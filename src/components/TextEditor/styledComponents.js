import styled from 'styled-components'

export const TextEditormainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`

export const TextEditorContainer = styled.div`
  display: flex;
  background-color: #1b1c22;
  width: 100%;
  max-width: 700px;
  padding: 20px;
`
export const TextEditorHeading = styled.h1`
  color: #ffffff;
  font-size: 15px;
`
export const TextEditorImage = styled.img`
  width: 100%;
  max-width: 200px;
  padding-top: 40px;
`
export const TextEditorImageContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextAreaContainer = styled.div`
  background-color: #334155;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  padding: 20px;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  border-width:0px;
  outline: none;
  color: #ffffff;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
export const TextIconContainer = styled.ul`
  display: flex;
  flex-wrap:wrap;
  padding-left:0px;
  list-style-type:none;
  
`
export const BoldButton = styled.button`
  background-color:transparent;
  border: 0;
  cursor: pointer;
  outline: none;

  
`
export const TextListButton = styled.li``
