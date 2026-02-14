import type { Command } from "../types/command";
import { builtins } from "../../constants/builtins";
import { env } from "process";
import fs, { constants } from "fs";

export const type: Command = (rl, args) => {
  if (builtins.includes(args.join(" "))) {
    rl.write(`${args.join(" ")} is a shell builtin \n`);
  } else {
    const splitPath: string[] = env.PATH?.split(":") ?? [];
    let exeFound: boolean = false;

    for (const dir of splitPath) {
      //Check if this directory contains a file with the name = args[1] and if it is executable
      try {
        fs.accessSync(`${dir}/${args[0]}`, constants.X_OK);
        rl.write(`${args[0]} is ${dir}/${args[0]} \n`);
        exeFound = true;
        break;
      } catch {}
    }

    //If no executable found in PATH, print this
    if (!exeFound) {
      rl.write(`${args.join(" ")}: not found \n`);
    }
  }
};
