
//makes parameter variables for width, height, number of rows, sizre of center circle, and size of string holes
function getParameterDefinitions(){
return [
    {name: 'width', type: 'float', initial: 10, caption: "Curcumference in cm:"},
    {name: 'height', type: 'float', initial: 2, caption: "Height in cm:"},
    {name: 'number_rows', type: 'float', initial: 1, caption: "Number of Rows of Designs:"},
    {name: 'size_of_circle', type: 'float', initial: 0.07, caption: "Size of Center Circle:"},
    {name: 'size_of_holes', type: 'float', initial: 0.25, caption: "Size of String Holes:"}
    ]; 

}

function main(params) {
    var design= []; //makes an empty array for the first row
    var size= 0.2; 

    //makes the string holes relative to the height and width of the bracelet
    var positionheight_of_hole= params.height/2-params.size_of_holes;
    var positionwidth_of_hole= params.width-1.25/2-params.size_of_holes;
    var hole1= circle(params.size_of_holes).translate([positionheight_of_hole,0.5,0]);
    var hole2= circle(params.size_of_holes).translate([positionheight_of_hole,positionwidth_of_hole,0]);
    var rows= params.height/params.number_rows;

//variables to change the number of rows; used later
    var block = []; //make an empty array
    var row_spacing = 1;
    var col_spacing = 0; //we don't need this
    var totalCols = params.width/(0.93);   //(diameter of block + col_spacing)
    

//makes the ovals and circle that make up the design
    var oval1= circle(size).scale([0.3, 0.9]).rotateZ(45).translate([params.height/2+0.4,1.25]);
    var oval2= circle(size).scale([0.3, 0.9]).rotateZ(45+90).translate([params.height/2+0.5,2]);
    var oval3= circle(size).scale([0.3, 0.9]).rotateZ(135+90).translate([params.height/2-0.35,2.1]);
    var oval4= circle(size).scale([0.3, 0.9]).rotateZ(135+180).translate([params.height/2-0.43,1.3]);
    var center_circle= circle(params.size_of_circle).translate([params.height/2-0.05, 1.6]);
   
   //makes a variable for the entire design
    var design_block= union(oval1, oval2, oval3, oval4, center_circle);


//makes a full row of evenly spaced designs based on the width 
    for (i = 1; i<(params.width-2.5)/0.85; i++){
        design.push(design_block);
        design.push(design_block.translate([0, i*0.85]));
    }



//makes a number of rows based on the variable that the user entered
    for(var row=0;row<params.number_rows;row++) {
        for(var col=0;col<totalCols;col++) {
            var design= union(design)
            block.push(design.translate([row*row_spacing,col*col_spacing, 0]));

        }
    }


    var blockShape = union(block);//makes a union of all of the rows
    var blockCentered = blockShape.center();// centers all of the rows at (0,0)
    var block_row= blockCentered.translate([params.height/2, params.width/2]); //translates it to the center of the bracelet depending on the height and width




//subtract the rows from a square to make the full bracelet
    var bracelet= square([params.height, params.width]).subtract(union(hole1,hole2, block_row));

    
    return bracelet;
}
