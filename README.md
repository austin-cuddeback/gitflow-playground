
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

# Common Mistakes
## Commiting code that should not have been commited
Solutions:

1. Using git revert:

    The git revert command creates a new commit that undoes the changes made in a previous commit while preserving a history of what was done.

        a. Open your terminal and navigate to your Git repository.

        b. Run `git log` and find the commit SHA you want to remove

        b.Run the following command, replacing <commit> with the commit you want to undo:

        `git revert <commit>`

        c. Git will create a new commit that undoes the changes introduced by the specified commit.

    If there are multiple commits you want to undo, you can specify a range of commits. For example:

        a. git revert <start_commit>..<end_commit>
        b. The new commit created by git revert will have a commit message indicating that it is reverting the changes made in the previous commit(s).

2. Using git reset:

    The git reset command allows you to move the branch pointer backward to an earlier commit, effectively removing the commits that you don't want.

        a. Open your terminal and navigate to your Git repository.

        b. Run the following command, replacing <commit> with the commit you want to reset to:

        `git reset <commit>`

    This will move the branch pointer to the specified commit, effectively removing the commits that came after it. The changes from the removed commits will still be present in your working directory as uncommitted changes.

3. If you want to completely discard the changes made in the unwanted commit(s) and remove them from your working directory, you can add the --hard option to the git reset command:

        `git reset --hard <commit>`

    Caution: Be careful when using git reset --hard as it permanently discards the changes.
## Pushing code that should not have been pushed
Solution:

If you have pushed code that you shouldn't have, you can still undo the changes, but it requires additional steps and considerations. Here's a step-by-step approach to undoing the pushed code:

1. Identify the commit you want to revert: Determine the commit that introduced the changes you want to undo. You can use `git log` to find the commit hash or other references.

2. Create a new commit to revert the changes: Use the git revert command to create a new commit that undoes the changes made in the undesired commit. Open your terminal, navigate to your Git repository, and run the following command:

        `git revert <commit>`

         # Replace <commit> with the commit you want to revert.

    Git will create a new commit that undoes the changes introduced by the specified commit. The commit message will indicate that it is reverting the changes.

3. Push the new revert commit: After creating the revert commit, you need to push it to the remote repository to apply the undo changes. Use the following command:

        `git push origin <branch_name>`
        # Replace <branch_name> with the name of the branch where you made the original commit.

    By pushing the new revert commit, you effectively revert the undesired changes on the remote repository.

4. Communicate with collaborators: 

    If others have already fetched or cloned the repository, they will need to be aware of the revert commit. Inform your collaborators about the undo changes so that they can update their local repositories accordingly.
## Merging code into a branch that should not have been merged
Solution:
If you have merged code that shouldn't have been merged and you want to undo the merge, you can use Git's git revert command. However, it's important to note that undoing a merge is a more complex operation compared to undoing a regular commit. Here's a step-by-step approach:
1. Using git revert to undo the merge:
    a. Identify the commit that represents the merge you want to undo. You can use `git log` to find the specific commit hash.

    b. Run the following command to create a new revert commit that undoes the changes introduced by the merge commit:

            git revert -m 1 <merge_commit>
            # Replace <merge_commit> with the hash of the merge commit you want to undo.

    The `-m 1` option tells Git to revert the changes from the first parent, effectively undoing the merge.

    c. Git will create a new commit that undoes the merge changes. The commit message will indicate that it is reverting the merge commit.

    d. Finally, push the newly created revert commit to the remote repository:

            git push origin <branch_name>
            # Replace <branch_name> with the name of the branch where the merge was performed.

    By reverting the merge commit, you effectively undo the changes introduced by the merge.