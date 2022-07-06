// import React, {useState} from 'https://cdn.skypack.dev/react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import './styles.search.css';

const iconList = [
    {
        "name": "Add",
        "url": "add",
        "tags": [
            "add",
            "plus"
        ]
    },
    {
        "name": "Close",
        "url": "close",
        "tags": [
            "close",
            "cancel"
        ]
    },
]

export function SvgIcon(props) {
    const {name, icon} = props;
    // icon should be a icon name only, not a path
    return (
        <li className={'svg-icon'} key={icon}>
            <header className="tile-title">{name}</header>
            <div className="tile-svg">
                <img className="icon" src={useBaseUrl(`/img/icon/${icon}.svg`)}/>
            </div>
        </li>
    )
}

export function SearchResult(props) {
    const {name, icon, tags} = props;

    const tagList = tags.map(tag => {
        return <li key={tag}>{tag}</li>
    })

    return (
        <li className={'svg-icon'} key={icon}>
            <header className="tile-title">{name}</header>
            <div className="tile-svg">
                <img className="icon" src={useBaseUrl(`/img/icon/${icon}.svg`)}/>
            </div>
            <div className={"tags"}>
                <h5>Tags:</h5>
                <ul className={"tags"}>
                    {tagList}
                </ul>
            </div>
        </li>
    )
}

export function SearchComponent() {
    const React = require('react')
    const {useState} = React;
    const [search, setSearch] = useState('');

    const [iconsResult, setIconsResult] = useState('');

    const handleChange = event => {
        setSearch(event.target.value);
    };

    const handleClick = event => {
        event.preventDefault();

        const icons = iconList.filter(function (icon) {
            return icon.tags.some((item) => item.includes(search.toLowerCase()))
        });

        setIconsResult(icons.map(icon => {
            return (
                <SearchResult name={icon.name} icon={icon.url} tags={icon.tags}/>
            );
        }));
    };

    return (
        <div className={"search-component"}>
            {/*<h3>Stand Alone Search component</h3>*/}
            <input type="text" id="message" name="message" onChange={handleChange} value={search}
                   autoComplete="off"/>
            <button onClick={handleClick}>Click</button>
            <h3>Search results will appear below</h3>
            <ul className={"icons-result"}>{iconsResult}</ul>
        </div>
    )
}