# Most common git commands:

## git
Let's the terminal know that you are wanting to run a git command. For any git command you run, it must start with `git`

## branch
Prints out what branch you are currently on. Let's say you don't know what branch you are on right now. You can run `git branch` and it will print out the branch you are on.

## checkout <branch name>
Allows you to change the branch you are currently working on. If you are currently on the `main` branch, and want to change you branch to the `develop` branch,
you can run: `git checkout develop`

## checkout -b <branch name>
Allows you to create and switch to a new branch. Let's say you want to create a new branch off of the develop branch called `story/SOHO-1111`. Make sure your current branch is `develop`
and run `git checkout -b story/SOHO-1111`

## add <directory>
Allows you to add any changes you made to the repo to a staged state. Must specify location of what you want to add. For example, if you want to add all files in your current directory,
you can run: `git add .`

## commit -m "<message>"
Any code you have staged must have a commit message associated with it. After adding code to the staged state, you can run this command. For example, if you want to commit that you added a new file,
you can run: `git commit -m "Added a new file to the current directory"`. Commits should be very discriptive in the changes you have done.

## push origin <branch>
Once you have added and commited your code and are ready to push your code up to Github, you can run this command. Let's say you are on branch `story/SOHO-1111` and you have added and commited code.
You can run `git push origin story/SOHO-1111` to push up your code.

## push --set-upstream origin <branch>
Running the `push origin <branch>` command can become very combursome. To speed this up, you can run this command the first time you created your branch. This will allow you to run `git push` to push your branch from this point on. For example, let's say you just made branch `story/SOHO-1111`. You can now run `git push --set-upstream origin story/SOHO-1111` right after you created the branch. This will push your branch up and allow you to run `git push` from now on.

## push
After running the `push --set-upstream origin <branch>` command, you can add and commit code and simply run `git push` to push your code to Github

## reset <directory>
Let's say you added some code with the `git add` command that you didn't actually want to add and push to the repo. Using this command and undo this add for any specified files or directories. For example, let's say you added the `./code-not-to-push.xml` file on accident. You can run `git reset ./code-not-to-push.xml` and it will un-stage that file.