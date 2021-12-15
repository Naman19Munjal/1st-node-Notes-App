const chalk = require("chalk");
// const { demandOption, require } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "we added a new note",
      demandOption: "true",
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "   List of notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();

// const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// data.name = Naman
// data.age = 20
