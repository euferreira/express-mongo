#!/bin/bash

if [ ! -f ".env" ]; then
    cp .env.example .env
fi

yarn install

yarn add -g ts-node

yarn dev