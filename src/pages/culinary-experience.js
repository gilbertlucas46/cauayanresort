import React from "react"

import Layout from "../components/layout"
import styled from 'styled-components'
import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

const CulinaryContainer = styled.div`

`;

const callback = function(key){
 
}

const CulinaryExperience = ({location}) => (
  <Layout location={location}>
    <article>
      <CulinaryContainer className="container">
        <Tabs
        defaultActiveKey="2"
        onChange={callback}
        renderTabBar={()=><ScrollableInkTabBar />}
        renderTabContent={()=><TabContent />}
        >
          <TabPane tab='tab 1' key="1">first</TabPane>
          <TabPane tab='tab 2' key="2">second</TabPane>
          <TabPane tab='tab 3' key="3">third</TabPane>
        </Tabs>
      </CulinaryContainer>
    </article>
  </Layout>
)

export default CulinaryExperience
