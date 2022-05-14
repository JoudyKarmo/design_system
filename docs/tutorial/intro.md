---
sidebar_position: 1
id: all-about-one-usu
title: All-about-one-usu
sidebar_label: All-about-one-usu
---

# Toast Messages

This is a description about the Toast Message Component

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[//]: # (import styles from '../styles.module.css';)

<Tabs>
  <TabItem value="usage" label="Usage" default>

This is a description about the Toast Message Component

## Anatomy

1. Icon and title: Toast messages should always contain a concise title and an appropriate icon, color (or user avatar).
2. Message (optional): Toast messages descriptions are restricted to five lines in length. If the text overflows, it
   truncates using an ellipsis.
3. Actions (optional): A maximum of two links that enable users to act on the Toast Message content.
4. Dismiss: Use to close the Toast message. This is for default Toast messages only.

![Anatomy](/img/Toast.png)

## Rules / Best practice

In general, there are four possible types of messages: info, success, warning and error.
But - toast messages should be used for general, **event-driven messages that are dismissible.** One common use case for
a toast message is as a notification about recent activity or as informing the user about a successful action. This
allows people to easily jump into a conversation or activity feed to get a quick update.

It should not be used to inform the user about an error or a warning, as the user might not see the message in time.
Also, if an interaction with the user is necessary or an action should be suggested, the toast message is not the
appropriate messaging format. For these cases [section messages](https://docusaurus.io/) Read the
or [modals](https://docusaurus.io/) should be used.

## Content guidelines

Toast messages appear at the bottom left of the screen and overlay any content.
There are four types of Toast Messages: info, success, warning and error.
Default Toast Messages are for general, event-driven messages that are dismissible. For example, as notifications for
recent activity. One common use case for default Toast Messages is as a notification about recent activity. This allows
people to easily jump into a conversation or activity feed to get a quick update. In these cases, an avatar is used
instead of the icon.

### Information

![Anatomy](/img/Info.png)

* Say why it's important.
* Get right to the point.
* Based on the situation, you can add more "wink" to your message, but keep it clear and concise.

### Success

![Anatomy](/img/Success.png)

* Messages that appear more frequently should have less wink and be more concise.
* Messages that appear after a bigger or more infrequent action can be more playful.

### Warning

![Anatomy](/img/Warning.png)

* Put yourself in the user's shoes.
* Make sure you're not talking about something that has already occurred (this should be an error message instead).

### Error

![Anatomy](/img/Error.png)

* Avoid blame and accept if something is our fault - "we're having trouble connecting" rather than "you're having
  connection issues."
* Let the user know what's causing the error, rather than writing a general error message that works for a number of
  things.
* Be clear and conversational by thinking about how you might explain a technical error to your non-technical friends.

## Accessibility

Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum.
Nullam id dolor id nibh ultricies vehicula ut id elit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi
porta gravida at eget metus.

Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis
parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna
mollis euismod. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
consectetur et.
Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Morbi
leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Cras justo odio,
dapibus ac facilisis in, egestas eget quam.

## Related

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec sed odio dui.
See [here](https://docusaurus.io/) or [there](https://docusaurus.io/)
</TabItem>

  <TabItem value="examples" label="Examples" >

  </TabItem>
  <TabItem value="code" label="Code">

### Installation

#### Javascript

```
<!-- Info (Default) Toast -->
<usu-toast 
    header="Info Message Title" 
    message="Descriptive Message Text for this Info"
></usu-toast>

<!-- Error Toast -->
<usu-toast 
    status="error"
    header="Error Message Title"
    message="Descriptive Message Text for this Error"
></usu-toast>

<!-- Success Toast -->
<usu-toast 
    status="success"
    header="Success Message Title"
    message="Descriptive Message Text for this Success"
></usu-toast>

<!-- Warning Toast -->
<usu-toast 
    status="warning"
    header="Warning Message Title"
    message="Descriptive Message Text for this Warning"
></usu-toast>
```

#### Angular

```
<!-- The UsuToastService usage of the usu-toast-container should be prefered to the direct component usage -->

<!-- Success toast -->
<usu-toast
 status="success"
  header="Success Message Title"
  message="Descriptive Message Text for this success"
></usu-toast>

<!-- Info toast -->
<usu-toast
  status="info"
  header="Info Message Title"
  message="Descriptive Message Text for this information"
></usu-toast>

<!-- Warning toast -->
<usu-toast
  status="warning"
  header="Warning Message Title"
  message="Descriptive Message Text for this warning"
></usu-toast>

<!-- Error toast -->
<usu-toast
  status="error"
  header="Error Message Title"
  message="Descriptive Message Text for this error"
></usu-toast>
```

#### React

```
<UsuToast
 status='error'
  header='Error Message Title'
  message='Descriptive Message Text for this Error'
/>
```

**Changelog**

1.1.7 [View Changelog](http://www.google.com)

Patch Changes:

* Updated dependencies

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
* [Button](https://docusaurus.io/)
* [Icons](https://docusaurus.io/)


</TabItem>
</Tabs>

