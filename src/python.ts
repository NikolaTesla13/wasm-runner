import { loadPyodide } from "pyodide";
import { CompilerOptions, LanguageBackend } from "./backend";

export class PythonBackend implements LanguageBackend {
  public readonly name = "python3";
  public readonly is_compiled = false;

  private interpreter: any;

  async loadBinaries() {
    this.interpreter = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.2/full/",
    });
  }

  public async compile(
    _source: string,
    _opts: CompilerOptions
  ): Promise<string> {
    throw new Error(`${this.name} is not a compiled language`);
  }

  public async run(binary: string): Promise<string> {
    const output = await this.interpreter.runPythonAsync(binary);
    return output;
  }
}
