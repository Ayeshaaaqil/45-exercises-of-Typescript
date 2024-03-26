function carDetails (manufacturer: string, modelName: string, ...additionalInfo){

    const car ={manufacturer, modelName, ...Object.fromEntries
    (additionalInfo)};
    return car;
};

const myCarDetails = carDetails("Toyotta","Corolla",[`Colour`, `Black`],
[`year`,2024]);

//messaghe print
console.log(myCarDetails);