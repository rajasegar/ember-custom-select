# ember-custom-select

[![Build Status](https://travis-ci.org/rajasegar/ember-custom-select.svg?branch=master)](https://travis-ci.org/rajasegar/ember-custom-select) 
[![npm](https://img.shields.io/npm/dm/ember-custom-select.svg)](https://www.npmjs.com/package/ember-custom-select)
[![npm version](http://img.shields.io/npm/v/ember-custom-select.svg?style=flat)](https://npmjs.org/package/ember-custom-select "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![EmberObserver](http://emberobserver.com/badges/ember-custom-select.svg?branch=master)](http://emberobserver.com/addons/ember-custom-select)

Some inspiration for the custom styles for a select element in Ember.


## Demo

[Demo](http://rajasegar.github.io/ember-custom-select/)

## Installation

* `ember install ember-custom-select`

## Features
* Declarative
* 8+ Styles to choose from
* Fully composable
* Customizable

## Usage

Example markup:

### Bar style

```hbs
<section>
  {{#ec-select style='border' placeholder="Preferred contact method"}}
    <option value="email">E-Mail</option>
    <option value="twitter">Twitter</option>
    <option value="linkedin">LinkedIn</option>
  {{/ec-select}}
</section>
    
```

## Selectbox styles

You can replace the **style** property of the component to any of the following styles to get 
a different style variation of your select component.

* border
* underline
* elastic
* slide
* overlay
* rotate
* box-select
* circular

## Custom class names
This component can accept custom class names from the **customClasses** property to 
override the styling and appearance of the select box.

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Installation

* `git clone <repository-url>` this repository
* `cd ember-custom-select`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
