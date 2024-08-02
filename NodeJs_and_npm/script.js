const fs = require("node:fs");

fs.rm("./copy",{recursive: true},(err)=>{
    if(err) console.error(err.message);
    else console.log("removed");
})