#!/bin/bash

if [ $# -eq 0 ]
  then
    echo "No arguments supplied"
    echo "Usage ./skeleton <project_name>"
    exit 1
fi

mkdir $1
cd $1
cp ../../templates/cplus.cpp ./"$1.cpp"