import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MessageIndexItem from './message_index_item';
import { fetchMessages } from '../../actions/message_actions';
import { filterByProject } from '../../util/project_api_util';

export default ({ page }) => {
  const dispatch = useDispatch();
  const { userId, projectId } = useParams();
  const { messages, user } = useSelector((state) => ({
    messages: filterByProject(
      Object.values(state.entities.messages),
      projectId
    ),
    user: state.entities.users[userId],
  }));
  const [loaded, setLoaded] = useState(!!messages.length);

  useEffect(() => {
    if (!loaded) {
      debugger;
      setLoaded(true);
      dispatch(fetchMessages(projectId));
    }
  }, [loaded, projectId, dispatch]);

  const ConditionalLink = ({ children, messageId }) => {
    return page === 'preview' ? (
      children
    ) : (
      <Link to={`/${userId}/projects/${projectId}/messages/${messageId}`}>
        {children}
      </Link>
    );
  };

  return !loaded ? null : (
    <ul className={`${page} message-ul`}>
      {messages.map((message) => {
        return (
          <ConditionalLink key={message.id} messageId={message.id}>
            <MessageIndexItem page={page} message={message} user={user} />
          </ConditionalLink>
        );
      })}
    </ul>
  );
};
