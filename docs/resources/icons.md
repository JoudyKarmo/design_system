---
id: icon-library
title: Icon library
sidebar_label: Icon library
collapsed: false
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import BrowserOnly from '@docusaurus/BrowserOnly';

[//]: # (import searchable_icon from '/src/components/Icons/searchable_icon.js';)
import SvgIcon from '/src/components/Icons/icon.jsx';

<BrowserOnly>
    {() => {
        const defineIcon = require('@usu/web-components/dist/components/usu-icon').defineCustomElement;
        defineIcon();
        return null;
    }}
</BrowserOnly>

[//]: # (<usu-icon type="close" size="large">)

[//]: # ()
[//]: # (</usu-icon>)

[//]: # (<SvgIcon header="close" imgSrc="/img/icon/close.svg"></SvgIcon>)

[//]: # (<desc>A generic close button for dismissing content like modals and alerts.</desc>)

[//]: # ()

[//]: # (<metadata>delete,remove,x,close,remove all,calculator,calculate,exit,cancel,reject,clear,disable,disabled,block,throw away,cut,calculator button,delete sign</metadata> <h1/>)

<SvgIcon header="Close" icon="close" /> <h1/>
<SvgIcon header="Add" icon="add" /> <h1/>
<SvgIcon header="Delete" icon="delete" /> <h1/>

[//]: # (<searchable_icon>add</searchable_icon>)
    


[//]: # (<SvgIcon><use href="path/to/img/icon/close.svg"/> </SvgIcon>)

[//]: # ([Download]&#40;/img/icon/add.svg&#41;)

### [Add](https://app.zeplin.io/styleguide/5e734de99fde56ba6ee7aa12/components?coid=5e73539f560075bd37813f68)

<img alt="icon/add" src={useBaseUrl('/img/icon/add.svg')} />

[//]: # (### [Close]&#40;https://app.zeplin.io/styleguide/5e734de99fde56ba6ee7aa12/components?coid=5e73539f7d47edbe00f3778b&#41;)

[//]: # ()

[//]: # (<img alt="icon/close" src={useBaseUrl&#40;'/img/icon/close.svg'&#41;} />)
