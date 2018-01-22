////////////////////////////////////////
// Layer.  Collection of neurons.
//

// Require Neuron class.
var Neuron = require("./Neuron");

module.exports = class Layer {

  // .
  constructor(numNeurons, numInputs) {

    this.neurons = new Array(numNeurons);

    for (var i = 0 ; i < this.neurons.length ; i++) {

      this.neurons[i] = new Neuron(numInputs);
    }
  }

  // .
  process(inputs) {

    return this.neurons.map((neuron) => {

        return neuron.process(inputs);
      });
  }
};
