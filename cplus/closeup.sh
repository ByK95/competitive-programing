branch=$(git rev-parse --abbrev-ref HEAD)
git checkout master
git merge "$branch"
git branch -d "$branch"