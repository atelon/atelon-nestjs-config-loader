/* istanbul ignore file */
export type ConfigLoaderOptions = {
  /**
   * Path to configs
   */
  path: string;
  /**
   * Filename of dev env file
   */
  devFilename?: string;
  /**
   * Filename of test env file
   */
  testFilename?: string;
  /**
   * Filename of prod env file
   */
  prodFilename?: string;
};
