import styled from "styled-components";

import { media } from "../../utils";

const darkPurple = '#190335';
const lightPurple = '#F3F2F4';
const white = '#FFF';

/**
 * Messages
 */
export const MessagesWrapper = styled.section`
  display: flex;
  justify-content: stretch;
  height: 100vh;
  overflow: hidden;
`;

export const FolderSelection = styled.nav`
  width: 50px;
  background-color: ${darkPurple};
  padding-top: 5px;
  padding-left: 17px;
  box-sizing: border-box;
  overflow: auto;
  direction: rtl;
`

export const FolderTab = styled.div`
  background-color: ${props => props.selected ? lightPurple : 'transparent'};
  color: ${props => props.selected ? darkPurple : lightPurple }
  flex-shrink: 0;
  padding: 10px;
  border-bottom: ${lightPurple} solid 1px
  padding: 5px;
  padding-right: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  direction: ltr;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

export const FolderSelectionLabel = styled.span`
  font-size: 12px;
  text-overflow: ellipsis;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`


/**
 * Message Folder
 */
export const ChatSelector = styled.nav`
  background-color: ${lightPurple};
  width: 300px;
  flex-shrink: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const ChatPane = styled.div`
  flex-grow: 6;
  flex-shrink: 0;
  min-width: 400px;
`

export const ChatHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
`

export const Logo = styled.img`
  height: 26px;
`

export const ChatList = styled.div`
  overflow: auto
`

export const SearchbarContainer = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  height: 30px;
  position: relative;
  background-color: ${white};
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding-left: 7px;
`

export const SearchTextbox = styled.input`
  background-color: transparent !important;
  border-radius: 15px !important;
  border: none !important;
  width: 100% !important;
  height: 100%;
  position: absolute !important;
  left: 0;
  top: 0;
  padding-left: 20px !important;
  margin-bottom: 10px;
`

export const ChatOptionContainer = styled.div`
  background-color: ${props => props.selected ? white : 'transparent'}
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-left: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  
`

export const ChatOptionProfileImage = styled.img`
  height: 50px;
  border-radius: 50%;
`

export const ChatOptionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
  overflow: hidden;
`

export const ChatOptionName = styled.span`

`

export const ChatOptionMessage = styled.span`
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow: hidden;
`