// In this simple problem the world includes both the environment and the robot
// but in most problems the environment and world would be separate
class World {
    constructor(numFloors) {
        this.location = 1;
        this.floors = [];
        for (let i = 0; i < numFloors; i++) {
            this.floors.push({ dirty: false });
        }
    }

    markDirtyFloor(floorNumber) {
        this.floors[floorNumber].dirty = true;
    }

    simulate(action) {
        switch (action) {
            case 'SUCK':
                this.floors[this.location].dirty = false;
                break;
            case 'UP':
                this.location = 0;
                break;
            case 'RIGHT':
                this.location = 2;
                break;
            case 'DOWN':
                this.location = 3;
                break;
            case 'LEFT':
                this.location = 1;
                break;
        }

        return action;
    }
}


// Rules are defined in code
function reflexVacuumAgent(world) {
    if (world.floors[world.location].dirty) { return 'SUCK'; }
    else if (world.location == 0) { return 'RIGHT'; }
    else if (world.location == 1) { return 'UP'; }
    else if (world.location == 2) { return 'DOWN'; }
    else if (world.location == 3) { return 'LEFT'; }
}

