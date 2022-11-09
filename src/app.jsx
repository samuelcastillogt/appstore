import React, { useState } from 'react';
import ContainerCards from './components/ContainerCards';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';
import SelectCategories from './components/SelectCategories';
import database from './database';
import Carusel from './components/Carusel';
const App = () => {
    const [modal, setModal] = useState(false)
    return (
        <React.Fragment>
            <Header />
            <SelectCategories />
            <ContainerCards>
                {
                    database.map(item => <Card data={item} setModal={setModal} key={item.name}/>)
                }
            </ContainerCards>
            {
                modal && <Modal item={modal} setModal={setModal}/>
            }
        </React.Fragment>
    );
};

export default App;