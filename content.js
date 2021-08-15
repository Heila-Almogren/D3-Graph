
let paragraphsList = []

var paragraphs = document.getElementsByTagName("p");

let len = paragraphs.length
for (var i = 0; i < len; i++) {
    paragraphsList[i] = {
        "tooltip": paragraphs.item(i).textContent,
        "annotations": []
    }
}

// random annotations
paragraphsList[5]["annotations"] = [
    {
        "annotation": "random thought",
        "emoji": "🤔"
    },
    {
        "annotation": "random thought",
        "emoji": "😲"
    }
]

paragraphsList[12]["annotations"] = [

    {
        "annotation": "random thought",
        "emoji": "💡"
    }
]

paragraphsList[22]["annotations"] = [

    {
        "annotation": "random thought",
        "emoji": "👌"
    }
]


let Docheight = document.documentElement.clientHeight
let allHeights = paragraphsList.map(item => item["tooltip"].length)
const totalLengthsReducer = (totalHeights, currentHeight) => totalHeights + currentHeight;
let totalHeights = allHeights.reduce(totalLengthsReducer)
let ratio = Docheight / totalHeights
// let emojisList = ["⭐", "👁️", "📌", "✏️", "📆"]



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
        }, "width": "25px", "height": d => {

            return parseInt((JSON.stringify(d["tooltip"])).length) * ratio + "px"
        }
    })
    .on('mouseover', function (d) {


        d3
            .select(this)
            .append('div')
            .classed("tooltip", true)
            .text(d => d["tooltip"].substring(0, 15) + "..")
            .styles({
                "position": "absolute",
                "font-size": "12px",
                "right": "60px",
                "background-color": "#ccc",
                "border-radius": "15px",
                "padding": "5px",
                "font-weight": "200",
                "cursor": "pointer"
            })
    })
    .on('mouseout', function (d) {
        d3.select(this).selectAll(".tooltip").remove()
    })
    .on('click', function () {
        window.scroll(0, 1200);
    })

    .selectAll('div')
    .data(d => d["annotations"])
    .enter()
    .append('div')
    .styles({
        "font-size": "15px",
        "cursor": "pointer"

    })
    .text(d => d["emoji"])




// d3.selectAll('p')
//     .insert('div', ":first-child")
//     .text(function () {
//         return emojisList[Math.floor(Math.random() * 5)]
//     })


// d3
//     .select("body")
//     .append('div')
//     .styles({
//         "z-index": "1000",
//         "position": "fixed",
//         "top": "0",
//         "right": "0"
//     })
//     .selectAll('div')
//     .data(emojisList)
//     .enter()
//     .append('div')
//     .text(d => d)
//     .styles({
//         "width": "20px",
//         "height": (Docheight / emojisList.length) + "px",
//         "cursor": "pointer"
//     })