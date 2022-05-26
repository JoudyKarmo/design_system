---
sidebar_position: 1
id: usage
title: Usage
sidebar_label: Usage
---

# Toast Messages

This is a description about the Toast Message Component

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Toast are used for confirmations, alerts, and acknowledgments that require **minimal** user interaction. These
event-driven messages appear by default at the bottom-right of the screen, overlapping the content. Other positions like
top-right, or bottom-left are allowed depending on where the particular use case action is taking place. A toast should
be      
placed with a 16px padding around it (See example bellow). If the user does not close them, the toast message is closed
automatically after 5 seconds.

## Anatomy

1. Icon and title: Toast messages should always contain a concise title and an
   appropriate [icon](https://atlassian.design/foundations/iconography)
   , [color](https://atlassian.design/foundations/iconography) (or user avatar).
2. Message (optional): Toast messages descriptions are restricted to five lines in length. If the text overflows, it
   truncates using an ellipsis.
3. Actions (optional): A maximum of two links that enable users to act on the Toast Message content.
4. Dismiss: Use to close the Toast message. This is for default Toast messages only.

![Anatomy](/img/toast-messages-screenshots/explainer-teaser.png)

## Rules / Best practice

In general, there are four possible types of messages: info, success, warning and error.    
But - toast messages should be used for general, **event-driven messages that are dismissible.** One common use case    
for a toast message is as a notification about recent activity or as informing the user about a successful action.
This     
allows people to easily jump into a conversation or activity feed to get a quick update.

It should not be used to inform the user about an error or a warning, as the user might not see the message in time.
Also,   
if an interaction with the user is necessary or an action should be suggested, the toast message is not the
appropriate messaging format. For these cases [**section messages**](https://docusaurus.io/) Read the
or [**modals**](https://docusaurus.io/) should be used.

## Content guidelines

Toast messages appear at the bottom left of the screen and overlay any content.     
There are four types of Toast Messages: info, success, warning and error.       
Default Toast Messages are for general, event-driven messages that are dismissible. For example, as notifications for   
recent activity. One common use case for default Toast Messages is as a notification about recent activity. This
allows   
people to easily jump into a conversation or activity feed to get a quick update. In these cases, an avatar is used
instead     
of the icon.

### Information

import {UsuToast} from '@usu/react-components'

<UsuToast
status='info'
header='Information Message Title'
message='Descriptive Message Text for this Information'
/>

* Say why it's important.
* Get right to the point.
* Based on the situation, you can add more "wink" to your message, but keep it clear and concise.

[//]: # (import {UsuSearch, UsuRadioButton} from '@usu/react-components')

[//]: # ()

[//]: # (<UsuSearch> search </UsuSearch>)

[//]: # ()

[//]: # (<UsuRadioButton> hi </UsuRadioButton>)

### Success

<UsuToast
status='success'
header='Success Message Title'
message='Descriptive Message Text for this Success'
/>

* Messages that appear more frequently should have less wink and be more concise.
* Messages that appear after a bigger or more infrequent action can be more playful.

### Warning

[//]: # (![Anatomy]&#40;/img/toast-messages-screenshots/Toast-Message-Warning.png&#41;)

<UsuToast
status='warning'
header='Warning Message Title'
message='Descriptive Message Text for this Warning'
/>

* Put yourself in the user's shoes.
* Make sure you're not talking about something that has already occurred (this should be an error message instead).

### Error

[//]: # (![Anatomy]&#40;/img/toast-messages-screenshots/Toast-Message-Error.png&#41;)

<UsuToast
status='error'
header='Error Message Title'
message='Descriptive Message Text for this Error'
/>

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
See [**here**](https://docusaurus.io/) or [**there**](https://docusaurus.io/)


 