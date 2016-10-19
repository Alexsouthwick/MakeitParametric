function getParameterDefinitions(){
return [
    {name: 'width', type: 'float', initial: 10, caption: "Curcumference in cm:"},
    {name: 'height', type: 'float', initial: 2, caption: "Height in cm:"},
    {name: 'height_of_design', type: 'float', initial: .5, caption: "Height of Design:"},
    {name: 'number_design', type: 'float', initial: 4, caption: "Number of Design"}
    ]; 
}

function main(params) {
    var design= [];
    for (i = 0; i<params.number_design; i++){
        design.push(circle(params.height_of_design))

    }
    var bracelet= square([params.height, params.width]).subtract(circle(params.height_of_design));
    return bracelet;
}
