/**
* @author Luis Merino <mail AT luismerino DOT name>
* @copyright 2011
* @license MIT
*/

var _log = function() {
    var args = _slice.call(arguments);
    process.stdout.write(args.shift() + args + "\033[" + ANSI_CODES["off"] + "m");
};

var ANSI_CODES = {
    "off": 0,
    "bold": 1,
    "italic": 3,
    "underline": 4,
    "blink": 5,
    "inverse": 7,
    "hidden": 8,
    "black": 30,
    "red": 31,
    "green": 32,
    "yellow": 33,
    "blue": 34,
    "magenta": 35,
    "cyan": 36,
    "white": 37,
    "black_bg": 40,
    "red_bg": 41,
    "green_bg": 42,
    "yellow_bg": 43,
    "blue_bg": 44,
    "magenta_bg": 45,
    "cyan_bg": 46,
    "white_bg": 47
};

var _slice = Array.prototype.slice;

for (var colour in ANSI_CODES) {
    if (console[colour]) continue;
    
    console[colour] = (function(code) {
        var self = this;
        return function() {
            var args = _slice.call(arguments);
            return _log.apply(self, ["\033[" + code + "m"].concat(args));
        };
    })(ANSI_CODES[colour]);
}