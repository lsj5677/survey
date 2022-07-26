#!/bin/bash
pm2 start /usr/src/survey-client/ecosystem.config.js --env production 
nginx -g 'daemon off;'