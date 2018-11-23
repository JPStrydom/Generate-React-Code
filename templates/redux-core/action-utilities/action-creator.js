import createActionType from './action-type-creator';

export default function CreateAction(reducerName, actionName) {
    if (!reducerName || !actionName) {
        throw 'Please provide a valid reducer and action name';
    }
    const actionType = createActionType(reducerName, actionName);
    return {
        actionType,
        action: payload => ({
            type: actionType,
            payload
        })
    };
}
