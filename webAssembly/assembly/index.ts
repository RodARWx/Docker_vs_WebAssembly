// Static string literal stored directly in WebAssembly linear memory (UTF-16LE)
const MESSAGE: string = "Hello World from WebAssembly!";

/**
 * Returns the starting byte offset (pointer) of the message in linear memory.
 */
export function getMessagePtr(): usize {
  return changetype<usize>(MESSAGE);
}

/**
 * Returns the byte length of the UTF-16LE encoded message in linear memory.
 */
export function getMessageByteLength(): i32 {
  return MESSAGE.length << 1;
}

/**
 * Adds two 32-bit signed integers on the WebAssembly stack-based virtual machine.
 */
export function add(a: i32, b: i32): i32 {
  return a + b;
}
