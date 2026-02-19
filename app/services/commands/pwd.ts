import type { Command } from "../types/command";

export const pwd: Command = (rl, args) => {
  rl.write(`${process.cwd()} \n`);
};
