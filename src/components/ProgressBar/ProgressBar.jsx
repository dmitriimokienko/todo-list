import React from 'react';
import {connect} from 'react-redux';
import {calcProgressBar} from '../../reselectors/tasks';

const ProgressBar = props => {
    const {percentage} = props;
    const donePersent = isNaN(percentage) ? 0 : percentage.toFixed(0);

    return (
        <div className="progress">
            <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={donePersent}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: `${donePersent}%`}}
            />
            {`${donePersent}%`}
        </div>
    );
};

export const mapStateToProps = state => ({
    percentage: calcProgressBar(state)
});

export default connect(mapStateToProps)(ProgressBar);
