import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../Features/brand/Brand';
import Search from '../Features/search/Search';
import Map from '../Features/map/Map';
import SearchResult from '../Features/search-result/SearchResult';

import './main.scss';


const { Content } = Layout;

class Main extends Component {
    render() {
        return (
            <div className ="main-layout">
                <Content className="content">
                    <Brand />
                    <Search />
                    <div className = "search-content">
                        <Map />
                        <SearchResult />
                    </div>
                </Content>
            </div>
        );
    }
}

export default Main;