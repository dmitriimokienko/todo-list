import React from 'react';
import CategoryList from '../CategoriesList';
import TaskList from '../TaskList';

const MainContent = () => (
    <main className="main-section row">
        <section className="col-xs-6 main-section main-section-left">
            <CategoryList isMoveTask={false} />
        </section>

        <section className="col-xs-6 main-section main-section-right">
            <TaskList />
        </section>
    </main>
);

export default MainContent;
