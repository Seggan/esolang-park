import monaco from "monaco-editor";
import React from "react";

/**
 * Type alias for defining range of characters to highlight in a single line.
 * - Missing `start` means highlight starting from start of the line.
 * - Missing `end` means highlight ending at the end of the line.
 */
export type CharRange = { start?: number; end?: number };

/** Type denoting a range of text in document spanning within a line */
export type DocumentRange = {
  line: number;
  charRange?: CharRange;
};

/** Source code token provider for the language, specific to Monaco */
export type MonacoTokensProvider = monaco.languages.IMonarchLanguage;

/** Type alias for props passed to renderer */
export type RendererProps<RS> = { state: RS | null };

/**
 * Type alias for the result of engine executing a single step.
 */
export type StepExecutionResult<RS> = {
  /** New props to be passed to the renderer */
  rendererState: RS;

  /** String to write to program output */
  output?: string;

  /**
   * Used to highlight next line to be executed in the editor.
   * Passing `null` indicates reaching the end of program.
   */
  nextStepLocation: DocumentRange | null;
};

/**
 * Language engine is responsible for providing
 * execution and debugging API to the platform.
 */
export interface LanguageEngine<RS> {
  /** Load code and user input into the engine and prepare for execution */
  prepare: (code: string, input: string) => void;

  /** Perform a single step of code execution */
  executeStep: () => StepExecutionResult<RS>;

  /** Reset all state to prepare for new cycle */
  resetState: () => void;
}

/**
 * Language provider provides all language-specific
 * functionality to the platform.
 */
export interface LanguageProvider<RS> {
  /** Monaco-specific tokenizer for syntax highlighting */
  editorTokensProvider?: MonacoTokensProvider;

  /** Monaco-specific autocomplete provider */
  autocompleteProvider?: any;

  /** Sample code sample for the language */
  sampleProgram: string;

  /** React component for visualising runtime state */
  Renderer: React.FC<RendererProps<RS>>;
}