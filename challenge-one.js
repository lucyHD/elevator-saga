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

        })
        
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum)
        })
        
        elevatorTwo.on("floor_button_pressed", function(floorNum) {
            elevatorTwo.goToFloor(floorNum)
        })
        
        elevatorThree.on("floor_button_pressed", function(floorNum) {
            elevatorThree.goToFloor(floorNum)
        })
        
        elevatorFour.on("floor_button_pressed", function(floorNum) {
            elevatorFour.goToFloor(floorNum)
        })

        // // Whenever the elevator is idle (has no more queued destinations) ...
        // elevator.on("idle", function() {
        //     // let's go to all the floors (or did we forget one?)
            
        // });
        
        // elevatorTwo.on("idle", function() {
        //     // let's go to all the floors (or did we forget one?)
           
        // });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}



//elevators, floors/
//both arrays of objects