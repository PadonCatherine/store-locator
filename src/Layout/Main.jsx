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
  state = { // purpose is to separate unsay query ug ag current or default
    stores: [],
    currentPosition: null,
    query: '',
    distance: '1',
    searchQuery: {
      distance: 1,
      query:'',
      stores: [],

    },

  };

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

  async getStores() { 
    const { data } = await getStores(); 
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
  onSearch() { //filter store
    const { distance, query, stores } = this.state;
    const filteredStores = this.filterStores({ distance, query, stores });
    const searchQuery = { distance, query, stores: filteredStores };
    this.setState({ searchQuery });
  }

  filterStores({ distance, query, stores }) {
    const filteredStores = stores.filter((store) => {
      const isStoreInRange = store.distance <= parseInt(distance);
      if (!query || !isStoreInRange) return isStoreInRange;
      const isStoreQueried = //ato bang gisearch ang tags/query
        store.name.toLowerCase().includes(query.toLowerCase()) ||
        store.tags.toLowerCase().includes(query.toLowerCase()); //sets query to lowercase
      return isStoreInRange && isStoreQueried; //
    });
    return filteredStores;
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
          onSubmit={ () => this.onSearch ()}
          />

          <div className='search-content'>
            <Map 
              currentPosition={this.state.currentPosition} 
              distance={this.state.searchQuery.distance} 
              stores={ this.state.searchQuery.stores}
            />
              
            <SearchResult />
          </div>
        </Content>
      </div>
    );
  }
}

export default Main;