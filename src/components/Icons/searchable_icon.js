// import React, {useRef, useEffect, useState, memo} from 'https://cdn.skypack.dev/react';
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
// import useBaseUrl from '@docusaurus/useBaseUrl';
// import './searchable.icon.css';

// const iconList = [
//     {
//         "id": "422394",
//         "slug": "chain-hyperlink-interface",
//         "title": "Add",
//         "tags": ["add"]
//     },
// ];
// const obj = {key: "this is the value of the key", anotherKey: "this is another value"}
// console.log(obj);
//
// const App = () => {
//     const [search, setSearch] = useState('');
//     const [iconsResult, setIconsResult] = useState('');
//     const handleChange = event => {
//         setSearch(event.target.value);
//         console.log('value is:', event.target.value);
//     };
//
//     const handleClick = event => {
//         event.preventDefault();
//         const icons = iconList.filter(function (icon) {
//             return icon.tags.some((item) => item.includes(search.toLowerCase()))
//         });
//
//         // <img src="https://www.svgrepo.com/show/422405/find-glass-interface.svg" alt="Find glass interface SVG File" title="Find glass interface SVG File" />
//
//         setIconsResult(icons.map(icon => {
//             return (
//                 <>
//                     <li className={"icon-block"} key={icon.slug}>
//                         <div className={"icon-image"}>
//                             <img
//                                 src={`https://www.svgrepo.com/show/${icon.id}/${icon.slug}.svg`}
//                                 alt={icon.title}
//                                 title={icon.title}
//                             />
//                         </div>
//                         <p className={"icon-name"}>{icon.title}</p>
//                     </li>
//
//                 </>
//             );
//         }));
//         // 👇️ value of input field
//         console.log('Search 👉️', search);
//     };
//
//     // icons will be here filtered
//     const allIcons = iconList.map(icon => {
//         const tagList = icon.tags.map(tag => {
//             return <li key={tag}>{tag}</li>
//         })
//         return (
//             <>
//                 <li className={"icon-block"} key={icon.slug}>
//                     <div className={"icon-image"}>
//                         <img
//                             src={`https://www.svgrepo.com/show/${icon.id}/${icon.slug}.svg`}
//                             alt={icon.title}
//                             title={icon.title}
//                         />
//                     </div>
//                     <p className={"icon-name"}>{icon.title}</p>
//                     <div className={"tags"}>
//                         <h5>Tags:</h5>
//                         <ul className={"tags"}>
//                             {tagList}
//                         </ul>
//                     </div>
//                 </li>
//
//             </>
//         );
//     })
//
// // Input
//     return (
//         <div>
//             <h1>Searchable icon list</h1>
//             <input
//                 type="text"
//                 id="message"
//                 name="message"
//                 onChange={handleChange}
//                 value={search}
//                 autoComplete="off"
//             />
//
//             <button onClick={handleClick}>Search</button>
//
//             <div className={"all-icons"}>
//                 <ul className={"all-icons-list"}>{allIcons}</ul>
//             </div>
//
//             {/*result*/}
//
//             <h3>Search results will appear below</h3>
//             <ul className={"icons-result"}>{iconsResult}</ul>
//         </div>
//     );
// };


// ReactDOM.render(<App/>, document.body);