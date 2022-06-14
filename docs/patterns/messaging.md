---
id: messaging
title:  Messaging
sidebar_label: Messaging
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<BrowserOnly>
{() => {
    const defineBadge = require('@usu/web-components/dist/components/usu-badge').defineCustomElement;
    const defineBannerMessage = require('@usu/web-components/dist/components/usu-banner-message').defineCustomElement;
    const defineSectionMessage = require('@usu/web-components/dist/components/usu-section-message').defineCustomElement;
    const defineToast = require('@usu/web-components/dist/components/usu-toast').defineCustomElement;
    defineBadge();
    defineBannerMessage();
    defineSectionMessage();
    defineToast();
    return null;
}}
</BrowserOnly>



Messages should be used to communicate conditions, indicate an event, or show responses to user actions.

## Message types

### Badges

[//]: # ([link]&#40;#error-messages&#41;)

A badge contains a numeric value, to indicate a running tally or quantity-based summary. Badges are usually placed
before or after the label of the thing they're quantifying, such as the number of votes for an issue. They should only
be used to represent a number, however, in some cases, letters or characters can be used as well. See [**badges
component.**](https:/)

<usu-badge color='primary'> 12 </usu-badge> <usu-badge color='inverted'> 12 </usu-badge> <usu-badge color='default'> 12 </usu-badge> <usu-badge color='important'> 12 </usu-badge> <usu-badge color='add'> +12 </usu-badge> <usu-badge color='remove'> -12 </usu-badge>

### Banners

Use banners at the top of the screen to display critical messaging about loss of data, functionality, or important
site-wide information that affects the user's ability to use the product. Banners should appear one at a time, should
only disappear once the related issue is resolved, and should not be dismissible. Banners appear in the screen by
pushing the entire content below by animating. See [**banner component.**](https:/)

<usu-banner-message status='error'>Error Message</usu-banner-message>
<h1/>
<usu-banner-message status='info'>Info Message</usu-banner-message>
<h1/>
<usu-banner-message status='success'>Success Message</usu-banner-message>
<h1/>
<usu-banner-message status='warning'>Warning Message</usu-banner-message>
<h1/>

### Section Messages

Section messages are used to alert users that something has happened in a section of the screen. They can't be dismissed
and will only disappear once the situation has been resolved or the user has taken action. See [**section message
component.**](https://)

[//]: # (![Section]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-action-Information.png&#41; ![Section]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-action-Warning.png&#41;)

[//]: # ()

[//]: # (![Sections]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-action-Success.png&#41; ![Sections]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-action-Error.png&#41;)

<usu-section-message status='info'>
  <span slot="title">Info Message</span>
 <div>Descriptive Message Text for this Information.</div>
 <a slot="action" href="https://www.usu.com/en/" target="_blank">Possible Action</a>
</usu-section-message>
<h1/>
<usu-section-message status='warning'>
  <span slot="title">Warning Message Title</span>
  <div>Descriptive Message Text for this Information.</div>
  <a slot="action" href="https://www.usu.com/en/" target="_blank">Possible Action</a>
</usu-section-message>
<h1/>
<usu-section-message status='success'>
  <span slot="title">Success Message</span>
  <div>Descriptive Message Text for this Information.</div>
  <a slot="action" href="https://www.usu.com/en/" target="_blank">Possible Action</a>
</usu-section-message>
<h1/>
<usu-section-message status='error'>
  <span slot="title">Error Message</span>
 <div>Descriptive Message Text for this Information.</div>
 <a slot="action" href="https://www.usu.com/en/" target="_blank">Possible Action</a>
</usu-section-message>

### Toast Messages

Toast are used for confirmations, alerts, and acknowledgments that require minimal user interaction. These event-driven
messages appear by default at the bottom-right of the screen, overlapping the content. Other positions like top-right,
or bottom-left are allowed depending on where the particular use case action is taking place. A toast should be placed
with a 16px padding around it. See [**Toast message component.**](https://)

[//]: # (![Section]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-clean-Information.png&#41; ![Section]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-clean-Warning.png&#41;)

[//]: # (![Sections]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-clean-Success.png&#41; ![Sections]&#40;/img/patterns-screenshots/patterns-screenshots/Section-Message-/Section-Message-clean-Error.png&#41;)

<usu-toast
status='info'
header='Information Message Title'
message='Descriptive Message Text for this Information'
/>
<h1/>
<usu-toast status ='warning'
header='Warning Message Title'
message='Descriptive Message Text for this Warning'
/>
<h1/>
<usu-toast status ='success'
header='Success Message Title'
message='Descriptive Message Text for this Success'
/>
<h1/>
<usu-toast status ='error'
header='Error Message Title'
message='Descriptive Message Text for this Error'
/>

## Colors

Message types are assigned appropriate colors and icons to help indicate content and urgency. The available message
types are authentication, confirmation, warning, error, and information. Setting the right color and icon for a message
ensures people understand the nature of the message at a glance, and that they take appropriate action. Get to know more
information about [**colors.**](https:/)

![Section](/img/patterns-screenshots/patterns-screenshots/colors-teaser.png)

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

![Section](/img/patterns-screenshots/patterns-screenshots/icons-teaser.png)
