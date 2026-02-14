import type { Command } from "../types/command";

export const echo: Command = (rl, args) => {
  rl.write(`${args.join(" ")} \n`);
};
