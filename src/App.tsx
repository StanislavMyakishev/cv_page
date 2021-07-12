import React from 'react';
import styled from 'styled-components';
import LinksTable from "./LinksTable";
import PageContent from './PageContent';

const AppLayout = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => (
    <AppLayout>
        <PageContent />
        <LinksTable />
    </AppLayout>
)

export default App;
