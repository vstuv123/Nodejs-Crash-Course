console.log(process.argv);
console.log(process.argv[3]);

// process env
console.log(process.env.LOGNAME);

console.log(process.pid);

console.log(process.cwd());

console.log(process.title);

console.log(process.memoryUsage());

console.log(process.uptime());

process.exit(0);

console.log('Hello from after exit');




