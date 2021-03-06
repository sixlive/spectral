export enum ConfigFormat {
  JSON = 'json',
  STYLISH = 'stylish',
}

export enum ConfigCommand {
  LINT = 'lint',
}

export interface ILintConfig {
  encoding: string;
  format: ConfigFormat;
  maxResults?: number;
  output?: string;
  verbose: boolean;
  ruleset?: string[];
}

export interface IConfig {
  extends?: string;
  lint: ILintConfig;
}
