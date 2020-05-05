import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

const S = styled(NavLink)`
  display: block;
  color: #fff;
  text-decoration: none;
  transition: all .3s ease-in-out;
  
  &:hover{
    color: rgba(178,178,178,1);
  }
`;

interface ILinkProps {
    label?: string;
    path: string;
}

const RouterLink: React.FC<ILinkProps> = ({label, path}) => {
    return (
        <S to={path}>
            {!!label && label}
        </S>
    );
};

export default RouterLink;
