# angular-microtext

A tiny utility for processing text in your Angular apps. An Angular.js module implementation of the [original Microtext].

## Installation

You can install angular-microtext very easily via [Bower]. Simply execute:

`$ bower install angular-microtext`

## Usage

You only have to inject angular-microtext as a dependency of the app in which you wanna use it:

```javascript
angular.module('SampleApp', ['rodrigoalves.microtext']) // Oh yes
    .controller('itemsController', function($scope) {
});
```

You can use it in your controllers, by also injecting `$filter`, like this:

```javascript
angular.module('SampleApp', ['rodrigoalves.microtext'])
    .controller('itemsController', function($scope, $filter) {
        $scope.appName = $filter("parameterize")("angular microtext"); // angular-microtext
});
```

Now you can use all the angular-microtext methods throughout your HTML templates:

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

There's a small sample Angular.js app that uses angular-microtext inside the `sample` directory.

## Tests

## Author

* Rodrigo Alves <rodrigovieira1994@gmail.com>

## License

Released under the MIT License. See LICENSE.txt for details.

Copyright (c) 2015 Rodrigo Alves

[original Microtext]: https://github.com/rodrigoalvesvieira/microtext.js
[Bower]: http://bower.io
