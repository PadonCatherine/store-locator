import React, { Component } from 'react';
import { PushpinOutlined, TagOutlined } from '@ant-design/icons';

import './search-result-item.scss';

class SearchResultItem extends Component {
    render() {
        return (
            <div className='search-result-item'>
                <div className='result-item__name'>
                    <span>LBC Express</span>
                    <span className='result-item__distance'>1 km</span>
                </div>
                <div className='result-item__description'>
                    <PushpinOutlined />
                    <span>Rv Villaflores Corner Rv Fulache Street, Hilongos City, 6524 Leyte</span>
                </div>
                <div>
                    <TagOutlined />
                    <span className='tags'>Restaurant</span>
                </div>
                <div className='result-item__name'>
                    <span>JJ'S Chika-an</span>
                    <span className='result-item__distance'>1 km</span>
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
                    <span>Tambaan Farm Cafe</span>
                    <span className='result-item__distance'>1 km</span>
                </div>
                <div className='result-item__description'>
                    <PushpinOutlined />
                    <span>Sitio Tambaan, Hilongos, Leyte</span>
                </div>
                <div>
                    <TagOutlined />
                    <span className='tags'>Restaurant</span>
                </div>
            </div>
        );
    }
}

export default SearchResultItem;