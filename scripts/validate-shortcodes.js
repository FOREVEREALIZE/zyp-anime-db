const startTime = Date.now().valueOf()

console.log("[INFO ] Starting!")

const fs = require("fs")

var errors = false

const shortcodes = JSON.parse(fs.readFileSync("../shortcodes.json"))

for (const file in fs.readdirSync("../animes/")) {
    const data = JSON.parse(fs.readFileSync("../animes/" + file + ".json"))

    if (data.shortcode == undefined) {
        console.error("[ERROR] File " + file + ".json has no shortcode")
        errors = true
    }

    if (shortcodes[data.shortcode] == undefined) {
        console.error("[ERROR] Shortcode " + data.shortcode + " found in " + file + ".json does not exist in shortcodes.json")
        errors = true
    }

    delete shortcodes[data.shortcode]
}

for (const leftover in shortcodes) {
    console.error("[ERROR] Shortcode " + leftover + " is not used in any file but defined in shortcodes.json")
    errors = true
}

console.log("[INFO ] Done with " + (errors ? "errors" : "no errors") + "! Took " + (Date.now().valueOf() - startTime).toString() + "ms")