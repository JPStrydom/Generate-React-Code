import createActionType, { appName } from '../action-type-creator';

describe('Build Action Name - Unit Test', () => {
    it('should return an action name', () => {
        const actual = createActionType('someReducer', 'SOME_ACTION');
        const expected = `${appName}/someReducer/SOME_ACTION`;
        expect(actual).toEqual(expected);
    });

    it('should throw error when reducer name not given', () => {
        expect(createActionType).toThrow('Reducer name cannot be blank');
    });

    it('should throw error when action name not given', () => {
        expect(() => createActionType('someReducer')).toThrow('Action name cannot be blank');
    });
});
