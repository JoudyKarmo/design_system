// import React from "react";
//
// export default function Tile(props) {
//     const {config: header, img} = props;
//     return (
//         <li>
//             <header>{header}</header>
//             <div className="tile-svg">
//                 <img className="icon" src={img} />
//             </div>
//         </li>
//     )
// }



// function SvgIcon(props) {
//     const {header, icon} = props;
    // const newIcon= icons.map((icons) => {
    //     return(
    //         < key={icons.id}>
    //
    //         </>
    //     )
    // })
    // return (
        // <div className={'svg-icon'}>
        //     <header className="tile-title">{header}</header>
        //     {/*className="tile-svg"*/}
        //     <div>
        //         <img className="icon" src={useBaseUrl(`/img/icon/${icon}.svg`)}/>
        //         <a href={useBaseUrl(`/img/icon/${icon}.svg`)} download={`${icon}.svg`}><p className="download"></p></a>
        //     </div>
        // </div>
        // <div>
        //     <div data-ds--text-field--container="true" class="css-1a82ln7">
        //     <span class="css-1iuj5ih">
        //     <span role="img"
        //           aria-label="Search"
        //           class="css-hakgx8"
        //           styles={"--icon-primary-color:currentColor; --icon-secondary-color:var(--ds-surface, #FFFFFF);"}>
        //     <svg
        //         width="24" height="24" viewBox="0 0 24 24" role="presentation"><path
        //         d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
        //         fill="currentColor" fill-rule="evenodd"></path>
        //     </svg>
        //     </span>
        //     </span>
        //         <input placeholder="Search"
        //                data-ds--text-field--input="true"
        //                className="css-wxvfrp" value=""/>
        //     </div>
        // </div>
//<div data-v-63f07fb9="" data-v-6612feea="">
        // <div data-v-63f07fb9="" class="grid-icon">
        // {/*<a data-v-63f07fb9="" href="/icon/119734/delete-sign" className="grid-icon__link" draggable="false">*/}
        // <div data-v-63f07fb9="" draggable="true" class="app-icon grid-icon__icon is-cool">
        // <img alt="Close icon" src={useBaseUrl(`/img/icon/close.svg`)}/>
        // </div>
        // {/*</a>*/}
        // <div data-v-63f07fb9="" class="grid-icon__title">
        // Close
        // </div>
        // <div data-v-63f07fb6="" draggable="true" class="app-icon grid-icon__icon is-cool">
        // <img alt="Add icon" src={useBaseUrl(`/img/icon/add.svg`)}/>
        // </div>
        // <div data-v-63f07fb6="" class="grid-icon__title">
        // Add
        // </div>
        //
        // {/*<div data-v-63f07fb9="" class="grid-icon__collection">*/}
        // {/*    <div data-v-63f07fb9="" class="grid-icon__collection-icon">*/}
        // {/*        <svg width="100%" height="100%">*/}
        // {/*            <use href="#plus"></use>*/}
        // {/*        </svg>*/}
        // {/*    </div>*/}
        // {/*    Collection*/}
        // {/*</div>*/}
        // </div>
        // </div>
//     )
// }

// const obj =
//
// {
//         key: "this is the value of the key", anotherKey: "this is another value"
//     }
// console.log(obj);

// export default SvgIcon;

import './styles.icon.css';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Icons from './icons.json';

function SvgIcon(props) {
    const {name, icon} = props;
    return (
        <div className={'svg-icon'}>
            <header className="tile-title">{name}</header>
            <div className="tile-svg">
                <img className="icon" src={useBaseUrl(`/img/${icon}.svg`)}/>
            </div>
        </div>
    )
}

function ShowIconList(props) {
    const list = Icons.map(item => {
        return <SvgIcon name={item.name} icon={item.icon} key={item.icon}/>;
    });

    return (
        <div className="icon-list">
            {list}
        </div>
    )
}

export default {SvgIcon, ShowIconList};

// import React from 'react';
// import useBaseUrl from '@docusaurus/useBaseUrl';
//
// function SvgIcon(props) {
//     const {name, icon} = props;
//     return (
//         <div className={'svg-icon'}>
//             <header className="tile-title">{name}</header>
//             <div className="tile-svg">
//                 <img className="icon" src={useBaseUrl(`/img/${icon}.svg`)}/>
//             </div>
//         </div>
//     )
// }
// function ShowIconList(props) {
//     // let Icons = props.icon;
//     let Icons = JSON.parse(props.icon);
//     const list = Icons.map(item => {
//         return <SvgIcon name={item.name} icon={item.icon} key={item.icon}/>;
//     });
//
//     return (
//         <div className="icon-list">
//             {list}
//         </div>
//     )
// }
//
// export {SvgIcon, ShowIconList};
