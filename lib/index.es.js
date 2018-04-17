var resolveAliases = function resolveAliases() {
  return {
    resolveId: function resolveId(importee, importer) {
      console.log("\n" + importee);
      console.log("\n" + importer);
    }
  };
};

export default resolveAliases;
