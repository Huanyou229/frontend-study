const getRes = async () => {
  try {
    let res = await fetch("https://www.baidu.json");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};