import React, { Component } from 'react';
import { Layout } from 'antd';
import Brand from '../Features/brand/Brand';
import Search from '../Features/search/Search';
import Map from '../Features/map/Map';
import SearchResult from '../Features/search-result/SearchResult';

import './main.scss';

 const { Content } = Layout;

class Main extends Component{
    state = {
        currentPosition: null,
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(({ coords }) => {
          const currentPosition = {
            lat: coords.latitude,
            lng: coords.longitude,
          };
          this.setState({ currentPosition });
        });
      }

    render() {
        return (
         <div className= 'main-layout' >
            <Content className = 'content'>
                <Brand />
                <Search />
                <div className='search-content'>
                    <Map currentPosition={this.state.currentPosition}/>
                    <SearchResult/>
                    </div>
            </Content>
            </div>
        );
    }
}

export default Main;