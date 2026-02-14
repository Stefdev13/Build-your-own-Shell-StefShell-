import { createInterface } from "readline";
import { commands } from "./services/commands/commands";
import type { Command } from "./services/types/command";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function run() {
  rl.question("$ ", (command: string) => {
    const splitCommand: string[] = command.split(" ");

    //Get command from Commands Map
    const cmd: Command | undefined = commands.get(splitCommand[0]);

    //Check if the command is found
    if (typeof cmd != "undefined") {
      cmd(rl, splitCommand.slice(1));
    } else {
      console.log(`${command}: command not found`);
    }
    run();
  });
}

run();

//Run the following to test your shell:
//  -> bun run ./app/main.ts

//Commands:
// "codecrafters test" -> test solution
// "codecrafters submit" -> submit solution
