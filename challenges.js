{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var elevatorTwo = elevators[1];
        var elevatorThree = elevators[2];
        var elevatorFour = elevators[3];


        elevators.forEach(function (elevator, index) {

            elevator.on("floor_button_pressed", function(floorNum) {
                    elevator.goToFloor(floorNum);
            })

            elevator.on("up_button_pressed down_button_pressed", function() {
                elevator.goToFloor(floors.floorNum())
            })

            elevator.on("idle", function() {
                elevator.goToFloor(0);
              
                
            })


          

        })

        floors.forEach(function(floor) {
            floor.on("up_button_pressed", function() {
                elevator.goToFloor()
            })
        })


      
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}


