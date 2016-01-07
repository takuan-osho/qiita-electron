# qiita-electron
This is [Qiita](http://qiita.com/) desktop client.

## Build from source

```bash
$ git clone https://github.com/takuan-osho/qiita-electron.git
$ cd qiita-electron
$ npm install
$ npm run build
```

**OS X:**

```bash
$ npm run release:osx
```

**Windows:**

*for 64bit OS:*
```bash
$ npm run release:win
```

*for 32bit OS:*
```bash
$ npm run release:win32bit
```

**Linux:**
```bash
$ npm run release:linux
```

And then Qiita client app get generated in your desktop folder whose name is Qiita. 