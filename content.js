
let paragraphsList = []

var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphsList[i] = paragraphs.item(i).textContent;

}

let Docheight = document.documentElement.clientHeight
let allHeights = paragraphsList.map(text => text.length)
const totalLengthsReducer = (totalHeights, currentHeight) => totalHeights + currentHeight;
let totalHeights = allHeights.reduce(totalLengthsReducer)
let ratio = Docheight / totalHeights



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
    .data(paragraphsList)
    .enter()
    .append('div')

    .styles({
        "background-color": function () {
            return "hsl(" + 360 * Math.random() + ',' +
                (25 + 70 * Math.random()) + '%,' +
                (85 + 10 * Math.random()) + '%)';
        }, "width": "50px", "height": d => (d.length) * ratio + "px"
    })
    .on('mouseover', function (d) {


        d3
            .select(this)
            .append('div')
            .text(d => d.substring(0, 15) + "..")
            .styles({
                "position": "absolute",
                "font-size": "12px",
                "right": "60px",
                "background-color": "#ccc",
                "border-radius": "15px",
                "padding": "5px",
                "font-weight": "200"

            })
    })
    .on('mouseout', function (d) {
        d3.select(this).selectAll("*").remove()
    })