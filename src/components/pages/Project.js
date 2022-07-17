import React from 'react';

export default function Project(props) {
    return (
            <article className="row">
                <img src={props.image} alt={props.imageAlt} />
                <div className="">
                    <a href={props.link} alt={props.linkAlt} target="_blank" rel='noreferrer'>
                        <h3>{props.title}</h3>
                    </a>
                    <p>{props.description}</p>
                </div>
            </article>
    );
}
