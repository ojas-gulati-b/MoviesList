import React, { useRef, useState } from 'react';
import './Expansion.css';
import expandLogo from '../../../assets/images/expand.png'

const Expansion = (props) => {
    let headContent, bodyContent;
    const expansionBodyRef = useRef(null);
    const [bodyHeight, setBodyHeight] = useState({height: 0});

    props.children.forEach(child => {
        if(child.props.id === 'head') headContent = child;
        if(child.props.id === 'body') bodyContent = child;
    });

    // Code to expand and collapse the body
    const toggleExpansion = () => {
        if (expansionBodyRef.current.style.height !== '0px')
            setBodyHeight({height: '0px'});
        else
            setBodyHeight({height: `${expansionBodyRef.current.scrollHeight}px`});
        }
    return (
        <div className='expansion-wrapper'>
            <div className='expansion-head'>
                <div className='left-content'>
                    {headContent}
                </div>
                <div className='right-content' onClick={toggleExpansion}>
                   <span>View More</span> <img src={expandLogo}  alt='expand'/>
                </div>
            </div>
            <div className='expansion-body' ref={expansionBodyRef} style={bodyHeight}>{bodyContent}</div>
        </div>
    );
};

export default Expansion;