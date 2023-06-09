import { CppBackend } from "./cpp";
import { JavaScriptBackend } from "./javascript";
import { PythonBackend } from "./python";

export class CodeRunner {
  private backends = [
    new PythonBackend(),
    new CppBackend(),
    new JavaScriptBackend(),
  ];

  public load = async (language: "python3" | "cpp" | "javascript") => {
    for (let i = 0; i < this.backends.length; i++) {
      if (this.backends[i].name != language) continue;
      await this.backends[i].loadBinaries();
    }
  };

  public run = async (
    source: string,
    language: "python3" | "cpp" | "javascript"
  ): Promise<string | undefined> => {
    for (let i = 0; i < this.backends.length; i++) {
      if (this.backends[i].name != language) continue;
      if (this.backends[i].is_compiled) {
        const binary = await this.backends[i].compile(source, {});
        source = binary;
      }
      const output = await this.backends[i].run(source);
      return output;
    }
    return undefined;
  };
}
