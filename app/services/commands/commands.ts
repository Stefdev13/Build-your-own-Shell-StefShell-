import type { Command } from "../types/command";
import { echo } from "./echo";
import { exit } from "./exit";
import { pwd } from "./pwd";
import { type } from "./type";

export const commands = new Map<string, Command>();
commands.set("echo", echo);
commands.set("exit", exit);
commands.set("type", type);
commands.set("pwd", pwd);
