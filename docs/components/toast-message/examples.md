---
sidebar_position: 2
id: examples
title: Examples
sidebar_label: Examples
---

# Toast Messages

## Default

The default toast message type includes a dismiss button. All toast messages require a  *`title`*  and an  *`icon`* .
Make sure the icon and color match the intent of your message, such as warning, error, information, or success. Toast
messages are often used within a toast group.

[//]: # (![draw]&#40;/img/toast-messages-screenshots/Toast-Message-Information.png&#41; ![draw]&#40;/img/toast-messages-screenshots/Toast-Message-Warning.png&#41;)

[//]: # ()
[//]: # (![draws]&#40;/img/toast-messages-screenshots/Toast-Message-Success.png&#41;)

[//]: # ()
[//]: # (![draws]&#40;/img/toast-messages-screenshots/Toast-Message-Error.png&#41;)

<UsuToast status='info'
header='Information Message Title'
message='Descriptive Message Text for this Information'
/>
<h1></h1>
<UsuToast status='warning'
header='Information Message Title'
message='Descriptive Message Text for this Information'
/>
<h1></h1>
<UsuToast status='success'
header='Information Message Title'
message='Descriptive Message Text for this Information'
/>
<h1></h1>
<UsuToast status='error'
header='Information Message Title'
message='Descriptive Message Text for this Information'
/>
<h1></h1>

## Actions

Use  *`actions`*  to show a clickable action at the bottom of the toast message. For toast messages where the appearance
is  *`normal`* , the action will show as a link. For all other appearances the actions will be buttons.
