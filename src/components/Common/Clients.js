import React, { Component } from "react";
import ClientItem  from './ClientItem'

import img1 from '../assets/img/logos/creative-market.jpg';
import img2 from '../assets/img/logos/designmodo.jpg';
import img3 from '../assets/img/logos/envato.jpg';
import img4 from '../assets/img/logos/themeforest.jpg';

const item =[
    {image: img1},
    {image: img2},
    {image: img3},
    {image: img4}
]
class Clients extends Component {
    render() {
        return (
            <section class="py-5">
                <div class="container">
                    <div class="row">

                        {item.map((item,index)=>{
                            return <ClientItem {...item} key={index} />
                        })}
                    </div>
                </div>
            </section>
        );
    }
}
export default Clients;
