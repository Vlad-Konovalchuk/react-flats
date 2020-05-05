import React from 'react'
import {NavLink} from "react-router-dom";
import {Styled} from './Header.styles'
import RouterLink from "../Link";

const Header = () => {
    return (
        <Styled.Header>
            <Styled.HeaderTitle>
                Ts Your App
            </Styled.HeaderTitle>
            <Styled.HeaderNav>
                <Styled.HeaderNavList>
                    <Styled.HeaderNavItem>
                        <RouterLink path="/" label="Home"/>
                    </Styled.HeaderNavItem>
                    <Styled.HeaderNavItem>
                        <RouterLink path="/signin" label="Sign In"/>
                    </Styled.HeaderNavItem>
                    <Styled.HeaderNavItem>
                        <RouterLink path="/signup" label="Sign Up"/>
                    </Styled.HeaderNavItem>
                </Styled.HeaderNavList>
            </Styled.HeaderNav>
        </Styled.Header>
    )
}

export default Header
