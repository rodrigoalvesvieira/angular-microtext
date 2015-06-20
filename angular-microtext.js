angular.module('rodrigoalves.microtext', []);

/**
 * A function for breaking a text sentence
 * into an array of words
 * @module angular.module('rodrigoalves.microtext')
 * @method breakSentence
 * @param {String} a text sentence
 * @return {Array} an array of words
 */
angular.module('rodrigoalves.microtext').filter('breakSentence', function() {
    return function(sentence) {
        "use strict";
        return sentence.trim().split(" ");
    };
});

/**
 * A function that takes a sentence as argument
 * and return its first word
 * @module angular.module('rodrigoalves.microtext')
 * @method firstName
 * @param {String} a text sentence
 * @return {String} the first word of the sentence
 */
angular.module('rodrigoalves.microtext').filter('firstName', function(breakSentenceFilter) {
    return function(names) {
        "use strict";
        var brokenNames = breakSentenceFilter(names);
        return brokenNames[0];
    };
});

/**
 * A function that takes a sentence (i.e a full person name) as argument
 * and return its last part, a.k.a the last name
 * @module angular.module('rodrigoalves.microtext')
 * @method lastName
 * @param {String} a text sentence
 * @return {String} the last word of the sentence
 */
angular.module('rodrigoalves.microtext').filter('lastName', function(breakSentenceFilter, firstNameFilter) {
    return function(names) {
        "use strict";
        var brokenNames = breakSentenceFilter(names);

        if (brokenNames.length > 1) {
            return brokenNames[brokenNames.length - 1];
        }

        if (brokenNames.length === 1) {
            return firstNameFilter(names);
        }
    };
});

/**
 * A function for truncating a text sentence
 * in a given length
 * @module angular.module('rodrigoalves.microtext')
 * @method truncate
 * @param {String} a text sentence
 * @param {Number} a sentnce length
 * @return {String} the truncated string
 */
angular.module('rodrigoalves.microtext').filter('truncate', function() {
    return function(sentence, length) {
        "use strict";
        if (sentence.constructor === String && length.constructor === Number) {
            return sentence.slice(0, length) + "...";
        }
    }
});

/**
 * A function that takes a sentence as argument and returns the initials
 * of the terms of the given sentence
 * @module angular.module('rodrigoalves.microtext')
 * @method getInitials
 * @param {String} a text sentence
 * @return {String} the initials of that string's words
 */
angular.module('rodrigoalves.microtext').filter('getInitials', function(breakSentenceFilter) {
    return function(expr) {
        "use strict";
        var brokenNames = breakSentenceFilter(expr),
            abbrevName,
            nameList = [];

        brokenNames.forEach(function (name) {
            nameList.push(name.charAt(0));
        });

        if (nameList.length > 1) {
            abbrevName = nameList.toString().toUpperCase();
            return abbrevName.replace(/\,/g, ". ");
        }
    }
});

/**
 * A function that takes a sentence (i.e a full person name) as argument
 * and return that string in abbreviated form. Example:
 *
 * angular.module('rodrigoalves.microtext').abbrevName("Hari Seldon"); // returns "Hari S."
 * @module angular.module('rodrigoalves.microtext')
 * @method abbrevName
 * @param {String} a text sentence
 * @return {String} the abbreviated form of that string
 */
angular.module('rodrigoalves.microtext').filter('abbrevName', function(breakSentenceFilter) {
    return function(expr) {
        "use strict";
        var brokenNames = breakSentenceFilter(expr);

        if (brokenNames.length > 1) {
            return (brokenNames[0] + " " + brokenNames[1].charAt(0) + ".");
        }

        return brokenNames[0];
    }
});

/**
 * A function that takes an expression and returns the capitalized
 * version of it. Example:
 *
 * angular.module('rodrigoalves.microtext').capitalize("foundation"); // returns "Foundation"
 * @module angular.module('rodrigoalves.microtext')
 * @method capitalize
 * @param {String} a text expression
 * @return {String} the capitalized form of that string
 */
angular.module('rodrigoalves.microtext').filter('capitalize', function() {
    return function(expr) {
        "use strict";
        var capitalized;

        if (expr !== undefined) {
            if (expr.constructor === String) {
                capitalized = expr.charAt(0).toUpperCase() + expr.slice(1);
            } else {
                capitalized = expr.toString();
            }
        }

        return capitalized;
    };
});


/**
 * A function that extracts an excerpt from expression that matches
 * the first instance of phrase.
 *
 * angular.module('rodrigoalves.microtext').excerpt("Who is John Galt?", "John"); // returns "...John Galt?..."
 * @module angular.module('rodrigoalves.microtext')
 * @method excerpt
 * @param {String} a text expression
 * @return {String} a phrase which is supposed to be part of the initial expression.
 */
angular.module('rodrigoalves.microtext').filter('excerpt', function() {
    return function(expr, subseq) {
        "use strict";
        var startPos = expr.indexOf(subseq), outputString;

        if (typeof startPos === "number") {
            return "..." + expr.substr(startPos) + "...";
        }

        return expr;
    }
});

/**
 * A function for partially hiding email addresses and prevent collection from bots and similar mechanisms
 * @module angular.module('rodrigoalves.microtext')
 * @method hideEmail
 * @param {String} an email address
 * @return {String} a partially hidden string correspondent to the informed email address
 *
 * Example:
 * "rodrigo@example.com" becomes "rod...@example.com"
*/
angular.module('rodrigoalves.microtext').filter('hideEmail', function() {
    return function(email) {
        "use strict";

        var avg, splitted, firstPart, secondPart, finalStr;
        splitted = email.split("@");
        firstPart = splitted[0];
        avg = (firstPart.length / 2);
        firstPart = firstPart.substring(0, (firstPart.length - avg));
        secondPart = splitted[1];

        finalStr = firstPart + "...@" + secondPart;
        return finalStr;
    }
});

/**
* @module angular.module('rodrigoalves.microtext')
 * @method parameterize
 * @param {String} the string to be parameterized
 * @return {String} the parameterized string
 *
 * Example:
 * "It was childish to feel disappointed" becomes "it-was-childish-to-feel-disappointed"
 *
*/
angular.module('rodrigoalves.microtext').filter('parameterize', function() {
    return function(string) {
        "use strict";
        return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
    }
});

/**
* @module angular.module('rodrigoalves.microtext')
 * @method hideBadWord
 * @param {String} the string to be changed
 * @return {String} the changed string
*/
angular.module('rodrigoalves.microtext').filter('hideBadWord', function() {
    return function(word) {
        "use strict";
        var i, rand, answer = word[0], replacements = ["@", "!", "$", "#", "&", "*"];

        for (i = 1; i < word.length - 1; i += 1) {
            rand = Math.floor(Math.random() * replacements.length - 1) + 1;
            if (word.charAt(i) === " ") {
                answer += " ";
            } else {
                answer += replacements[rand];
            }
        }

        return answer;
    }
});
