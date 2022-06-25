# Methodologies and Technologies of Program Development - Laboratory work 3

## General Description

This is the third part of the Methodologies and Technologies of Program Development - Laboratory work 3. 

## App Description

This is a simple Node.JS app, which lets you choose the color of the output and print a string and that color.

## Running the program

You have to install chalk and readline-sync dependencies:

    npm install chalk

    npm install readline-sync

Running the program:

    node ./index.js

## Dependencies:

[Chalk](https://github.com/chalk/chalk.git)

[Readline-Sync](https://github.com/anseki/readline-sync.git)

## Usage

There are 4 commands to use:

    help

Lets you see the info about the app usage

    output <color>

Lets you change the color of the output, reset instead of color option sets the output to default

    print <string>

Lets you print the string with the set color

    exit

Lets you exit the program

## Dockerfile

To build and run dockerfile image use commands:

    docker build -f Dockerfile -t lab03:n1 .

    docker run --rm -it lab03:n1
