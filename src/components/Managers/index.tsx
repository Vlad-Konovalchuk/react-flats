import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {IRootState} from '../../store/rootReducer'
import {Dispatch} from 'redux'
import {managersFetch} from './ducks/actions'
import {IManager} from './ducks/types'

interface IProps {
    managers: IManager[],
    getManagers: () => any
}

const Flats: React.FC<IProps> = ({getManagers, managers}) => {
    useEffect(() => {
        getManagers()
        return () => {
        }
    }, [] )

    return (
        <div>
            Test
        </div>
    )
}

const mapStateToProps = (state: IRootState) => {
    return {
        flats: state.flats.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getManagers: () => dispatch(managersFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Flats)
