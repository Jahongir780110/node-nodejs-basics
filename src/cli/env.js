const parseEnv = () => {
  const envEntries = Object.entries(process.env);
  const rsEnvs = envEntries
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`);
  console.log(rsEnvs.join("; "));
};

parseEnv();
