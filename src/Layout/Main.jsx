import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../Features/brand/Brand';
import Search from '../Features/search/Search';
import Map from '../Features/map/Map';
import SearchResult from '../Features/search-result/SearchResult';


const { Content } = Layout;


class Main extends Component {
    render() {
        return (
            <div>
                <Content>
                    <Brand />
                    <Search />
                    <div className = 'search-component'>
                        <Map />
                        <SearchResult />
                    </div>
                </Content>
            </div>
        );
    }
}

export default Main;