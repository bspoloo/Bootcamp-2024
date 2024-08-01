function darkenColor(color: string, amount: number) {
    let usePound = false;

    if (color[0] === "#") {
        color = color.slice(1);
        usePound = true;
    }

    const num = parseInt(color, 16);
    let r = (num >> 16) - amount;
    let g = (num & 0x0000FF) - amount;
    let b = ((num >> 8) & 0x00FF) - amount;

    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;

    // Convert the components back to a hex string
    const newColor = (g | (b << 8) | (r << 16)).toString(16);

    return (usePound ? "#" : "") + newColor.padStart(6, "0");
}

export default darkenColor