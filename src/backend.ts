export interface CompilerOptions {
  version?: string;
  optimization?: string;
}

export interface LanguageBackend {
  name: string;
  is_compiled: boolean;

  loadBinaries(): Promise<void>;

  compile(source: string, opts: CompilerOptions | undefined): Promise<string>;
  run(binary: string): Promise<string>;
}
