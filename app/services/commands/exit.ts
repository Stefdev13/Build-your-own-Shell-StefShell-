import type { Command } from "../types/command";

export const exit: Command = (rl, args) => {
  process.exit();
};
