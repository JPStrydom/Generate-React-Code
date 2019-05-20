#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');

const createAllTemplates = require('./src/create-all-templates');
const applyConfig = require('./src/apply-config-file');

const DEFAULT_NAME = 'kebab-example-name';
const DEFAULT_COMPONENT_DIRECTORY = 'src/components';
const DEFAULT_REDUX_CORE_DIRECTORY = 'src/redux';

program
    .option(
        '-n, --name [name]',
        `This is the lower kebab case name of the feature/component you would like to generate (e.g. ${DEFAULT_NAME}).`,
        DEFAULT_NAME
    )
    .option(
        '-d, --directory [directory]',
        `This is the relative directory where the generated component will be placed (e.g ${DEFAULT_COMPONENT_DIRECTORY}).`,
        DEFAULT_COMPONENT_DIRECTORY
    )
    .option(
        '-N, --native [native]',
        'If you wish to generate code for React-Native, add this parameter - else React web code will be generated.',
        false
    )
    .option(
        '-r, --redux [redux]',
        'If you wish to generate Redux code in the duck pattern, add this parameter - else regular React code will be generated.',
        false
    )
    .option(
        '-o, --omit-comments [omitComments]',
        'If you wish to hide the comments within the generated files, add this parameter - else descriptive comments will be left in the generated code.',
        false
    )
    .option(
        '-R, --redux-core [reduxCore]',
        "If you would like to generate the Redux core files ('store', 'root-reducer', and 'action-utilities'), add this parameter. These files are used to connect your application with Redux.",
        false
    )
    .option(
        '-D, --redux-core-directory [reduxCoreDirectory]',
        `This is the relative directory where the generated Redux core file will be placed (e.g ${DEFAULT_REDUX_CORE_DIRECTORY}). It is recommended to leave this as the default.`,
        DEFAULT_REDUX_CORE_DIRECTORY
    )
    .option(
        '-f, --functional [functional]',
        `If you wish to generate a component as a functional component, use this parameter - else it will be class component. `,
        false
    )
    .parse(process.argv);

applyConfig(
    program,
    ({
        name,
        directory,
        native = false,
        redux = false,
        omitComments = false,
        reduxCore = false,
        reduxCoreDirectory,
        functional = false
    }) => {
        console.log(
            chalk.bold.underline.cyan('Parameters:'),
            chalk.bold.magenta('\nname:\t\t\t'),
            chalk.yellow(name),
            chalk.bold.magenta('\ndirectory:\t\t'),
            chalk.yellow(directory),
            chalk.bold.magenta('\nnative:\t\t\t'),
            chalk.yellow(native),
            chalk.bold.magenta('\nredux:\t\t\t'),
            chalk.yellow(redux),
            chalk.bold.magenta('\nomitComments:\t\t'),
            chalk.yellow(omitComments),
            chalk.bold.magenta('\nreduxCore:\t\t'),
            chalk.yellow(reduxCore),
            chalk.bold.magenta('\nreduxCoreDirectory:\t'),
            chalk.yellow(reduxCoreDirectory),
            chalk.bold.magenta('\nfunctional:\t'),
            chalk.yellow(functional),
            '\n'
        );

        createAllTemplates(
            name,
            directory,
            native,
            redux,
            omitComments,
            reduxCore,
            reduxCoreDirectory,
            functional
        );
    }
);
