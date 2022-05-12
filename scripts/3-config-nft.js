import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x19b2B633abCA3421A67b0a55DeAf400a0c12CAE9");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Eggplant DAO",
        description: "This NFT will give you access to EggplantDAO!",
        image: readFileSync("scripts/assets/eggplant.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();