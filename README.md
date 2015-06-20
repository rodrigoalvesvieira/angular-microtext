# microtext-angular

A tiny utility for processing text in your Angular apps. An Angular.js module implementation of the [original Microtext].

## Installation

You can install angular-microtext very easily via [Bower]. Simply execute:

`$ bower install angular-microtext`

## Usage

Microtext is a regular Angular.js module. You only have to inject it as a dependency of the app in which you wanna use it.

```javascript
var app = angular.module('SampleApp', ['rodrigoalves.microtext']) // Oh yes
    .controller('itemsController', function($scope) {
    });
```

Now you can use all the Microtext methods throughout your HTML templates:

```html
<!-- truncate -->
<p>{{ 'The quick brown fox jumps over the lazy dog.' | truncate: 20 }}</p>

<!-- firstName -->
<p>{{ 'Ayrton Senna' | firstName }}</p>

<!-- lastName !-->
<p>{{ 'Michael Phelps' | lastName }}</p>

<!-- getInitials !-->
<p>{{ 'James Cleveland Owens' | getInitials }}</p>

<!-- abbrevName -->
<p>{{ 'Lionel Messi' | abbrevName }}</p>

<!-- capitalize -->
<p>{{ 'belchior' | capitalize }}</p>

<!-- hideEmail -->
<p>{{ 'rodrigovieira1994@gmail.com' | hideEmail }}</p>

<!-- excerpt -->
<p>{{ "Who is John Galt" | excerpt: 'John' }}</p>

<!-- parameterize -->
<p>{{ 'Bob Dylan' | parameterize }}</p>

<!-- hideBadWord -->
<p>{{ 'Boneheaded' | hideBadWord }}</p>
```

#### Sample

There's a small sample Angular.js app that uses Microtext inside the `sample` directory.

## Tests

## Author

* Rodrigo Alves <rodrigovieira1994@gmail.com>

## License

Released under the MIT License. See LICENSE.txt for details.

Copyright (c) 2015 Rodrigo Alves

[original Microtext]: https://github.com/rodrigoalvesvieira/microtext.js
[Bower]: http://bower.io
