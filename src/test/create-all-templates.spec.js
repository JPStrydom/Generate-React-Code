'use strict';

const fs = require('fs');
const path = require('path');

const { getRootPath } = require('../generator-utilities');

const createAllTemplates = require('../create-all-templates');

const ROOT_PATH = getRootPath();

describe('Create All Templates - Unit Test', () => {
    describe('createAllTemplates', () => {
        it('should create all template', () => {
            const name = 'some-complete-template';
            const directory = 'some-complete-template';

            createAllTemplates(name, directory);

            expect(fs.existsSync(path.join(ROOT_PATH, directory))).toBeTruthy();

            expect(
                fs.existsSync(path.join(ROOT_PATH, directory, name, `${name}.view.js`))
            ).toBeTruthy();
        });
    });
});
