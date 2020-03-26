import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { editTask } from '../../actions/action-creators';

class TaskItem extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isDone: PropTypes.bool
    };

    handleUpdateCheckState = () => {
        const { id, isDone } = this.props;
        const updatedTask = {
            id,
            isDone: !isDone
        };

        this.props.onUpdateCheck(updatedTask);
    };

    render() {
        const { id, name } = this.props;

        return (
            <li className="list-group-item">
                <div className="task-item" data-name="task-item">
                    <span className="task-item-title">
                        <label>
                            <input
                                type="checkbox"
                                defaultChecked={this.props.isDone}
                                onClick={this.handleUpdateCheckState}
                            />
                            {name}
                        </label>
                    </span>
                    <Link to={`/task/${id}`}>
                        <button className="task-btn task-btn-edit pull-right">
                            <i className="glyphicon glyphicon-pencil" />
                        </button>
                    </Link>
                </div>
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onUpdateCheck: updatedTask => {
        dispatch(editTask(updatedTask));
    }
});

export default connect(null, mapDispatchToProps)(TaskItem);
