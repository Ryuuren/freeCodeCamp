const convertHTML = (str) => {
  // We first define a mapping of characters to HTML entities
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  // We then use regex and our entityMap to find and replace...
  // ...the relevant characters to their HTML entities.
  return str.replace(/[&<>"']/g, (match) => {
    return entityMap[match];
  });
};

// Dolce &amp; Gabbana
console.log(convertHTML("Dolce & Gabbana"));
