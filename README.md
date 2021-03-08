# state-machine
 
 >This project demos a state machine concept, using 'state-machine' library.

## Run the project

In the project directory, run

#### `npm install`

#### `npm run build`

#### `npm start`


## state-machine library functionality:
The following classes are provided:

**Machine**:
- transition(event: Event)

**abstract State** 
  - transition(event: Event)
  - getPayload()

**abstract Event**
- getName()

Machine should be initialized with an initial  state

Concrete State classes should implement the 'transition' method 

Event name should be a unique identifier
