
class Vehicle {
    constructor(type,highwayAccess) {
        this.type = type;
        this.highwayAccess = highwayAccess;
    }

    drive() {
        return `The ${this.type} is driving on the highway`
    }
}


class Car extends Vehicle {
    constructor(type,fee,highwayAccess) {
        super(type,highwayAccess)
        this.fee = fee;
    }
}

class Bus extends Vehicle {
    constructor(type,fee,highwayAccess) {
        super(type,highwayAccess)
        this.fee = fee;
    }
}

class Truck extends Vehicle {
    constructor(type,fee,highwayAccess) {
        super(type,highwayAccess)
        this.fee = fee;
    }
}

class Motorcycle extends Vehicle {
    constructor(type,fee,highwayAccess) {
        super(type,highwayAccess)
        this.fee = fee;
    }
}

class Tractor extends Vehicle {
    constructor(type,highwayAccess) {
        super(type,highwayAccess)
    }
}

class Highway {
    constructor(vehicles) {
        this.vehicles = vehicles;
    }
    highwayList() {
        this.vehicles.forEach((vehicle) => {
            if (vehicle.highwayAccess) {
                console.log(vehicle.constructor.name +` can enter highway for ${vehicle.fee} RON`);
                console.log(vehicle.drive());
            } else {
                console.log(vehicle.constructor.name +" can't enter highway");
            }
        });
    }
}

const myCar = new Car('car',20,true);
const myBus = new Bus('bus',25,true);
const myTruck = new Truck('truck',30,true);
const myMoto = new Motorcycle('motorcycle',15,true);
const myTractor = new Tractor('tractor',false);

vehicleList = [myCar,myBus,myTruck,myMoto,myTractor];
const myHighway = new Highway(vehicleList);
myHighway.highwayList();


