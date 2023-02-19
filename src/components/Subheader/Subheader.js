import React from 'react';
import SubImage from "../../images/subheader.jpg";
import "./Subheader.css";

const Subheader = () => {
    return (
        <section className='sub-header'>
            <img src={SubImage} alt=''/>
            
        </section>
    );
};

export default Subheader;