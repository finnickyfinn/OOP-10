class SVG{
    constructor(){
        this.text = ""
        this.shape = ""
    }
    setShape(chosenShape){
        this.shape = chosenShape.render()
    }
    setText(chosenText,textColor){
        this.text = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${chosenText}</text>`

    }
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        
                ${this.shape} ${this.text}   
                
                </svg>`
    }
}

module.exports = {SVG}





















