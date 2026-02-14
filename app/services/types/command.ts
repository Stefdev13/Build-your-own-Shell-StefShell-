import { Interface } from "readline";

export type Command = (rl: Interface, args: string[]) => void;
