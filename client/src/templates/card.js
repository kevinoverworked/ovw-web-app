import React, { Component } from "react";

export class Card extends Component {
    constructor (props) {
        super(props);
        this.card = this.props.dataObject;
    }

     render() {
        const data = this.props.dataObject;
        return (
            <section className="card">
                <div className="content">
                    <div className="title">
                        <h1>{data.title}</h1>
                        <p className="subtitle">{data.subTitle}</p>
                    </div>
                    <div className="media">
                        <figure>
                            <img src={data.media.src} alt={data.media.alt} />
                        </figure>
                    </div>
                    <div className="copy"></div>
                </div>
                <div className="footer">
                    <div className="link">
                    {Object.values(data.links).map(value => (  
                        <a className={value.className} href={value.href} title={value.title}>{value.label}</a>
                    ))}
                    </div>
                    <div className="icons"></div>
                </div>
                <div role="navigation"></div>
                <div className="deck">
            
                </div>
            </section>
        )
    }
};

export default Card