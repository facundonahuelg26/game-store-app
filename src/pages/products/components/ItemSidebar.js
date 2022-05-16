import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { ContainerIcon, Title, WrapperSid } from "../styled-components";

export const ItemSidebar = ({title, subNav}) => {
    
    return(
        <WrapperSid>
            <Title>
            <ContainerIcon>
                <MdKeyboardArrowDown/>
            </ContainerIcon>
                <span>{title}</span>
            </Title>
            <ul>
            {
                subNav.map(({subtitle, categories}) => (
                    <li key={subtitle}>
                        <Link to={`?category=${categories}`}>{subtitle}</Link>
                    </li>
                ))
            }
            </ul>
        </WrapperSid>
    )
}