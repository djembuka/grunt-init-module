/*
 * grunt-init-www
 * For Twin px use only
 *
 * Copyright (c) 2014 Tatiana
 */

'use strict';

// Basic template description.
exports.description = 'Create a module';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'A template for module';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'include.jade';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'className',
      message: 'Enter the root class name',
      default: 'block',
      warning: ''
    }
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy();

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
