
let emojisList = ["⭐", "👁️", "📌", "✏️", "📆"]



let Docheight = document.documentElement.clientHeight
// let allHeights = paragraphsList.map(text => text.length)
// const totalLengthsReducer = (totalHeights, currentHeight) => totalHeights + currentHeight;
// let totalHeights = allHeights.reduce(totalLengthsReducer)
// let ratio = Docheight / totalHeights

// source for random coloring https://stackoverflow.com/questions/13563471/random-colors-for-circles-in-d3-js-graph/13563700
d3
    .select("body")
    .append('div')
    .styles({
        "z-index": "1000",
        "position": "fixed",
        "top": "0",
        "right": "0"
    })
    .selectAll('div')
    .data(emojisList)
    .enter()
    .append('div')
    .text(d => d)
    .styles({
        "width": "20px",
        "height": (Docheight / emojisList.length) + "px",
        "cursor": "pointer"
    })
