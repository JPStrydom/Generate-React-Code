'use strict';

const chalk = require('chalk');
const _ = require('lodash');

const {
    createTemplate,
    getAllDirectories,
    getAllPlaceholderNames
} = require('./generator-utilities');

function createAllTemplates(
    name,
    directory,
    native,
    redux,
    omitComments,
    reduxCore,
    reduxCoreDirectory,
    functional
) {
    const directories = getAllDirectories(
        name,
        directory,
        native,
        redux,
        reduxCore,
        reduxCoreDirectory,
        functional
    );
    const placeholderNames = getAllPlaceholderNames(name);

    _.forEach(directories, (directory, key) => {
        createTemplate(directory, placeholderNames, omitComments, () => {
            console.log(
                chalk.bold.blue(key),
                chalk.bold.green('file successfully created in'),
                chalk.bold.gray(directory.generated)
            );
        });
    });
}

module.exports = createAllTemplates;
