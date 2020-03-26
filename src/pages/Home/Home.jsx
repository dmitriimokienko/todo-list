import React from 'react';
import '../../styles/App.css';
import Header from '../../components/Header';
import MainContent from '../../components/MainContent';

const Home = () => (
    <div className="container-fluid">
        <Header />
        <MainContent />
    </div>
);

export default Home;
