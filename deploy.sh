#!/bin/bash

# Output debugging information
echo "Script executed successfully until this point."

# Deploy to GitHub Pages
git config --global user.name "${{ github.actor }}"
git config --global user.email "${{ github.actor }}@users.noreply.github.com"
git checkout gh-pages
mv build/* ./
git add .
git commit -m "Deploy to GitHub Pages"

# Output debugging information
echo "Changes committed, about to push."

git push -f origin gh-pages
git checkout master

# Output debugging information
echo "Deployment completed successfully."
