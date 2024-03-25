import React from "react";


const Card = (props) => {
    return (
        <div className="card mx-auto">
            <img src={props.image} className="card-img" alt="..." />
            <div className="card-body">
                <h4 className="card-tittle">{props.name}</h4>
                <div>
                    <span className="border border-light">
                        <p className="card-text">{props.text}</p>
                    </span>
                </div>
                <a href="#" className="btn btn-primary b">Find Out More!</a>
            </div>


        </div>
    )
}

export default Card