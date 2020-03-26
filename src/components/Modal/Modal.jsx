import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import AddModalForm from '../AddModalForm';
import EditModalForm from '../EditModalForm';

class ModalDialogBox extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        onClose: PropTypes.func
    };

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        const { id = this.props.id, onClose, editCategoryTitle } = this.props;

        return ReactDOM.createPortal(
            <div className="static-modal">
                <Modal show={true}>
                    <Modal.Header>
                        {editCategoryTitle ? (
                            <Modal.Title>Change category title</Modal.Title>
                        ) : (
                            <Modal.Title>Add new nested category</Modal.Title>
                        )}
                    </Modal.Header>

                    <Modal.Body>
                        {editCategoryTitle ? (
                            <EditModalForm id={id} onClose={onClose} />
                        ) : (
                            <AddModalForm parentId={id} onClose={onClose} />
                        )}
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={onClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>,
            this.root
        );
    }
}

export default ModalDialogBox;
