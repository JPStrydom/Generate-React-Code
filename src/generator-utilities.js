'use strict';

const fs = require('fs');
const shell = require('shelljs');
const path = require('path');
const prettier = require('prettier');
const commander = require.resolve('commander');
const _ = require('lodash');

const NODE_MODULES_PATH = 'node_modules';
const ROOT_PATH = getRootPath();
const PRETTIER_CONFIG = {
    tabWidth: 4,
    singleQuote: true,
    printWidth: 100
};

function getAllDirectories(name, directory, native, redux, reduxCore, reduxCoreDirectory) {
    if (reduxCore) {
        return getReduxCoreDirs(reduxCoreDirectory);
    }
    return getReactComponentDirs(name, directory, native, redux);
}

function getReduxCoreDirs(reduxCoreDirectory) {
    const templateDirectory = path.join(__dirname, '..', 'templates', 'redux-core');
    const generatedDirectory = path.join(ROOT_PATH, reduxCoreDirectory);

    if (!fs.existsSync(generatedDirectory)) {
        shell.mkdir('-p', path.join(generatedDirectory, 'action-utilities', 'test'));
    }

    return {
        store: {
            template: path.join(templateDirectory, 'store.js'),
            generated: path.join(generatedDirectory, 'store.js')
        },
        rootReducer: {
            template: path.join(templateDirectory, 'root-reducer.js'),
            generated: path.join(generatedDirectory, 'root-reducer.js')
        },
        createAction: {
            template: path.join(templateDirectory, 'action-utilities', 'action-creator.js'),
            generated: path.join(generatedDirectory, 'action-utilities', 'action-creator.js')
        },
        createActionType: {
            template: path.join(templateDirectory, 'action-utilities', 'action-type-creator.js'),
            generated: path.join(generatedDirectory, 'action-utilities', 'action-type-creator.js')
        },
        createActionTest: {
            template: path.join(
                templateDirectory,
                'action-utilities',
                'test',
                'action-creator.spec.js'
            ),
            generated: path.join(
                generatedDirectory,
                'action-utilities',
                'test',
                'action-creator.spec.js'
            )
        },
        createActionTypeTest: {
            template: path.join(
                templateDirectory,
                'action-utilities',
                'test',
                'action-type-creator.spec.js'
            ),
            generated: path.join(
                generatedDirectory,
                'action-utilities',
                'test',
                'action-type-creator.spec.js'
            )
        }
    };
}

function getReactComponentDirs(name, directory, native, redux) {
    const subDir = native ? 'native' : 'web';
    const subSubDir = redux ? 'react-redux' : 'react';

    const templateDirectory = path.join(__dirname, '..', 'templates', subDir, subSubDir);
    const generatedDirectory = path.join(ROOT_PATH, directory, name);

    if (!fs.existsSync(generatedDirectory)) {
        shell.mkdir('-p', path.join(generatedDirectory, 'test'));
    }

    const reactDirs = {
        view: {
            template: path.join(templateDirectory, 'template.view.js'),
            generated: path.join(generatedDirectory, `${name}.view.js`)
        },
        viewTest: {
            template: path.join(templateDirectory, 'test', 'template.view.spec.js'),
            generated: path.join(generatedDirectory, 'test', `${name}.view.spec.js`)
        }
    };

    if (!native) {
        reactDirs.stylesheet = {
            template: path.join(templateDirectory, '_template.styles.scss'),
            generated: path.join(generatedDirectory, `_${name}.styles.scss`)
        };
    }

    if (!redux) {
        return reactDirs;
    }

    const reduxDirs = {
        container: {
            template: path.join(templateDirectory, 'template.container.js'),
            generated: path.join(generatedDirectory, `${name}.container.js`)
        },
        containerTest: {
            template: path.join(templateDirectory, 'test', 'template.container.spec.js'),
            generated: path.join(generatedDirectory, 'test', `${name}.container.spec.js`)
        },
        reducer: {
            template: path.join(templateDirectory, 'template.reducer.js'),
            generated: path.join(generatedDirectory, `${name}.reducer.js`)
        },
        reducerTest: {
            template: path.join(templateDirectory, 'test', 'template.reducer.spec.js'),
            generated: path.join(generatedDirectory, 'test', `${name}.reducer.spec.js`)
        }
    };

    return _.assign(reactDirs, reduxDirs);
}

function getAllPlaceholderNames(kebab) {
    const lowerCamel = _.camelCase(kebab);
    const upperCamel = _.upperFirst(lowerCamel);
    return { kebab, lowerCamel, upperCamel };
}

function removeComments(s) {
    return s.replace(/([\s\S]*?)\/\*[\s\S]*?\*\//g, '$1');
}

function createTemplate(directory, placeholderNames, omitComments, callback) {
    fs.readFile(directory.template, 'utf8', (err, data) => {
        if (err) throw err;

        data = _.replace(data, /TEMPLATE_KEBAB_CASE_NAME/g, placeholderNames.kebab);
        data = _.replace(data, /TEMPLATE_LOWER_CAMEL_CASE_NAME/g, placeholderNames.lowerCamel);
        data = _.replace(data, /TEMPLATE_UPPER_CAMEL_CASE_NAME/g, placeholderNames.upperCamel);

        if (omitComments) {
            data = removeComments(data);
        }

        const formattedCode = formatCodeWithPrettier(data, directory);

        fs.writeFile(directory.generated, formattedCode, err => {
            if (err) throw err;
            return callback();
        });
    });
}

function formatCodeWithPrettier(data, directory) {
    const parser = _.endsWith(directory.generated, '.scss') ? 'scss' : 'babylon';
    const config = { ...PRETTIER_CONFIG, parser };

    return prettier.format(data, config);
}

function getRootPath() {
    return commander.slice(0, commander.indexOf(NODE_MODULES_PATH.toLowerCase()));
}

module.exports = {
    createTemplate,
    getAllDirectories,
    getAllPlaceholderNames,
    getRootPath
};
