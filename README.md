# Microtext for Angular.js

A tiny utility for processing text in your Angular apps. An Angular.js module implementation of the [original Microtext].

## Installation

You can install angular-microtext very easily via Bower. Simply execute:

`$ bower install angular-microtext`

## Usage

Microtext is a regular Angular.js module. You only have to inject it as a dependency of the app in which you wanna use it.

```javascript
var app = angular.module('SampleApp', ['Microtext']) // Oh yes
    .controller('itemsController', function($scope) {
    });
```

Now you can use all the Microtext methods throughout your HTML templates:

```html
<!-- truncate -->
{{ 'The quick brown fox jumps over the lazy dog.' | truncate: 20 }}

<!-- firstName -->
{{ 'Ayrton Senna' | firstName }}

<!-- lastName !-->
{{ 'Michael Phelps' | lastName }}

<!-- getInitials !-->
{{ 'James Cleveland Owens' | getInitials }}

<!-- abbrevName -->
{{ 'Lionel Messi' | abbrevName }}

<!-- capitalize -->
{{ 'belchior' | capitalize }}

<!-- hideEmail -->
{{ 'rodrigovieira1994@gmail.com' | hideEmail }}

<!-- excerpt -->
{{ "Who is John Galt" | excerpt: 'John '}}

<!-- parameterize -->
{{ 'Bob Dylan' | parameterize }}

<!-- hideBadWord -->
{{ 'Boneheaded' | hideBadWord }}
```

#### Sample

There's a small sample Angular.js app that uses Microtext inside the `sample` directory.

## Tests

Coming soon...

## Author

* Rodrigo Alves <rodrigovieira1994@gmail.com>

## License

Released under the MIT License. See LICENSE.txt for details.

Copyright (c) 2015 Rodrigo Alves

[original Microtext]: https://github.com/rodrigoalvesvieira/microtext.js
