const parseArgs = () => {
  const argsArr = process.argv.slice();
  for (let i = 0; i < argsArr.length; i += 2) {
    console.log(argsArr[i].slice(2), "is", argsArr[i + 1]);
  }
};

parseArgs();
