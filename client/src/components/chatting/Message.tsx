import React from 'react';
import { format } from 'timeago.js';
import moment from 'moment';
import { UserInfoType } from '../../types';
import { ChatMessage, ChatPartnerHead, ChatText, ChatPartnerProfile } from './Chat.elements';

interface MessageProps {
  txt: string;
  isMe: boolean;
  partner: UserInfoType | null;
  createdAt: string;
}

const Message = ({ txt, isMe, partner, createdAt }: MessageProps) => {
  return (
    <ChatMessage isMe={!isMe}>
      {!isMe && (
        <ChatPartnerHead>
          <ChatPartnerProfile src={partner?.profileImg} alt={partner?.username} />
          <p>{partner?.username}</p>
        </ChatPartnerHead>
      )}

      <ChatText>
        {txt}
        <span>{checkTime(createdAt)}</span>
      </ChatText>
    </ChatMessage>
  );

  function checkTime(dateTxt: string): string {
    const now = new Date();
    const date = new Date(dateTxt);
    const btDay: number = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    if (btDay > 1) {
      return moment(dateTxt).format('MM월 DD일');
    }
    return format(createdAt);
  }
};

export default Message;
