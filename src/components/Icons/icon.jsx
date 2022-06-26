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

import './styles.icon.css';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

function SvgIcon(props) {
    const {header, icon} = props;
    return (
        <div className={'svg-icon'}>
            <header className="tile-title">{header}</header>
            {/*className="tile-svg"*/}
            <div>
                <img className="icon" src={useBaseUrl(`/img/icon/${icon}.svg`)}/>
                <a href={useBaseUrl(`/img/icon/${icon}.svg`)} download={`${icon}.svg`}><p className="download"></p></a>
            </div>
        </div>

    )
}

export default SvgIcon;