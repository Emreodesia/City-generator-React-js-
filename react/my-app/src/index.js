import React from 'react';
import  ReactDOM  from 'react-dom'

import Collapse from'./componets/collapse';
import Card from'./componets/card';


    const App=()=>{
        return (
        <div className='card-group'>
             

                <Collapse href='collapseExample1'>
                <Card
                CardTitle='Card Title I' 
                cardText='Japon '
                updatedTime='Last Time 1 min ago'
                image='https://www.dunyabizim.com/images/haberler/haber/2018/04/02/sira-disi-tatilin-adresi-japonya.jpg'
                />
                </Collapse>

                <Collapse  href='collapseExample2'>
                <Card
                CardTitle='Card Title II' 
                cardText='Canada' 
                updatedTime='Last Time 2 min ago'
                image='https://www.novascotia.com/sites/default/files/2023-02/Halifax-Waterfront-joggers-sunrise-1920x1080.jpg'
                />
                </Collapse>

                
                <Collapse href='collapseExample3'>   
                <Card 
                CardTitle='Card Title III'
                cardText='Italy' 
                updatedTime='Last Time 3 min ago'
                image='https://www.lezzetarayanlara.com/class/INNOVAEditor/assets/roma%20colessium.jpg'
                
                 />
                 </Collapse>

       
        </div>
        );
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('root')

    );


