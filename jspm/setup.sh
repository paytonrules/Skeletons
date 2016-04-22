#!/bin/bash

# Check for Node, JSPM, and Phantomjs

# Ask for the name of the name of the project
echo "Enter Project Name:"
read ProjectName

echo "Enter Description:"
read Description

echo "Hey - who the hell are you!"
read Author

sed -e "s/\$ProjectName/$ProjectName/g" \
		-e "s/\$Description/$Description/g" \
    -e "s/\$Author/$Author/g" \
		"$PathToProject/package.json" > "$Destination/package.json"

## Run npm install
npm install

## Setup jspm
jspm install -y

## Copy gitignore
mv ._gitignore .gitignore
