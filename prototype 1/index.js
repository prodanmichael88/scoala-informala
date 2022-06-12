function Vehicle(type,highwayAccess) {
    this.type = type;
    this.highwayAccess = highwayAccess;
}

Vehicle.prototype.drive = function(){
    return `The ${this.type} is driving on the highway`;
}

function Car(type,highwayAccess,fee){
    this.fee = fee;
    Vehicle.call(this,type,highwayAccess);
}
Car.prototype = Object.create(Vehicle.prototype);

function Bus(type,highwayAccess,fee){
    this.fee = fee;
    Vehicle.call(this,type,highwayAccess);
}
Bus.prototype = Object.create(Vehicle.prototype);


function Truck(type,highwayAccess,fee){
    this.fee = fee;
    Vehicle.call(this,type,highwayAccess);
}
Truck.prototype = Object.create(Vehicle.prototype);


function Motorcycle(type,highwayAccess,fee){
    this.fee = fee;
    Vehicle.call(this,type,highwayAccess);
}
Motorcycle.prototype = Object.create(Vehicle.prototype);


function Tractor(type,highwayAccess,fee){
    this.fee = fee;
    Vehicle.call(this,type,highwayAccess);
}
Tractor.prototype = Object.create(Vehicle.prototype);

function Highway(vehicles){
    this.vehicles = vehicles;
}

Highway.prototype.highwayList = function(){
    this.vehicles.forEach((vehicle) => {
            if (vehicle.highwayAccess) {
                console.log(`The ${vehicle.type} can enter highway for ${vehicle.fee} RON`);
                console.log(vehicle.drive());
            } else {
                console.log(vehicle.type +" can't enter highway");
            }
        });
}

const myCar = new Car('Car',true,20);
const myBus = new Bus('Bus',true,25);
const myTruck = new Truck('Truck',true,30);
const myMoto = new Motorcycle('Motorcycle',true,15);
const myTractor = new Tractor('Tractor',false);

vehicleList = [myCar,myBus,myTruck,myMoto,myTractor];
const myHighway = new Highway(vehicleList);
myHighway.highwayList();