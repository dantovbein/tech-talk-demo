// Auto-generated file created by Dan Tovbein 06/06/2019 at 13:34:17hs

/**
 * Trim classnames of any element which has more than one class name set to className prop
 * @param {Array<string>} classNames
 * @return {string}
 */
export const trimClassNames = (classNames = []) => {
  return classNames.filter((c) => c !== "" && c !== " ").join(" ");
};
