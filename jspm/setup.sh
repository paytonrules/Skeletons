#!/bin/bash

# Check for Node
if ! hash npm 2>/dev/null; then
  echo "This setup requires Node.js, for a CLI. I will not install this for you, because it's insane. Head to nodejs.org and go get it."
  exit
fi

# Check for phantomjs
if ! hash phantomjs 2>/dev/null; then
  echo "Phantomjs is not present. Do you want me to install it for you? It will be installed globally. (y/n)"
  read Answer
  if [ $Answer = "y" ]; then
    npm install phantomjs-prebuilt -g
  fi
fi

# Check for jspm
if ! hash jspm 2>/dev/null; then
  echo "JSPM is not present. Do you want me to install it for you? It will be installed globally. (y/n)"
  read Answer
  if [ $Answer = "y" ]; then
    npm install jspm -g
  fi
fi

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
