function getParameterDefinitions(){
  return[(name: 'width', type: 'float', ititial: 12, caption: 'Circumference in cm' )]  
}

function main(params) {
    return rectangle();
}
