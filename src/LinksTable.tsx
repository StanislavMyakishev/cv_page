import React from 'react';
import styled from 'styled-components';
import Profile from './assets/profile.jpg';

const LinksTableWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileImage = styled.img`
    width: 100px;
    border-radius: 50px;
    margin-top: 18px;
    
    @media only screen and (max-width: 550px) {
        display: none;
    }
`;

const StyledTable = styled.table`
    float: right;
    margin: 0 auto;
    border-spacing: 16px;
`;

const TableText = styled.span`
    font-size: 18px;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 18px;
    transition: 0.3s;
    
    &:hover {
      color: #1A6DBB;
      transition: 0.3s;
    }
`;

const LinksTable = () => (
    <LinksTableWrapper>
        <div>
            <ProfileImage src={Profile} alt="stanislav myakishev"/>
            <StyledTable>
                <tbody>
                <tr>
                    <td>
                        <TableText>telegram:</TableText>
                    </td>
                    <td>
                        <TableText>
                            <StyledLink href="https://t.me/smyakishev">
                                @smyakishev
                            </StyledLink>
                        </TableText>
                    </td>
                </tr>
                <tr>
                    <td>
                        <TableText>email:</TableText>
                    </td>
                    <td>
                        <TableText>
                            <StyledLink href="mailto:stanislaw.myakishev@yandex.ru">
                                stanislaw.myakishev@yandex.ru
                            </StyledLink>
                        </TableText>
                    </td>
                </tr>
                <tr>
                    <td>
                        <TableText>linkedin</TableText>
                    </td>
                    <td>
                        <TableText>
                            <StyledLink href="https://www.linkedin.com/in/smyakishev/">
                                smyakishev
                            </StyledLink>
                        </TableText>
                    </td>
                </tr>
                </tbody>
            </StyledTable>
        </div>
    </LinksTableWrapper>
);

export default LinksTable;