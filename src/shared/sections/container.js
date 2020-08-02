import React from 'react';
import './sections.scss';
import ReadMoreButton from './readMoreButton';

function Section(props) {
    return (
        <div className="sections">
            <h3>{props.title}</h3>
            <div>{props.children}</div>
            <div className="sections_readmore">
                <ReadMoreButton url={props.url}/>
            </div>
        </div>
    );
}

export default Section;