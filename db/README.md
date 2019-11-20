# backendapi

### Very quick backstory

I make a lot of apps. While frontend was always more creative, backend is really tedious and boring. Every new application was a battle **setting up**. Anytime a new api is implemented, it becomes ridiculously time consuming. Anytime a new endpoint is used, a lot of adjustments need to be made. I want to make this process as easy as possible while using the least amount of files. Hence this api is built.

### The API
This will help you setup all the crud + queries needed. The reason the files are architecture this way is so that it can be used with __serverless__. The folders and files you need to modify is

```
- server/model/
- server/post/
- config.js
```

And if you have any credentials you can modify

```
- includes/appname/tools/
```