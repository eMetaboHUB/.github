#!/usr/bin/env node

// ABOUT:
//
// powered thanks https://stackoverflow.com/questions/42155115/how-to-include-git-revision-into-angular-cli-application
// This script runs operations *synchronously* which is normally not the best
// approach, but it keeps things simple, readable, and for now is good enough.

const { gitDescribeSync } = require('git-describe');
const { writeFileSync } = require('fs');

// infos about git commit
const gitInfo = gitDescribeSync();

// infos about current build date: current timestamp in milliseconds
const timestamp = Date.now();
gitInfo['timestamp'] = timestamp;

// write in file
const versionInfoJson = JSON.stringify(gitInfo, null, 2);
writeFileSync('./src/assets/json/git-version.json', versionInfoJson);
