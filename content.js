
let paragraphsList = []

var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphsList[i] = paragraphs.item(i).textContent;

}

// source for random coloring https://stackoverflow.com/questions/13563471/random-colors-for-circles-in-d3-js-graph/13563700
d3
    .select(".indexer")
    .styles({
        "position": "static",
        "display": "block"
    })
    .data(paragraphsList)
    .enter()
    .append('div')

    .styles({
        "background-color": function () {
            return "hsl(" + Math.random() * 360 + ",100%,50%)";
        }, "width": "50px", "height": d => (d.length) / 20 + "px"
    })
    .on('mouseover', function (d) {


        d3
            .select(this)
            .append('div')
            .text(d => d.substring(0, 15) + "..")
            .styles({
                "position": "absolute",
                "font-size": "12px",
                "margin-left": "60px",
                "background-color": "#ccc",
                "border-radius": "15px",
                "padding": "5px",
                "font-weight": "200"

            })
    })
    .on('mouseout', function (d) {
        d3.select(this).selectAll("*").remove()
    })