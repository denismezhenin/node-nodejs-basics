const parseEnv = () => {
    const args = Object.entries(process.env)
    .filter(([key, value]) => key.startsWith("RSS"))
    .forEach(([key, value], index) => console.log(`${key}=${value}`));
};

parseEnv();