const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const {Triangle, Circle, Square} = require('./lib/shapes');
const {SVG} = require('./lib/svg')


inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three letters for the logo:',
      validate: function (value) {
        if (value.length > 3) {
          return 'Please enter up to three letters';
        } else if (value.length < 1){
            return 'Please enter at least 1 letter '
        } else {
            return true;
        }
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex value):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select one of the three shapes for the logo:',
      choices: ['circle', 
                'triangle', 
                'square'
            ],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex value):'
    }
  ]) .then(response => {
    let newShape; 
    if (response.shape === "circle") {
        newShape = new Circle()
    } 
    else if (response.shape === "triangle") {
        newShape = new Triangle()
    }
    else if (response.shape === "square") {
        newShape = new Square()
    }
    newShape.setcolor(response.shapeColor)

    let newSVG = new SVG()
    newSVG.setShape(newShape)
    newSVG.setText(response.text, response.textColor)
    fs.writeFileSync("logo.svg", newSVG.renderSVG())

  })












