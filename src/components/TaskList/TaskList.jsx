import React from 'react';
import { connect } from 'react-redux';
import { getFilteredTasks } from '../../reselectors/tasks';
import TaskItem from '../TaskItem';

const TaskList = props => {
    const list = props.tasks;

    return <ul className="list-group task-list">{list.map(item => <TaskItem key={item.id} {...item} />)}</ul>;
};

const mapStateToProps = state => ({
    tasks: getFilteredTasks(state)
});

export default connect(mapStateToProps)(TaskList);
