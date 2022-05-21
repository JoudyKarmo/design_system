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

![draw](/img/toast-messages-screenshots/Toast-Message-Information.png) ![draw](/img/toast-messages-screenshots/Toast-Message-Warning.png)

![draws](/img/toast-messages-screenshots/Toast-Message-Success.png)

![draws](/img/toast-messages-screenshots/Toast-Message-Error.png)

## Actions

Use  *`actions`*  to show a clickable action at the bottom of the toast message. For toast messages where the appearance
is  *`normal`* , the action will show as a link. For all other appearances the actions will be buttons.
