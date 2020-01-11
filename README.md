# angular/angular#34526 Repro
To reproduce the issue, run the following commands:
```
npm install
npm run-script build:full:production
npm run-script serve:ssr
[ Open http://localhost:4000 in browser ]
```

```
Error: Can't resolve all parameters for Location: (?, ?).
    at syntaxError (C:\Users\troja\source\repos\repro\dist\server.js:53150:17)
    at CompileMetadataResolver._getDependenciesMetadata (C:\Users\troja\source\repos\repro\dist\server.js:72825:35)
    at CompileMetadataResolver._getTypeMetadata (C:\Users\troja\source\repos\repro\dist\server.js:72717:26)
    at CompileMetadataResolver._getInjectableTypeMetadata (C:\Users\troja\source\repos\repro\dist\server.js:72941:21)
    at CompileMetadataResolver.getProviderMetadata (C:\Users\troja\source\repos\repro\dist\server.js:72950:22)
    at C:\Users\troja\source\repos\repro\dist\server.js:72888:49
    at Array.forEach (<anonymous>)
    at CompileMetadataResolver._getProvidersMetadata (C:\Users\troja\source\repos\reprorepro\dist\server.js:72847:19)
    at C:\Users\troja\source\repos\repro\dist\server.js:72849:23
    at Array.forEach (<anonymous>)
```
