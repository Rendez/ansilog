require("./ansilog");

var ANSI_CODES = {
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

console.log("\r");
for (var colour in ANSI_CODES)
    console[colour]("Test: ansi text '" + colour + "' | code " + ANSI_CODES[colour] + "\n");
console.log("\033[0m\r");