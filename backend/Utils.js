// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
// red
const ERROR = "\x1b[31m"
// green
const INFO = "\x1b[32m"
// yellow
const WARNING = "\x1b[33m"
const RESET = "\x1b[0m"

const ColorLog = (level, message) => {
    console.log(level, message, RESET)
}

module.exports = {
    ERROR,
    INFO,
    WARNING,
    RESET,
    ColorLog
}