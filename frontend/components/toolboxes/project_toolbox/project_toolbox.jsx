import React from 'react';
import { Link } from 'react-router-dom';
import MessagesPreview from './previews/messages_preview';
import TodosPreview from './previews/todos_preview';
import SchedulePreview from './previews/schedule_preview';
import { EditLink } from './edit_link';

class ProjectToolbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render() {
    if (!this.props.project) {
      return null;
    }

    const {
      project,
      user,
      fetchMessages,
      messages,
      fetchTodoLists,
      fetchTodos,
      todoLists,
      todos,
      match,
    } = this.props;
    const { userId, projectId } = this.props.match.params;

    return (
      <div className="toolbox-container">
        <div className="toolbox-main">
          <EditLink match={match} page="project" />
          <div className="toolbox-header">
            <div className="toolbox-header-left"></div>
            <div className="toolbox-header-center">
              <h1>{project.name}</h1>
              <h3>{project.description}</h3>
            </div>
            <div className="toolbox-header-right"></div>
          </div>
          <div className="toolbox-body">
            <div className="toolbox-items-container">
              <ul className="toolbox-items-ul">
                <Link to={`/${userId}/projects/${projectId}/messages`}>
                  <MessagesPreview />
                </Link>
                <Link to={`/${userId}/projects/${projectId}/todoLists`}>
                  <TodosPreview
                    fetchTodoLists={fetchTodoLists}
                    fetchTodos={fetchTodos}
                    projectId={projectId}
                    todoLists={todoLists}
                    todos={todos}
                  />
                </Link>
                <Link to="#">
                  <div className="schedule-preview">
                    <span className="construction">Coming Soon!</span>
                    <SchedulePreview />
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectToolbox;
