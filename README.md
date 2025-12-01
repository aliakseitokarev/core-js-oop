# Core JS OOP

:warning: **Please note that you mustn't open PRs that contains the answers to this repo!**

However, PRs with the fixes or proposals are welcomed!

## Prepare and test

1. Install Node.js
2. Fork this repository: <https://github.com/rolling-scopes-school/core-js-oop>
3. Clone your newly created repo: `https://github.com/<%your_github_username%>/core-js-oop/`
4. Go to folder `core-js-oop`
5. To install all dependencies use `npm install`
6. Each task is usually one or more classes:

   ```javascript
   /**
    * Must correctly extend Employee.
    */
   export class Developer {
     /**
      * @param {string} name - Developer name.
      * @param {number} salary - Base salary.
      * @param {number} bonus - Bonus amount.
      */
     constructor(/* name, salary, bonus */) {
       throwNotImplementedError();
     }
   }
   ```

   Read the task description in the comment above the class/method. Try to understand the idea. You can see the tests prepared if you don't understand it.

7. Write your code in `src/<task-name>.js`.

   Uncomment the incoming parameters:

   ```javascript
    constructor(/* name, salary, bonus */) {...}
   ```

   Remove the throwing error line from function body:

   ```javascript
   throwNotImplementedError();
   ```

   Implement the class/method by any way and verify your solution by running tests until the failed test become passed (green).

8. Run `npm test` in command line. If everything is OK you can try to resolve the next task.

## Submit to [rs app](https://app.rs.school/)

1. Commit and push your solutions to your fork
2. Open rs app and login
3. Go to submit task page
4. Select your task (Core JS OOP)
5. Press submit button and enjoy

## Notes

- We recommend you to use nodejs of version 22 or lower. If you using any of features that does not supported by node `v22`, score won't be submitted.
- Installing nodejs `v22` is optional, you can run jobs using your version and not use methods that are not in nodejs `v22`.
- Please be sure that each of your test in limit of 30sec.
- You will get 0 (zero) if you have any eslint's errors or warnings.

## FAQ

**Question:** I use Windows machine and have received a lot of errors like "Expected linebreaks to be 'LF' but found 'CRLF'". How to handle it?
**Answer**:

- First, you need to install Gitbash properly: you need to choose option "Checkout as-is, commit as-is" in section "Configuring the line ending conversions". It'll let you download repos with line endings set "as-is" as well as commit. In other words, not to change them at all, because by default it converts them.
- Second, install `editorconfig` plugin to your editor. For VS Code you can find it here:
  <https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig>
  I'll let you apply some rules when you saving your files in the repo. This plugin will use config-file `.editorconfig` that you can see in the root folder. It lets you save the file with needed line endings, trim whitespaces, etc.
- Finally, you need to apply linter's autofix feature in order to fix all linebreaks that was already changed to "CLRF":
  ```sh
  npm run lint:fix
  ```

**Question:** The solution in the local repository succeeds and all tests are "green", but in the application some tests don't count. What to do?<br>
**Answer**: [Update your repository fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork), update the local repository from the fork, run tests and fix your solution. After fixing, resubmit your solution for testing.

**Question:** How can I run tests for one task, and not all at once?<br>
**Answer**:

```sh
npx mocha test/<task-name>.test.js
```

---

The task based on <https://github.com/rolling-scopes-school/js-assignments>.
