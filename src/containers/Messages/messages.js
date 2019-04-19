import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withToastManager } from 'react-toast-notifications';
import { LiveUpdate, useWebId } from '@inrupt/solid-react-components';
import MessageFolder from './messageFolder'
import { MessagesWrapper, FolderSelection, FolderSelectionLabel, FolderTab } from './messages.style';

const Messages = ({ routes, ...rest }) => {
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
            <FolderTab selected={folder.selected}>
              <FolderSelectionLabel>
                {folder.displayName}
              </FolderSelectionLabel>
            </FolderTab>
          ))}
      </FolderSelection>
      <MessageFolder />
    </MessagesWrapper>
  );
};

export default withToastManager(Messages);
