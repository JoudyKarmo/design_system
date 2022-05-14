---
id: messaging
title:  Messaging
sidebar_label: Messaging
---

Messages should be used to communicate conditions, indicate an event, or show responses to user actions.

## Message types

### Badges

A badge contains a numeric value, to indicate a running tally or quantity-based summary. Badges are usually placed
before or after the label of the thing they're quantifying, such as the number of votes for an issue. They should only
be used to represent a number, however, in some cases, letters or characters can be used as well. See [**badges
component.**](https:/)


### Banners

Use banners at the top of the screen to display critical messaging about loss of data, functionality, or important
site-wide information that affects the user's ability to use the product. Banners should appear one at a time, should
only disappear once the related issue is resolved, and should not be dismissible. Banners appear in the screen by
pushing the entire content below by animating. See [**badges component.**](https:/)

### Section Messages

Section messages are used to alert users that something has happened in a section of the screen. They can't be dismissed
and will only disappear once the situation has been resolved or the user has taken action. See [**section message
component.**]

### Toast Messages

Toast are used for confirmations, alerts, and acknowledgments that require minimal user interaction. These event-driven
messages appear by default at the bottom-right of the screen, overlapping the content. Other positions like top-right,
or bottom-left are allowed depending on where the particular use case action is taking place. A toast should be placed
with a 16px padding around it. See [**Toast message component.**]

## Colors

Message types are assigned appropriate colors and icons to help indicate content and urgency. The available message
types are authentication, confirmation, warning, error, and information. Setting the right color and icon for a message
ensures people understand the nature of the message at a glance, and that they take appropriate action. Get to know more
information about [**colors.**]

1. Confirmation (G300): Provides a positive response to user actions.
2. Warning (Y300): Used to help users avoid error situations. Consists of a description of potential errors. It should
   provide a recommended next step, and an option to be reminded at a later date.
3. Error (R300): Shown when something goes wrong, or when the user is denied access. This should also provide
   recommended next steps, or a path forward.
4. Information (P300): Conveys information to help the user understand minor contextual or state changes. These are
   typically not in response to a user action.

## Content

### Success messages

Inform the user about the successful completion of an action or a task.

### Information messages

Inform the user about something that could interest him but does not need an interaction from the his part; the message
might suggest a following action.

### Warning messages

Inform the user about the consequences of an action or decision he is about to do or to take, and that might need his
confirmation. An action might be suggested to the user.

### Error messages

Inform the user about an error that has occured and he should take notice of, might suggest a following action. An
action might be suggested to the user.

## Icons

The use of icons changes depends on the information they should transport. This visual indicator makes it easier for
people to understand the message.