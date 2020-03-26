import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { handleRemoveCategoriesAndTasks } from '../../actions/categories';
import { getCategories } from '../../reselectors/categories';

class Confirm extends Component {
    static propTypes = {
        categoryId: PropTypes.number.isRequired,
        onClose: PropTypes.func
    };

    handleRemoveCategory = () => {
        const { categoryId, categories, onClose, onRemoveCategory } = this.props;
        const values = {
            id: categoryId,
            categories
        };

        onRemoveCategory(values);
        onClose();
    };

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        const { categoryTitle, onClose } = this.props;

        return ReactDOM.createPortal(
            <div className="static-modal">
                <Modal show={true}>
                    <Modal.Header>
                        <Modal.Title>Remove category</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h2>Remove '{categoryTitle}'?</h2>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            data-test="confirm-remove-category-btn"
                            bsStyle="danger"
                            onClick={this.handleRemoveCategory}
                        >
                            YES
                        </Button>
                        <Button data-test="confirm-undo-remove-category-btn" onClick={onClose}>
                            NO
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>,
            this.root
        );
    }
}

const mapStateToProps = state => ({
    categories: getCategories(state)
});

const mapDispatchToProps = dispatch => ({
    onRemoveCategory: values => {
        dispatch(handleRemoveCategoriesAndTasks(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
