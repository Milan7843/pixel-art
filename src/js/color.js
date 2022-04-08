var color;

/**
 * Create a new color.
 * 
 * @param {String} color the color.
 */
function Color(color) {
    this.color = color;
}

/**
 * Get the color value.
 * 
 * @returns the color value.
 */
Color.prototype.getColor = function() {
    return this.color;
};