# wasm-runner

Compile and run your server-side code in the browser! Example usage:

```ts
import { CodeRunner } from "wasm-runner.js";

const runner = new CodeRunner();

await runner.load("python3");
await runner.run("print('hello')", "python3");

// that's it!
```

Check out the `/example` folder to see how to use web workers to load the compilers in a different thread, so the user interface is interactive while it's loading.
