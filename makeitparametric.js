function getParameterDefinitions(){
return [
    {name: 'width', type: 'float', initial: 10, caption: "Curcumference in cm:"},
    {name: 'height', type: 'float', initial: 2, caption: "Height in cm:"},
    {name: 'number_design', type: 'float', initial: 4, caption: "Number of Design"},
    {name: 'height_design', type: 'float', initial: 0.2, caption: "Size of Design:"},
    ]; 
}

function main(params) {
    var design= [];
    var positionheight_of_hole= params.height/2-0.25
    var positionwidth_of_hole= params.width-1
    var hole1= circle(.25).translate([positionheight_of_hole,0.5,0])
    var hole2= circle(.25).translate([positionheight_of_hole,positionwidth_of_hole,0])


    var oval1= circle(params.height_design).scale([0.3, 0.9]).rotateZ(45).translate([1.4,1.25]);
    var oval2= circle(params.height_design).scale([0.3, 0.9]).rotateZ(45+90).translate([1.5,2]);
    var oval3= circle(params.height_design).scale([0.3, 0.9]).rotateZ(135+90).translate([0.65,2.1]);
    var oval4= circle(params.height_design).scale([0.3, 0.9]).rotateZ(135+180).translate([.57,1.3]);
    var center_circle= circle(params.height_design/3).translate([.95, 1.6]);
   
    var design_block= union(oval1, oval2, oval3, oval4, center_circle);



    for (i = 0; i<params.number_design; i++){
        design.push();

    }
    var bracelet= square([params.height, params.width]).subtract(union(hole1,hole2, design_block));

    
    return bracelet;
}
