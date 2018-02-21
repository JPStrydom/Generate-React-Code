import CreateAction from '../create-action';
import { appName } from '../build-action-type';

describe('Create Action - Unit Test', () => {
    it('should create an action for reducer', () => {
        const reducerName = 'some_reducer';
        const actionName = 'SOME_ACTION';

        const actual = new CreateAction(reducerName, actionName);

        const expected = {
            actionType: `${appName}/some_reducer/SOME_ACTION`,
            action: {
                type: `${appName}/some_reducer/SOME_ACTION`,
                payload: {
                    name: 'field name',
                    value: 'field value'
                }
            }
        };

        expect(actual.actionType).toEqual(expected.actionType);
        expect(
            actual.action({
                name: 'field name',
                value: 'field value'
            })
        ).toEqual(expected.action);
    });

    it('should fail if no reducer name is provided', () => {
        try {
            CreateAction();
        } catch (e) {
            expect(e.message).toEqual('Please provide a valid reducer and action name');
        }
    });

    it('should fail if no action name is provided', () => {
        try {
            const reducerName = 'some_reducer';
            CreateAction(reducerName);
        } catch (e) {
            expect(e.message).toEqual('Please provide a valid reducer and action name');
        }
    });
});
