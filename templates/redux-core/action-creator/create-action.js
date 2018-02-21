import buildActionType from './build-action-type';

function CreateAction(reducerName, actionName) {
    if (!reducerName || !actionName) {
        throw new Error('Please provide a valid reducer and action name');
    }
    const actionType = buildActionType(reducerName, actionName);
    return {
        actionType,
        action: payload => ({
            type: actionType,
            payload
        })
    };
}

export default CreateAction;
