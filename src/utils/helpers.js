/**
 *
 * Simbol format
 * <#@#></(@)> - Rujukan Arab
 * <(@)></(@)> - Rujukan Indonesia
 * <[@]/> - Tab
 * <$@$/> - Enter
 *
 * @param {string} text isi konten yang didapat API per halaman
 * @returns sebuah text yang diformat 1 halaman
 */
export const paragrafFormatter = (text) => {
  const addNewLines = text.replaceAll('<$@$/>', '\n');
  const addTabs = addNewLines.replaceAll('<[@]/>', '\t');

  return addTabs;
};
