// My solution using purely Regex
function spinalCase(str) {
  // Replace the following patterns in the string:
  // 1. Convert camelCase to kebab-case by inserting a hyphen between lowercase and uppercase letters.
  // 2. Match one or more consecutive spaces (\\s+).
  // 3. Match one or more consecutive underscores (_+).
  // 4. Match one or more consecutive characters that are not letters, digits, or underscores [^a-zA-Z0-9_]+.
  return str.replace(/([a-z])([A-Z])|\s+|_+|[^a-zA-Z0-9_]+/g, "$1-$2").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); // Output: "this-is-spinal-tap"

// My original method
function spinalCase2(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .toLowerCase()
    .split(/\s+|_+|[^a-zA-Z0-9_]+/)
    .join("-");
}

console.log(spinalCase("This Is Spinal Tap"));
