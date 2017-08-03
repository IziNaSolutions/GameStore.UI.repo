# game-store

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Idan's instructions for installing this:
1. `git clone ...`
2. `cd GameStore.UI.Repo`
3. `git checkout -b [[author-feature-versionNumber]]`
4. `git push -u origin [[author-feature-versionNumber]]`
5. `npm install && bower install`
6. make sure you installed everything on [this page](https://github.com/yeoman/generator-angular):
   1. `npm install -g grunt-cli bower yo generator-karma generator-angular`
   2. `gem install compass`
7. start coding / editing
8. `git status`:
   1. make sure you see your editings, and your **not** on the `master` branch.
9. `git add .`
10. `git commit -m "[[commit message...]]"`
11. `git push`

![meme](https://www.thesun.co.uk/wp-content/uploads/2016/07/nintchdbpict000252984341.jpg?w=650)

## How To Get your Friends CODE?!!? (pulling code from master)
1. your buddy needs to create PR (pull request) - Base: `master` - Compare: `buddy-branch-example-0`
   1. review this PR
   2. Approove this PR
   3. Merge this PR
   4. **your buddy code now on mster!**
2. YOU:
   1. `cd` to your repository by bash terminal
   2. `git pull origin master --ff-only`
      - this will try to get the code from master
      - case fail: you need to solve merge conflicts!
      - case success: your local branch now has the code of your buddy too! so commit & push.
    
## how to solve merge conflicts?!
google it.
> (or ask me if i have time..)

