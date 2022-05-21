---
sidebar_position: 3
id: code
title: Code
sidebar_label: Code
---

# Toast Messages

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Installation

<Tabs>
  <TabItem value="bright" label="Javascript">

``` js live=true
<div>
<usu-toast 
    header="Info Message Title" 
    message="Descriptive Message Text for this Info"
></usu-toast>
<h1/>
<usu-toast
status="error"
header="Error Message Title"
message="Descriptive Message Text for this Error"
></usu-toast>
<h1/>
<usu-toast
status="success"
header="Success Message Title"
message="Descriptive Message Text for this Success"
></usu-toast>
<h1/>
<usu-toast
status="warning"
header="Warning Message Title"
message="Descriptive Message Text for this Warning"
></usu-toast>
</div>
```

  </TabItem>

<TabItem value="moody" label="Angular">

```html live=true
<div>
<usu-toast
 status="success"
  header="Success Message Title"
  message="Descriptive Message Text for this success"
></usu-toast>
<h1/>
<usu-toast
  status="info"
  header="Info Message Title"
  message="Descriptive Message Text for this information"
></usu-toast>
<h1/>
<usu-toast
  status="warning"
  header="Warning Message Title"
  message="Descriptive Message Text for this warning"
></usu-toast>
<h1/>
<usu-toast
  status="error"
  header="Error Message Title"
  message="Descriptive Message Text for this error"
></usu-toast>
</div>
```

  </TabItem>

<TabItem value="reflection" label="React">

``` JavaScript live=true
function Toast() {
return (
<div>
<UsuToast status="error"
header="Error Message Title"
message="Descriptive Message Text"/>
</div>
);}
```
  </TabItem>
</Tabs>

### Changelog

import {UsuButton, UsuToast} from '@usu/react-components'

<UsuButton style={{
backgroundColor: 'white',
padding: 0 + 0 + 'px',
marginLeft: 0 + 0 + '80%',
}}>View Changelog</UsuButton>

**1.1.7**   
Patch Changes:

+ Updated dependencies

### Properties

|  Property   |  Attribute  |                                    Description                                    |      Type      |                 Default                 |
|:-----------:|:-----------:|:---------------------------------------------------------------------------------:|:--------------:|:---------------------------------------:|
| `duration`  | `duration`  |  How many milliseconds to wait before hiding the toast. By default, it is set to  |    `number`    |                  8000                   |
|  `header`   |  `header`   |                              The header of the toast                              |    `string`    |                undefined                |
|  `message`  |  `message`  |                             The message of the toast                              |    `string`    |                undefined                |
|  `status`   |  `status`   |                              The status of the toast                              | `ToastStatus`  |  'info', 'error', 'warning', 'success'  |

### Events

|      Event       |    Description     |         Typ          | 
|:----------------:|:------------------:|:--------------------:|
| `usuCloseToast`  |  Closes the toast  | `CustomEvent<void>`  |

### Shadow Parts

|   Slot    |           Description           | 
|:---------:|:-------------------------------:|
|  header   |  The header text of the toast.  |
|  message  |   The body text of the toast.   |

### CSS Custom Properties

|              Name               |             Description              | 
|:-------------------------------:|:------------------------------------:|
|     --usu-toast-background      |     The background of the toast      |
|    --usu-toast-border-radius    |    The border radius of the toast    |
|     --usu-toast-box-shadow      |     The box shadow of the toast      |
|     --usu-toast-color-error     |     The error color of the toast     |
|     --usu-toast-color-info      |     The info color of the toast      |
|    --usu-toast-color-message    |    The message color of the toast    |
|    --usu-toast-color-success    |    The success color of the toast    |
|    --usu-toast-color-warning    |    The warning color of the toast    |
|  --usu-toast-message-font-size  |  The message font size of the toast  |
|     --usu-toast-text-color      |     The text color of the toast      |
|   --usu-toast-title-font-size   |   The title font size of the toast   |
|  --usu-toast-title-font-weight  |  The title font weight of the toast  |

### Dependencies

* [**Button**](https://docusaurus.io/)
* [**Icons**](https://docusaurus.io/)