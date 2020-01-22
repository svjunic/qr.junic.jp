export function ScriptingDelay(delay = 0) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
