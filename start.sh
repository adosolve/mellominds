#!/bin/bash
npm install
osascript -e 'tell app "Terminal" to do script "cd '"$(pwd)"' && npm run dev"'