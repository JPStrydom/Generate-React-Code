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
    reduxCoreDirectory
) {
    const directories = getAllDirectories(
        name,
        directory,
        native,
        redux,
        reduxCore,
        reduxCoreDirectory
    );
    const placeholderNames = getAllPlaceholderNames(name);

    _.forEach(directories, (directory, key) => {
        createTemplate(directory, placeholderNames, omitComments);
    });
}

module.exports = createAllTemplates;
