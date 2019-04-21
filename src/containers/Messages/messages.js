import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import URL from 'url-parse';
import { withToastManager } from 'react-toast-notifications';
import { LiveUpdate, withWebId, UpdateContext, withAuthorization } from '@inrupt/solid-react-components';
import data from '@solid/query-ldflex';
import MessageFolder from './messageFolder'
import { MessagesWrapper, FolderSelection, FolderSelectionLabel, FolderTab } from './messages.style';

const findChats = async () => {

}

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: []
    }
  }

  async componentDidMount() {
    if (this.props.webId) {
      await this.fetchChats();
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.webId && this.props.webId !== prevProps.webId) {
      await this.fetchChats();
    }
  }

  async fetchChats() {
    const webId = this.props.webId;
    const ochatFolder = `${new URL(webId).origin}/o-chat`;
    const chatFolder = data[ochatFolder];
    const containsLd = await chatFolder.contains;

    const name = containsLd ? containsLd.value : '';

    console.log(name)
  }

  render() {
    const folders = [
      {
        displayName: 'All Chats',
        icon: 'globe'
      },
      {
        displayName: 'FB Messenger',
        icon: 'faFacebookMessenger'
      },
      {
        displayName: 'Inrupt Slack',
        icon: 'fa-slack',
        selected: true
      },
      {
        displayName: 'Solid Gitter',
        icon: 'fa-gitter'
      },
      {
        displayName: '/private/chats',
        icon: 'folder'
      },
    ]

    return (
      <MessagesWrapper>
        <FolderSelection>
            {folders.map(folder => (
              <FolderTab selected={folder.selected} key={folder.displayName}>
                <FolderSelectionLabel>
                  {folder.displayName}
                </FolderSelectionLabel>
              </FolderTab>
            ))}
        </FolderSelection>
        <MessageFolder />
      </MessagesWrapper>
    );
  }
}
Messages.contextType = UpdateContext;

export default withAuthorization(withWebId(Messages));
