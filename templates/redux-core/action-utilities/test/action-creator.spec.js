import CreateAction from '../action-creator';
import { appName } from '../action-type-creator';

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
        expect(CreateAction).toThrow('Please provide a valid reducer and action name');
    });

    it('should fail if no action name is provided', () => {
        expect(() => CreateAction('some_reducer')).toThrow(
            'Please provide a valid reducer and action name'
        );
    });
});
