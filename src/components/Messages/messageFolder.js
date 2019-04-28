import React, { Fragment, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LiveUpdate, withWebId, UpdateContext, withAuthorization } from '@inrupt/solid-react-components';
import chatService from './chatService';

import Chat from './chat'
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
  ChatOptionMessage,
  ChatPaneHeader
} from './messages.style';
import ProfileImage from '../Share/ProfileImage';

class MessageFolder extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chats: []
    }
  }

  async componentDidMount() {
    chatService.subscribe('conversations', () => {
      this.setState({ chats: chatService.conversations })
    });
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (this.props.webId && this.props.webId !== prevProps.webId) {
  //     await this.fetchChats();
  //   }
  // }

  // async fetchChats() {
  //   const chats = await chatService.getConversations(this.props.webId);
  //   console.log(chats);
  // }

  render() {

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
            {this.state.chats.map((chat) => (
              <ChatOptionContainer
                selected={chat.isCurrent}
                key={chat.chatFileUri}
                onClick={() => chatService.openChat(chat)}
              >
                <ChatOptionProfileImage src={chat.others[0].profilePic} />
                <ChatOptionTextContainer>
                  <ChatOptionName>{chat.chatTitle}</ChatOptionName>
                  {/* <ChatOptionMessage>{chat.lastMessage}</ChatOptionMessage> */}
                </ChatOptionTextContainer>
              </ChatOptionContainer>
            ))}
          </ChatList>
        </ChatSelector>
        <ChatPane>
          <ChatPaneHeader>
            <FontAwesomeIcon icon="users" />
            <span>Meh Chat</span>
            <ProfileImage />
          </ChatPaneHeader>
          <Chat />
        </ChatPane>
      </Fragment>
    );
  }
};

export default withAuthorization(withWebId(MessageFolder));