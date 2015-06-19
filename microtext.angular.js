var Microtext = angular.module('Microtext', []);

Microtext.filter('breakSentence', function() {
    return function(sentence) {
        "use strict";
        return sentence.trim().split(" ");
    };
});

Microtext.filter('firstName', function(breakSentenceFilter) {
    return function(names) {
        "use strict";
        var brokenNames = breakSentenceFilter(names);
        return brokenNames[0];
    };
});

Microtext.filter('lastName', function(breakSentenceFilter, firstNameFilter) {
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

Microtext.filter('truncate', function() {
    return function(sentence, length) {
        "use strict";
        if (sentence.constructor === String && length.constructor === Number) {
            return sentence.slice(0, length) + "...";
        }
    }
});

Microtext.filter('getInitials', function(breakSentenceFilter) {
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

Microtext.filter('abbrevName', function(breakSentenceFilter) {
    return function(expr) {
        "use strict";
        var brokenNames = breakSentenceFilter(expr);

        if (brokenNames.length > 1) {
            return (brokenNames[0] + " " + brokenNames[1].charAt(0) + ".");
        }

        return brokenNames[0];
    }
});

Microtext.filter('capitalize', function() {
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

Microtext.filter('excerpt', function() {
    return function(expr, subseq) {
        "use strict";
        var startPos = expr.indexOf(subseq), outputString;

        if (typeof startPos === "number") {
            return "..." + expr.substr(startPos) + "...";
        }

        return expr;
    }
});

Microtext.filter('hideEmail', function() {
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

Microtext.filter('parameterize', function() {
    return function(string) {
        "use strict";
        return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
    }
});

Microtext.filter('hideBadWord', function() {
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
