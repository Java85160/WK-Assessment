module.exports = {
    default: {
      require: ["./tests/hooks/hook.js", "./tests/steps/*.js"],
      format: [
        "progress",       ],
      //publishQuiet: true,
      paths: ["./tests/features/*.feature"],
      tags: process.env.CUCUMBER_TAGS || "",
    },
  };