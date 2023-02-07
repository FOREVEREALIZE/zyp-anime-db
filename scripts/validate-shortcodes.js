const fs = require("fs")
var errors = false

const startTime = Date.now().valueOf()
console.log("[INFO ] Starting!")
const shortcodes = JSON.parse(fs.readFileSync("../shortcodes.json"))



/* =====[ LIST OF RESERVED SHORTCODES ]===== */
const reserved_shortcodes = [
    "AS-UNKN",
    "AS-EXAM",
    "AM-UNKN",
    "AM-EXAM"
]



/* =====[ LIST OF FOLDERS TO SCAN ]===== */
const folders = [
    "../anime/series/",
    "../anime/movies/"
]



/* =====[ CHECK FOR RESERVED SHORTCODES ]===== */
for (const reserved of reserved_shortcodes) {
    if (shortcodes[reserved]) {
        console.error("[ERROR] Shortcode " + reserved + " used. " + reserved + " is an exculsive shortcode and must not be declared in shortcodes.json")
    }
}



/* =====[ SCAN FOLDERS AND VALIDATE SHORTCODES ]===== */
for (const folder of folders) {
    for (const file of fs.readdirSync(folder)) {
        const data = JSON.parse(fs.readFileSync(folder + file + "/info.json"))

        if (data.shortcode == undefined) {
            console.error("[ERROR] File " + file + ".json has no shortcode")
            errors = true
            continue
        }

        if (!shortcodes.includes(data.shortcode)) {
            console.error("[ERROR] Shortcode " + data.shortcode + " found in " + file + ".json does not exist in shortcodes.json")
            errors = true
            continue
        }

        shortcodes.splice(shortcodes.indexOf(data.shortcode), 1)
    }
}



/* =====[ INFORM OF EXTRA SHORTCODES ]===== */
for (const leftover of shortcodes) {
    console.error("[ERROR] Shortcode " + leftover + " is not used in any file but defined in shortcodes.json")
    errors = true
}

console.log("[INFO ] Done with " + (errors ? "errors" : "no errors") + "! Took " + (Date.now().valueOf() - startTime).toString() + "ms")
