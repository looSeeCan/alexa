const luggageLoading = (input) => {
    console.log("Array of comma seperated integers:", input)
    
    //convert the string of comma seperated integers into an array of integers.
    let join = input.join(",");
    let split = join.split(",");
    let parsInt = [];
    for (let element of split) {
        parsInt.push(parseInt(element));
    };
    input = parsInt;
    console.log("Converted into an array of integers", input);
    
    // 2. When weight is full, container is loaded into the aircraft (max 40lbs.)
    let x = 0;
    let weight = 0;
    let container = [];
    let airCraft = [];

    for (let i = 0; i < input.length; i++) {
        weight += input[i];

        if (weight <= 40) {
            container.push(input[i]);
        } else if (weight > 40) {
            airCraft.push(container);//the weight is > 40. throw the container on the airCraft
            weight = 0;//reset the weight
            container = [];//reset the container
            container.push(input[i]);//push this value in the container. this value is the value that caused the container to be > 40
            weight += input[i];//add it to the weight

            //so it works alright, but what if the last number can be added to another array
        };

    };
    airCraft.push(container);
    console.log("Containers of 40lbs or less loaded into aircraft", airCraft);
    
    // 3. Reorder containers LIFO order. The first for loop reorders the conrtainers.
    let reorderedArray = [];
    for (let k = airCraft.length -1; k >= 0; k--) {
        console.log("Container removed lifo", airCraft[k]);
        for (let l = airCraft[k].length -1; l >= 0; l--) {//the second for loop reorders the elements in the container
            // console.log(airCraft[k][l]);
            reorderedArray.push(airCraft[k][l])
        };
    };

    // 4. Return new reordered array of integers
    return (reorderedArray);
};

const luggageArray = ["30, 5, 6, 20, 40"];

const b = luggageLoading(luggageArray);
console.log("Luggage in containers. lifo", b);
