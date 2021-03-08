import { machine } from './threeEventsStateMachine/threeEventsStateMachine';
import { getEvent, Events } from './threeEventsStateMachine/events';
import { Request, Response } from 'express';


export const handleClick = (req: Request, res: Response) => {

    const { button } = req.body;
    const event = getEvent(button);

    if (event) {
        const msg = machine.transition(event);
        res.send(msg);
    } else {
        res.status(400).send(`Button must be ${Events.A} or ${Events.B}`);
    }
}