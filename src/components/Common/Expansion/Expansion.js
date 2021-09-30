import React, { Fragment } from 'react';
import './Expansion.css';
import expandLogo from '../../../assets/expand.png'

const Expansion = (props) => {
    console.log(props.children);
    let headContent, bodyContent;
    props.children.forEach(child => {
        if(child.props.id === 'head') headContent = child;
        if(child.props.id === 'body') bodyContent = child;
    });
    return (
        <div className='expansion-wrapper'>
            <div className='expansion-head'>
                <div className='left-content'>
                    {headContent}
                </div>
                <div className='right-content'>
                    <img src={expandLogo}  alt='expand'/>
                </div>
            </div>
            <div className='expansion-body'>{bodyContent}</div>
        </div>
    );
};

export default Expansion;