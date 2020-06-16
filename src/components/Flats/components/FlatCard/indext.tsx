import React from 'react';
import {FlatModel} from "../../ducks/types";

interface FlatCardProps {
    flat:FlatModel;

}
const FlatCard:React.FC<FlatCardProps> = ({flat:{title,description}}) => {
    return (
        <div className="card">
            <img src="./city-default-image.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
        </div>
    );
};

export default FlatCard;
