import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import CategoryList from '../CategoriesList';
import ModalDialogBox from '../Modal';
import Confirm from '../Confirm';
import { getCategories } from '../../reselectors/categories';

function CategoryItem({ id, name, categories }) {
    const [collapse, setCollapse] = useState(true);
    const [addModal, setAddModal] = useState(false);
    const [removeModal, setRemoveModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const nestedList = categories.filter(({ parentId }) => parentId === id);

    const buttonClassName = 'caregory-btn caregory-btn-collapse';
    const buttonStyle = nestedList.length > 0 ? buttonClassName : `${buttonClassName}-hidden`;

    return (
        <React.Fragment>
            <li className="list-group-item list-group-item-category">
                <div className="caregory-item">
                    <button className={buttonStyle} onClick={() => setCollapse(!collapse)}>
                        <i className="glyphicon glyphicon-menu-down" />
                    </button>
                    <Link to={`/category/${id}`}>
                        <span href="#" className="caregory-item-title" data-name="caregory-title">
                            {name}
                        </span>
                    </Link>
                    <button className="caregory-btn caregory-btn-edit" onClick={() => setEditModal(!editModal)}>
                        <i className="glyphicon glyphicon-pencil" />
                    </button>
                    <button
                        data-test="remove-categoty-btn"
                        className="caregory-btn caregory-btn-remove pull-right"
                        onClick={() => setRemoveModal(!removeModal)}
                    >
                        <i className="glyphicon glyphicon-trash" />
                    </button>
                    <button className="caregory-btn caregory-btn-add pull-right" onClick={() => setAddModal(!addModal)}>
                        <i className="glyphicon glyphicon-plus" />
                    </button>
                </div>
            </li>

            {!collapse && <CategoryList nestedCategories={nestedList} isMoveTask={false} />}
            {addModal && <ModalDialogBox onClose={() => setAddModal(!addModal)} id={id} editCategoryTitle={false} />}
            {editModal && <ModalDialogBox onClose={() => setEditModal(!editModal)} id={id} editCategoryTitle={true} />}
            {removeModal && (
                <Confirm onClose={() => setRemoveModal(!removeModal)} categoryId={id} categoryTitle={name} />
            )}
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    categories: getCategories(state),
});

export default withRouter(connect(mapStateToProps)(CategoryItem));
