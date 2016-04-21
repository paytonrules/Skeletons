#!/bin/bash

# Copy the files to the desired location

# Ask for the name of the name of the project
echo "Enter Project Name:"
read ProjectName

echo "Enter Description:"
read Description

sed -e "s/\$ProjectName/$ProjectName/g" \
		-e "s/\$Description/$Description/g" \
		"$PathToProject/package.json" > "$Destination/package.json"

## Run npm install
npm install

## Setup jspm
#jspm install -y

## Copy gitignore
#mv ._gitignore .gitignore
