// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
// red
export const ERROR = "\x1b[31m"
// green
export const INFO = "\x1b[32m"
// yellow
export const WARNING = "\x1b[33m"
export const RESET = "\x1b[0m"

export const ColorLog = (level, message) => {
    console.log(level, message, RESET)
}