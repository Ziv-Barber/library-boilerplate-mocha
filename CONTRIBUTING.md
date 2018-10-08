# Contributing

- Fork the project and clone your fork.
- Create a local feature branch:

```bash
git checkout -b <branch>
```

- Please add tests in 'test/' for each new function that you're adding.
- Make one or more atomic commits using either 'yarn commit' or 'npm run commit' ONLY (this project is commitizen friendly).  Do not commit changes to the `dist/` folder.
- Run 'yarn test' and 'yarn flow' and address any errors. Preferably, fix commits in place using `git rebase` or `git commit --amend` to make the changes easier to review and to keep the history tidy.
- Push to your fork:

```bash
git push origin <branch>
```

- Open a pull request.
