# Update NPM

```bash
npm install
```

# Run Eslint

```bash
npx eslint --init
```

# Run Apps

- Development

```bash
npm run start-dev
```

- Production (install PM2 before)

```bash
pm2 start npm --name "bookshelf-api" -- run "start-prod" 
```