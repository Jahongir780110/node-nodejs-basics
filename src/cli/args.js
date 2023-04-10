const parseArgs = () => {
  const args = process.argv.slice(2);
  const keyValueArgs = [];

  for (let i = 0; i < args.length; i++) {
    if (i % 2 === 0) {
      keyValueArgs.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }
  }

  console.log(keyValueArgs.join(", "));
};

parseArgs();
