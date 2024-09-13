const myLog = (tag, ...args) => {
  console.log(`${tag}:`, args);
};
myLog("⽔果", "⽕⻰果"); // ⽔果: [ '⽕⻰果' ]
myLog("零⻝", "坚果", "芒果⼲", "辣条"); // 零⻝: [ '坚果', '芒果⼲', '辣条' ]
