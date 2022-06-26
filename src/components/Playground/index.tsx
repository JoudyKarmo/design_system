// /**
//  * Copyright (c) Facebook, Inc. and its affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  */
//
// /* eslint-disable global-require */
//
// // import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import Translate from "@docusaurus/core/lib/client/exports/Translate";
//
// const Playgrounds = [
//     {
//         name: '📦 CodeSandbox',
//         url: 'https://docusaurus.new/codesandbox',
//         description: (
//             <div>
//                 CodeSandbox is a popular playground solution. Runs Docusaurus in a
//                 remote Docker container.
//             </div>
//         ),
//     },
//
// ];
//
// interface Props {
//     name: string;
//     url: string;
//     description: JSX.Element;
// }
//
// function PlaygroundCard({name, url, description}: Props) {
//     return (
//         <div className="col col--6 margin-bottom--lg">
//             <div className={clsx('card')}>
//                 <div className={clsx('card__image')}>
//                     <Link to={url}>
//
//                     </Link>
//                 </div>
//                 <div className="card__body">
//                     <h3>{name}</h3>
//                     <p>{description}</p>
//                 </div>
//                 <div className="card__footer">
//                     <div className="button-group button-group--block">
//                         <Link className="button button--secondary" to={url}>
//                             <Translate id="playground.tryItButton">Try it now!</Translate>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export function PlaygroundCardsRow(): JSX.Element {
//     return (
//         <div className="row">
//             {Playgrounds.map((playground) => (
//                 <PlaygroundCard key={playground.name} {...playground} />
//             ))}
//         </div>
//     );
// }