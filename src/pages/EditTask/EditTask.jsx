import React from 'react';
import '../../styles/App.css';
import { connect } from 'react-redux';
import { getTaskById } from '../../reselectors/tasks';
import EditTaskContent from '../../components/EditTaskContent';

const EditTask = props => {
    const title = props.currentTask.name;

    return (
        <div className="container-fluid">
            <h1>{title}</h1>
            <EditTaskContent />
        </div>
    );
};

const mapStateToProps = state => ({
    currentTask: getTaskById(state)
});

export default connect(mapStateToProps)(EditTask);
