let style = (styles, text) => {
    let attr = "";
    for (let i in styles) {
        attr += `${styles[i][0]} : ${styles[i][1]};`;
    }
    document.write(`<p style=\"${attr}\">${text}</p>`);
}

let arr = [["color", "violet"], ["font-size", "3rem"], ["text-align", "center"], ["text-decoration", "underline"], ["text-shadow", "1px 1px 8px green"], ["font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"]];
let arr2 = [["color", "purple"], ["font-size", "4rem"], ["text-align", "end"], ["text-decoration", "overline"], ["text-shadow", "1px 1px 2px blue"], ["font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"]];

style(arr, "I Love Arrays!");
style(arr2, "Visual Studio Code --->");