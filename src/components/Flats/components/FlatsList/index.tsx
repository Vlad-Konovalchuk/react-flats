import React from 'react';
import FlatCard from "../FlatCard/indext";
import {FlatModel} from "../../ducks/types";

interface FlatsListProps {
    flats:FlatModel[]
}

const FlatsList:React.FC<FlatsListProps> = ({flats}) => {
    return (
            <div className="row justify-content-center">
                {flats.map(ft => (
                    <div className="col-xs-12 col-sm-3 col-md-4 col-lg-3 m-1">
                        <FlatCard flat={ft}/>
                    </div>
                ))}
        </div>
    );
};

export default FlatsList;
