import React from "react";
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div className="col-md">
            <div className="card justify-content-center">
                <img src={props.imgUrl} className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <a href={props.buttonUrl} className="btn btn-primary">
                        {props.buttonLabel}
                    </a>
                </div>
            </div>
        </div>

    );
};
Card.defaultProps = {
    imgUrl: "https://picsum.photos/id/237/500/325",
    title: "Title Card",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, id provident distinctio fuga repellat reiciendis itaque officia recusandae sequi voluptates dolores tempora maxime quod. Laudantium modi porro eveniet incidunt labore.",
    buttonUrl: "https://google.com",
    buttonLabel: "Find Out More!"
}

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
}


