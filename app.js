////////////////////////////////////////
// NN.  Neural net natural language exploration.
//

var Network = require("./modules/Network");
var network = new Network();

network.addLayer(15, 7); // Hidden layer, 10 neurons, 7 inputs
network.addLayer(15);
network.addLayer(1);      // Output layer, 1 neuron

var md5 = require("md5");

let iMD5_Range = parseInt("f".repeat(32), 16);

let arrayTraining = [{ input: "I like to paint brush yellow green", result: "art" },
    { input: "Cos = 22 ^ 3 - +", result: "math" },
    { input: "Blue looks lovely near my happy trees", result: "art" },
    { input: "e ^ Pi * i = -1", result: "math" },
    { input: "Paint sets the soul aflight oil water", result: "art" },
    { input: "1 + 8 = 9 KLSD KLSD", result: "math" },
    { input: "Paintbrush oil paint canvas picture frame studio", result: "art" },
    { input: "a - b - KLSD KLSD KLSD", result: "math" },
    { input: "Timmy likes to paint green birds too", result: "art" },
    { input: "1 2 3 4 5 6 7", result: "math" },
    { input: "Fred Flintstone is a cartoon palette paint", result: "art" },
    { input: "+ ( 22 ) KLSD KLSD KLSD", result: "math" },
    { input: "Red green blue yellow black white purple", result: "art" },
    { input: "Dim + / = KLSD KLSD KLSD", result: "math" }];

let arrayArrayTraining = arrayTraining.map((objectItem) => {

    return [
        objectItem.input.split(" ").map((strToken) => {

                let str = md5(strToken);
                let i = parseInt(str, 16);
                return i / iMD5_Range;
            }),
        [(objectItem.result === "art" ? 0 : 1)]
    ];
});

network.train(arrayArrayTraining);

console.log(" ");
console.log(" ");

arrayArrayTraining.forEach((objectItem) => {

        var outputs = network.process(objectItem[0]);
        console.log((outputs[0] < 0.5 ? "art" : "math") + ` [${outputs[0]}]`);
        console.log((objectItem[1] < 0.5 ? "art" : "math"));
    });
console.log(" ");
console.log(" ");

var outputs = network.process("34 + 16 = 45 * i".split(" ").map((strToken) => {

    return parseInt(md5(strToken), 16) / iMD5_Range;
}));
console.log((outputs[0] < 0.5 ? "art" : "math") + ` [${outputs[0]}]`);
console.log("math");

outputs = network.process("Timmy paints Blue oceans yellow red green".split(" ").map((strToken) => {

    return parseInt(md5(strToken), 16) / iMD5_Range;
}));
console.log((outputs[0] < 0.5 ? "art" : "math") + ` [${outputs[0]}]`);
console.log("art");

outputs = network.process("1 + 2 + 3 = 1/12".split(" ").map((strToken) => {

    return parseInt(md5(strToken), 16) / iMD5_Range;
}));
console.log((outputs[0] < 0.5 ? "art" : "math") + ` [${outputs[0]}]`);
console.log("math");

//console.log(network.serialize());
