import React, { useEffect, useState } from 'react';
import ContainerCards from './components/ContainerCards';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';
import SelectCategories from './components/SelectCategories';
import database from './database';
const App = () => {
    const [modal, setModal] = useState(false)
    const [categorie, setCategorie] = useState("all")
    const [data, setData] = useState(database)
    useEffect(()=>{
        if(categorie == "all"){
            setData(database)
        }else{
            const filtro = database.filter(item => categorie == item.categorie)
            setData(filtro)
        }
    }, [categorie])
    return (
        <React.Fragment>
            <Header />
             <SelectCategories setCategorie={setCategorie}/>
            <ContainerCards>
                {
                    data.map(item => <Card data={item} setModal={setModal} key={item.name}/>)
                }
            </ContainerCards> 
            <div className="modal-container">
                {
                modal && <Modal item={modal} setModal={setModal}/>
                } 
            </div>
               
        </React.Fragment>
    );
};

export default App;