import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CategoryList from '../CategoriesList';
import ModalDialogBox from '../Modal';
import Confirm from '../Confirm';
import { getCategories } from '../../reselectors/categories';

class CategoryItem extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isCollapse: true,
            isAddingModalShow: false,
            isChangeTitleModalShow: false,
            isRemoveConfirmShow: false
        };
    }

    toggleCollapse = () =>
        this.setState(prevState => ({
            isCollapse: !prevState.isCollapse
        }));

    toggleAddingModal = () =>
        this.setState(prevState => ({
            isAddingModalShow: !prevState.isAddingModalShow
        }));

    toggleRemoveConfirm = () =>
        this.setState(prevState => ({
            isRemoveConfirmShow: !prevState.isRemoveConfirmShow
        }));

    toggleChangeTitleModal = () =>
        this.setState(prevState => ({
            isChangeTitleModalShow: !prevState.isChangeTitleModalShow
        }));

    getChildrenList = id => this.props.categories.filter(item => item.parentId === id);

    render() {
        const { id, name } = this.props;
        const nestedList = this.getChildrenList(id);

        return (
            <React.Fragment>
                <li className="list-group-item list-group-item-category">
                    <div className="caregory-item">
                        <button
                            className={
                                nestedList.length !== 0
                                    ? 'caregory-btn caregory-btn-collapse'
                                    : 'caregory-btn caregory-btn-collapse-hidden'
                            }
                            onClick={this.toggleCollapse}
                        >
                            <i className="glyphicon glyphicon-menu-down" />
                        </button>

                        <Link to={`/category/${id}`}>
                            <span href="#" className="caregory-item-title" data-name="caregory-title">
                                {name}
                            </span>
                        </Link>

                        <button className="caregory-btn caregory-btn-edit" onClick={this.toggleChangeTitleModal}>
                            <i className="glyphicon glyphicon-pencil" />
                        </button>
                        <button
                            data-test="remove-categoty-btn"
                            className="caregory-btn caregory-btn-remove pull-right"
                            onClick={this.toggleRemoveConfirm}
                        >
                            <i className="glyphicon glyphicon-trash" />
                        </button>
                        <button className="caregory-btn caregory-btn-add pull-right" onClick={this.toggleAddingModal}>
                            <i className="glyphicon glyphicon-plus" />
                        </button>
                    </div>
                </li>

                {!this.state.isCollapse && <CategoryList nestedCategories={nestedList} isMoveTask={false} />}

                {this.state.isAddingModalShow && (
                    <ModalDialogBox onClose={this.toggleAddingModal} id={id} editCategoryTitle={false} />
                )}

                {this.state.isChangeTitleModalShow && (
                    <ModalDialogBox onClose={this.toggleChangeTitleModal} id={id} editCategoryTitle={true} />
                )}

                {this.state.isRemoveConfirmShow && (
                    <Confirm onClose={this.toggleRemoveConfirm} categoryId={id} categoryTitle={name} />
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    categories: getCategories(state)
});

export default withRouter(connect(mapStateToProps)(CategoryItem));
