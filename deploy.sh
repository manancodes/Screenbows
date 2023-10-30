#!/bin/bash

# Build your project (if required)
npm install
npm run build

# Output debugging information
echo "Script executed successfully until this point."

# Deploy to GitHub Pages
git config --global user.name "$GITHUB_ACTOR"
git config --global user.email "$GITHUB_ACTOR@users.noreply.github.com"
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
