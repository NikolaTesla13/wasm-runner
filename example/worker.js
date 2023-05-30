import { CodeRunner } from "/wasm-runner.js";

const runner = new CodeRunner();

self.onmessage = async (event) => {
  if (event.data == "load") {
    await runner.load("python3");
    self.postMessage("finish");
  } else {
    const output = await runner.run(event.data, "python3");
    self.postMessage(output);
  }
};
