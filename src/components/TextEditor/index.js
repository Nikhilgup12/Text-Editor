import React, {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  TextEditormainContainer,
  TextEditorContainer,
  TextEditorImage,
  TextEditorHeading,
  TextEditorImageContainer,
  TextAreaContainer,
  TextArea,
  TextIconContainer,
  BoldButton,
  TextListButton,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  toggleBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  toggleItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <TextEditormainContainer>
        <TextEditorContainer>
          <TextEditorImageContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImageContainer>
          <TextAreaContainer>
            <TextIconContainer>
              <TextListButton>
                <BoldButton
                  onClick={this.toggleBold}
                  data-testid="bold"
                  aria-label="Bold"
                  isActive={isBold}
                >
                  <VscBold color={isBold ? '#faff00' : '#f1f5f9'} size={20} />
                </BoldButton>
              </TextListButton>
              <li>
                <BoldButton
                  onClick={this.toggleItalic}
                  data-testid="italic"
                  aria-label="Italic"
                  isActive={isItalic}
                >
                  <GoItalic
                    color={isItalic ? '#faff00' : '#f1f5f9'}
                    size={20}
                  />
                </BoldButton>
              </li>
              <li>
                <BoldButton
                  onClick={this.toggleUnderline}
                  data-testid="underline"
                  aria-label="Underline"
                  isActive={isUnderline}
                >
                  <AiOutlineUnderline
                    color={isUnderline ? '#faff00' : '#f1f5f9'}
                    size={20}
                  />
                </BoldButton>
              </li>
            </TextIconContainer>
            <TextArea
              rows={20}
              cols={40}
              bold={isBold}
              italic={isItalic}
              underline={isUnderline}
            />
          </TextAreaContainer>
        </TextEditorContainer>
      </TextEditormainContainer>
    )
  }
}

export default TextEditor
