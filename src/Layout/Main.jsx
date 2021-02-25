import React, { Component } from 'react';
import { Layout } from 'antd';

import Brand from '../Features/brand/Brand';
import Search from '../Features/search/Search';
import Map from '../Features/map/Map';
import SearchResult from '../Features/search-result/SearchResult';
import { getStores } from '../services/stores';
import { haversineInKM } from '../utilities/math';

import './main.scss';

const { Content } = Layout;

class Main extends Component {
  state = {
    stores: [],
    currentPosition: null,
    query: '',
    distance: '1',
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      const currentPosition = {
        lat: coords.latitude,
        lng: coords.longitude,
      };
      this.setState({ currentPosition });
      this.getStores();
    });
  }

  OnInputChange(event) {
    const statekey = event.target.name;
    this.setState({ [statekey]: event.target.value });
  }

  async getStores() { //kani nga method// mao ni ag nagkuha ug data sa atong services.
    const { data } = await getStores(); // ang gestores gikan ni sa services.// iya kuhaon ag data//iya ireturn ang promise
    const stores = this.mapStoreDistance( data );
    this.setState({ stores });
  }

  mapStoreDistance(data = []) {
    const stores = data.reduce((mappedStores, store) => {
      const { lat, lng } = this.state.currentPosition;
      const distance = haversineInKM(lat, lng, store.latitude, store.longitude);
      return [...mappedStores, { ...store, distance }];
    }, []);
    return stores;
  }

  render() {
    return (
      <div className='main-layout' >
        <Content className='content'>
          <Brand />

          <Search 
          query={this.state.query} 
          distance={this.state.distance} 
          OnChange={(Event) => this.OnInputChange (Event)} 
          />

          <div className='search-content'>
            <Map 
              currentPosition={this.state.currentPosition} 
              distance={this.state.distance} />
            <SearchResult />
          </div>
        </Content>
      </div>
    );
  }
}

export default Main;