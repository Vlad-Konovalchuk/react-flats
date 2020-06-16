import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {IRootState} from '../../store/rootReducer'
import {Dispatch} from 'redux'
import {fetchRequest} from './ducks/actions'
import {FlatModel} from './ducks/types'
import FlatsList from "./components/FlatsList";
import {flatsData} from "./mock";

interface IProps {
    flats: FlatModel[];
    getFlats: () => any;
}

const Flats: React.FC<IProps> = ({getFlats, flats}) => {
    useEffect(() => {
        getFlats()
        return () => {
        }
    }, [] )

    return (
        <div className="container-fluid">
            <div className="flats-page__filter">Filters</div>
            <FlatsList flats={flats}/>
        </div>
    )
}

const mapStateToProps = (state: IRootState) => {
    return {
        flats: state.flats.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getFlats: () => dispatch(fetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flats)
