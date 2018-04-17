import path from 'path';
import fs from 'fs';

const resolveAliases = () => {
  return {
    resolveId: (importee, importer) => {
      console.log("\n${importee}");
      console.log("\n${importer}");
    }
  }
}

export default resolveAlias;