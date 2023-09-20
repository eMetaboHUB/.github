/**
 * This script is used to display.
 * It require "gitlab_published_packages_list.json" file to get all published package version and identifiers.
 * 
 * Call it with "nodejs .scripts/get-packages-id.ts" command
 */

// get input data
const file = require('../gitlab_published_packages_list.json');
const ref_version = require('../package.json').version;

let package_id = -1;

// browse published package
for (let i = 0; i < file.length; i++) {
    // debug
    // console.log('file', i, file[i])
    // if match
    if (file[i].version === ref_version) {
        package_id = file[i].id;
        break;
    }
}

// ouput data: ID of the package to remove
console.log(package_id);
