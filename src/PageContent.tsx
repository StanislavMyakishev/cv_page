import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin: 130px 0 80px 0;
  text-align: center;
`;

const StyledText = styled.span`
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-bottom: 10px;
    font-size: 22px;
    line-height: 40px;
`;

const HighlightedText = styled(StyledText)`
    background-color: #000;
    color: #fff;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    transition: 0.3s;
`;

const HighlightedLink = styled(StyledLink)`
    background-color: #0277bd;
    color: #fff;
    transition: 0.3s;
    
    &:hover {
        background-color: #004c8c;
        color: #fff;
        transition: 0.3s;
    }
`;

const PageContent = () => (
    <ContentWrapper>
        <StyledText>Hi!</StyledText>
        <br/>
        <StyledText>
            My name is&nbsp;
            <HighlightedText>Stanislav Myakishev</HighlightedText>
            &nbsp;and I'm a&nbsp;
            <HighlightedText>front end developer</HighlightedText>.
            </StyledText>
        <br />
        <StyledText>
            <i>"He who speaks without modesty will find it difficult to make his words good"</i>
        </StyledText>
        <br />
        <StyledText>
            So instead of many words here you can find my CV
            <br />
            in&nbsp;
            <StyledLink
                href="https://github.com/stanislavmyakishev/stanislavmyakishev.github.io/raw/master/eng_myakishev_stanislav_cv.pdf"
                download="eng_myakishev_stanislav_cv.pdf"
            >
                <HighlightedLink>english</HighlightedLink>
            </StyledLink>
            &nbsp;or in&nbsp;
            <StyledLink
                href="https://github.com/stanislavmyakishev/stanislavmyakishev.github.io/raw/master/myakishev_stanislav_cv.pdf"
                download="myakishev_stanislav_cv.pdf"
            >
                <HighlightedLink>russian</HighlightedLink>
            </StyledLink>.
            </StyledText>
    </ContentWrapper>
);

export default PageContent;