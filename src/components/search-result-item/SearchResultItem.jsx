import React, { Component } from 'react';
import { PushpinOutlined, TagOutlined } from '@ant-design/icons';

import './search-result-item.scss';

class SearchResultItem extends Component {
    render() {
        return (
            <div className='search-result-item'>
                <div className='result-item__name'>
                    <span>LBC Express</span>
                    <span className='result-item__distance'>2 km</span>
                </div>
                <div className='result-item__description'>
                    <PushpinOutlined />
                    <span>Rv Villaflores Corner Rv Fulache Street, Hilongos, Leyte</span>
                </div>
                <div>
                    <TagOutlined />
                    <span className='tags'>Restaurant</span>
                </div>
                <div className='result-item__name'>
                    <span>JJ'S Chika-an</span>
                    <span className='result-item__distance'>3 km</span>
                </div>
                <div className='result-item__description'>
                    <PushpinOutlined />
                    <span>Capt. Flordelis, Street, Hilongos, Leyte</span>
                </div>
                <div>
                    <TagOutlined />
                    <span className='tags'>Restaurant</span>
                </div>
                <div className='result-item__name'>
                    <span>Go Resort</span>
                    <span className='result-item__distance'>1km</span>
                </div>
                <div className='result-item__description'>
                    <PushpinOutlined />
                    <span>Brgy. Liberty, Hilongos, Leyte</span>
                </div>
                <div>
                    <TagOutlined />
                    <span className='tags'>Resort</span>
                </div>
            </div>
        );
    }
}

export default SearchResultItem;