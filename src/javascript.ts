import { CompilerOptions, LanguageBackend } from "./backend";

export class JavaScriptBackend implements LanguageBackend {
  public readonly name = "javascript";
  public readonly is_compiled = false;

  async loadBinaries() {}

  public async compile(
    _source: string,
    _opts: CompilerOptions
  ): Promise<string> {
    throw new Error(`${this.name} is not a compiled language`);
  }

  public async run(binary: string): Promise<string> {
    return eval(binary);
  }
}
