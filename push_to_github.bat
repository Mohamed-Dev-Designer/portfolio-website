@echo off
git config user.name "Mohamed-Dev-Designer"
git config user.email "mohamed@example.com"
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Mohamed-Dev-Designer/portfolio-website.git
git push -u origin main
pause
