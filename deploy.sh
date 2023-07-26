#!/bin/bash

# Go to the directory where your website files are hosted
cd /var/www/projects/quick_calendar

# Pull the latest changes from the repository
git pull origin main

# Reload Nginx to apply the changes
sudo systemctl reload nginx
