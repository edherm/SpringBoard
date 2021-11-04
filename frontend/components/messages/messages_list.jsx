import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MessageIndexItem from './message_index_item';
import { fetchMessages } from '../../actions/message_actions';

export default ({ page }) => {
  const dispatch = useDispatch();
  const { userId, projectId } = useParams();
  const { messages, user } = useSelector((state) => ({
    messages: Object.values(state.entities.messages),
    user: state.entities.users[userId],
  }));

  useEffect(() => {
    dispatch(fetchMessages(projectId));
  }, [projectId, dispatch]);

  return !messages.length ? null : (
    <ul className={`${page} message-ul`}>
      {messages.map((message) => {
        return (
          <Link
            key={message.id}
            to={`/${userId}/projects/${projectId}/messages/${message.id}`}
          >
            <MessageIndexItem page={page} message={message} user={user} />
          </Link>
        );
      })}
    </ul>
  );
};
