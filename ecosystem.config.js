// ecosystem.config.js
// module.exports = {
//   apps: [
//     {
//       name: "nextjs-app", // The name of your application
//       script: "node_modules/next/dist/bin/next", // The path to the Next.js binary
//       args: "start", // Arguments to pass to the Next.js binary
//       instances: "max", // Number of instances to run, 'max' will run in cluster mode
//       exec_mode: "cluster", // Run in cluster mode
//       env: {
//         NODE_ENV: "development",
//         PORT: 3000, // Port to run your application in development mode
//         // Add other environment variables here
//       },
//       env_production: {
//         NODE_ENV: "production",
//         PORT: 3000, // Port to run your application in production mode
//         // Add other environment variables here
//       },
//     },
//   ],
// };

module.exports = {
  exportTrailingSlash: true, // Optional: Add trailing slash to all routes
  apps: [
    {
      name: "nextjs-app", // The name of your application
      script: "node_modules/next/dist/bin/next", // The path to the Next.js binary
      args: "start", // Arguments to pass to the Next.js binary
      instances: 1, // Run a single instance
      exec_mode: "fork", // Run in fork mode
      env: {
        NODE_ENV: "development",
        PORT: 3000, // Port to run your application in development mode
        // Add other environment variables here
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000, // Port to run your application in production mode
        // Add other environment variables here
      },
    },
  ],
};
