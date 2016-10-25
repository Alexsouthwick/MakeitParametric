function getParameterDefinitions(){
return [
    {name: 'width', type: 'float', initial: 10, caption: "Curcumference in cm:"},
    {name: 'height', type: 'float', initial: 2, caption: "Height in cm:"},
    {name: 'number_rows', type: 'float', initial: 4, caption: "Number of Rows of Designs:"},
    {name: 'size_of_circle', type: 'float', initial: 0.07, caption: "Size of Center Circle:"},
    {name: 'size_of_holes', type: 'float', initial: 0.25, caption: "Size of String Holes:"},
    ]; 

}

function main(params) {
    var design= [];
    var size= 0.2;
    var positionheight_of_hole= params.height/2-params.size_of_holes
    var positionwidth_of_hole= params.width-1.25/2-params.size_of_holes
    var hole1= circle(params.size_of_holes).translate([positionheight_of_hole,0.5,0])
    var hole2= circle(params.size_of_holes).translate([positionheight_of_hole,positionwidth_of_hole,0])
    var rows= params.height/params.number_rows


    // var oval1= circle(size).scale([0.3, 0.9]).rotateZ(45).translate([1.4,1.25]);
    // var oval2= circle(size).scale([0.3, 0.9]).rotateZ(45+90).translate([1.5,2]);
    // var oval3= circle(size).scale([0.3, 0.9]).rotateZ(135+90).translate([0.65,2.1]);
    // var oval4= circle(size).scale([0.3, 0.9]).rotateZ(135+180).translate([0.57,1.3]);
    // var center_circle= circle(size/3).translate([.95, 1.6]);

    // var oval1= circle(size).scale([0.3, 0.9]).rotateZ(45).translate([params.height/2+0.4,1.25]);
    // var oval2= circle(size).scale([0.3, 0.9]).rotateZ(45+90).translate([params.height/2+0.5,2]);
    // var oval3= circle(size).scale([0.3, 0.9]).rotateZ(135+90).translate([params.height/2-0.35,2.1]);
    // var oval4= circle(size).scale([0.3, 0.9]).rotateZ(135+180).translate([params.height/2-0.43,1.3]);
    // var center_circle= circle(params.size_of_circle).translate([params.height/2-0.05, 1.6]);

    var oval1= circle(size).scale([rows*0.15, 0.9]).rotateZ(45).translate([params.height/2+0.4,1.25]);
    var oval2= circle(size).scale([rows*0.15, 0.9]).rotateZ(45+90).translate([params.height/2+0.5,2]);
    var oval3= circle(size).scale([rows*0.15, 0.9]).rotateZ(135+90).translate([params.height/2-0.35,2.1]);
    var oval4= circle(size).scale([rows*0.15, 0.9]).rotateZ(135+180).translate([params.height/2-0.43,1.3]);
    var center_circle= circle(params.size_of_circle).translate([params.height/2-0.05, 1.6]);
   
   
    var design_block= union(oval1, oval2, oval3, oval4, center_circle);



    for (i = 1; i<(params.width-2.5)/0.85; i++){
        design.push(design_block.translate([0, i*0.85]));
    }






    var bracelet= square([params.height, params.width]).subtract(union(hole1,hole2, design_block, design));

    
    return bracelet;
}
