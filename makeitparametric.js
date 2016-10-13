function getParameterDefinitions(){
return [
    {name: 'width', type: 'float', initial: 10, caption: "Curcumference in cm:"},
    {name: 'height', type: 'float', initial: 2, caption: "Height in cm:"},
    {name: 'height_of_design', type: 'float', initial: .5, caption: "Height of Design:"},
    ]; 
}

function main(params) {
    return square([params.height, params.width]).subtract(circle(params.height_of_design));
}
