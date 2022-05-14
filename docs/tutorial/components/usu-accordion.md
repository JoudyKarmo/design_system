---
id: usu-accordion
title: usu-accordion
sidebar_label: Accordion
custom_edit_url: https://gitlab.devops.usu.group/usu-shared/usu-ui-components/web-components/blob/master/packages/web-components/src/components/usu-accordion/README.md
---

import useBaseUrl from "@docusaurus/useBaseUrl";


**Encapsulation:** shadow


The Accordion should always wrap Accordion Panels.


## Usage

### Angular

```html
<!-- Allow multiple expanded panels -->
<usu-accordion [multiple]="true">
  <usu-accordion-panel [open]="true">
    <span slot="title">Title 1</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
  <usu-accordion-panel>
    <span slot="title">Title 2</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
</usu-accordion>

<!-- Allow only one expanded panel -->
<usu-accordion [multiple]="false">
  <usu-accordion-panel [open]="true">
    <span slot="title">Title 1</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
  <usu-accordion-panel>
    <span slot="title">Title 2</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
</usu-accordion>
```

### Javascript

```html
<!-- Allow multiple expanded panels -->
<usu-accordion multiple>
  <usu-accordion-panel open>
    <span slot="title">Title 1</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
  <usu-accordion-panel>
    <span slot="title">Title 2</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
</usu-accordion>

<!-- Allow only one expanded panel -->
<usu-accordion>
  <usu-accordion-panel open>
    <span slot="title">Title 1</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
  <usu-accordion-panel>
    <span slot="title">Title 2</span>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </usu-accordion-panel>
</usu-accordion>
```

### React

```jsx
<!-- Allow multiple expanded panels -->
<Accordion multiple>
  <UsuAccordionPanel open="true">
    <span slot="title">Title 1</span>
    Lorem ipsum ...
  </UsuAccordionPanel>
  <UsuAccordionPanel>
    <span slot="title">Title 2</span>
    Lorem ipsum ...
  </UsuAccordionPanel>
</Accordion>

<!-- Allow only one expanded panel -->
<Accordion>
  <UsuAccordionPanel open="true">
    <span slot="title">Title 1</span>
    Lorem ipsum ...
  </UsuAccordionPanel>
  <UsuAccordionPanel>
    <span slot="title">Title 2</span>
    Lorem ipsum ...
  </UsuAccordionPanel>
</Accordion>
```

## Properties

| Property | Attribute | Description | Type | Default |
| -------- | --------- | ----------- | ---- | ------- |
| `multiple` | `multiple` | Whether the accordion should allow multiple expanded accordion panels simultaneously. | `boolean` | false |


## Methods

### ` usuCloseOtherPanels`
`usuCloseOtherPanels(panel: HTMLUsuAccordionPanelElement) => Promise<void>`

Collapses other accordion panels
#### Returns

Type: `Promise<void>`
### ` usuExpandPanel`
`usuExpandPanel(panel: HTMLUsuAccordionPanelElement) => Promise<void>`

Expands a panel of the accordion
#### Returns

Type: `Promise<void>`
### ` usuExpandPanelAbove`
`usuExpandPanelAbove(panel: HTMLUsuAccordionPanelElement) => Promise<void>`

Opens a panel directly on top of the @param panel if there is any<br/>This is used if some panel that is opened is removed from the accordion
#### Returns

Type: `Promise<void>`


## Slots

| Slot | Description |
| ---- | ----------- |
|  | The content of the accordion |
