import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ChatMessages,
  MessageInputArea,
  ChatTextBox,
  IndividualMessage,
  IndividualMessageImage,
  IndividualMessageText
} from './messages.style';

const Chat = () => {
  const messages = [
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'What\'s up?',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      text: 'No much. What\'s up with you all?'
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Doing okay but, I have a bit of a problem. Are you guys okay with me venting for a little bit?',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'Yeah',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      text: 'Absolutely. We\'re here for you'
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Okay, well it all started about a week ago. I was walking to work, when I saw the most beautiful puppy. And I thought that I was going to adopt him. But then I decided I\'m not really at home all that much so it wouldn\'t be a responsible thing for me to do.',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Does it sound like I made the best decision?',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'Yeah good call on your part',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'What\'s up?',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      text: 'No much. What\'s up with you all?'
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Doing okay but, I have a bit of a problem. Are you guys okay with me venting for a little bit?',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'Yeah',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      text: 'Absolutely. We\'re here for you'
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Okay, well it all started about a week ago. I was walking to work, when I saw the most beautiful puppy. And I thought that I was going to adopt him. But then I decided I\'m not really at home all that much so it wouldn\'t be a responsible thing for me to do.',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Does it sound like I made the best decision?',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'Yeah good call on your part',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'What\'s up?',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      text: 'No much. What\'s up with you all?'
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Doing okay but, I have a bit of a problem. Are you guys okay with me venting for a little bit?',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'Yeah',
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/25.jpg',
      text: 'Absolutely. We\'re here for you'
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Okay, well it all started about a week ago. I was walking to work, when I saw the most beautiful puppy. And I thought that I was going to adopt him. But then I decided I\'m not really at home all that much so it wouldn\'t be a responsible thing for me to do.',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/40.jpg',
      text: 'Does it sound like I made the best decision?',
      me: true
    },
    {
      photo: 'https://randomuser.me/api/portraits/women/60.jpg', 
      text: 'Yeah good call on your part',
    },
  ]

  return (
    <Fragment>
      <ChatMessages>
        {messages.map((message, id) => (
          <IndividualMessage me={message.me} key={id}>
            <IndividualMessageImage src={message.photo} />
            <IndividualMessageText me={message.me}>
              {message.text}
            </IndividualMessageText>
          </IndividualMessage>
        ))}
      </ChatMessages>
      <MessageInputArea>
        <ChatTextBox type="text" placeholder="Write a message" />
        <FontAwesomeIcon icon="paper-plane" />
      </MessageInputArea>
    </Fragment>
  );
};

export default Chat;
