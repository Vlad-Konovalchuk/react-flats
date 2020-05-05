import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {IRootState} from '../../store/rootReducer'
import {Dispatch} from 'redux'
import {fetchRequest} from './ducks/actions'
import {IFlat} from './ducks/types'
import {Styled} from './Flats.style'

interface IProps {
    flats: Array<IFlat>,
    getFlats: () => any
}

const Flats: React.FC<IProps> = ({getFlats, flats}) => {
    useEffect(() => {
        getFlats()
        return () => {
        }
    }, [] )

    return (
        <Styled.FlatBlock>
            Flats component
            <Styled.FlatsList>
                {
                    flats.length > 0 && flats.map(i => (
                        <Styled.FlatsListItem key={i.title}>
                            <p>{i.title}</p>
                            <p>{i.description}</p>
                        </Styled.FlatsListItem>
                    ))
                }
            </Styled.FlatsList>
        </Styled.FlatBlock>
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
