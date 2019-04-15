import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ChatSelector,
  ChatPane,
  Logo,
  ChatHeader,
  SearchbarContainer,
  ChatList,
  SearchTextbox,
  ChatOptionContainer,
  ChatOptionProfileImage,
  ChatOptionTextContainer,
  ChatOptionName,
  ChatOptionMessage
} from './messages.style';

const MessageFolder = () => {

  const chats = [
    {
      chatName: 'Cool Chat',
      lastMessage: 'Well I thought that was pretty cool, if you know what I mean',
      profile: 'https://randomuser.me/api/portraits/women/60.jpg'
    },
    {
      chatName: 'Meh Chat',
      lastMessage: 'I am writing a message oh my',
      profile: 'https://randomuser.me/api/portraits/women/25.jpg',
      selected: true
    },
    {
      chatName: 'Nah Chat',
      lastMessage: 'What a cool message it is',
      profile: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    {
      chatName: 'Cool Chat',
      lastMessage: 'Well I thought that was pretty cool, if you know what I mean',
      profile: 'https://randomuser.me/api/portraits/women/60.jpg'
    },
    {
      chatName: 'Meh Chat',
      lastMessage: 'I am writing a message oh my',
      profile: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
      chatName: 'Nah Chat',
      lastMessage: 'What a cool message it is',
      profile: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    {
      chatName: 'Cool Chat',
      lastMessage: 'Well I thought that was pretty cool, if you know what I mean',
      profile: 'https://randomuser.me/api/portraits/women/60.jpg'
    },
    {
      chatName: 'Meh Chat',
      lastMessage: 'I am writing a message oh my',
      profile: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
      chatName: 'Nah Chat',
      lastMessage: 'What a cool message it is',
      profile: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
    {
      chatName: 'Cool Chat',
      lastMessage: 'Well I thought that was pretty cool, if you know what I mean',
      profile: 'https://randomuser.me/api/portraits/women/60.jpg'
    },
    {
      chatName: 'Meh Chat',
      lastMessage: 'I am writing a message oh my',
      profile: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
      chatName: 'Nah Chat',
      lastMessage: 'What a cool message it is',
      profile: 'https://randomuser.me/api/portraits/women/40.jpg'
    },
  ]


  return (
    <Fragment>
      <ChatSelector>
        <ChatHeader>
          <Logo src="/img/OchatOrig.png" />
          <FontAwesomeIcon icon="plus" />
        </ChatHeader>
        <ChatList>
          <SearchbarContainer>
            <SearchTextbox type="text" placeholder="Search chats" />
            <FontAwesomeIcon icon="search" />
          </SearchbarContainer>
          {chats.map(chat => (
            <ChatOptionContainer selected={chat.selected}>
              <ChatOptionProfileImage src={chat.profile} />
              <ChatOptionTextContainer>
                <ChatOptionName>{chat.chatName}</ChatOptionName>
                <ChatOptionMessage>{chat.lastMessage}</ChatOptionMessage>
              </ChatOptionTextContainer>
            </ChatOptionContainer>
          ))}
        </ChatList>
      </ChatSelector>
      <ChatPane>
      </ChatPane>

    </Fragment>
  );
};

export default MessageFolder;
