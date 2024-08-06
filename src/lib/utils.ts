import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pwKinesisCreds = {
  AccessKeyId: "AKIA44GIABD23IA65DT5",
  SecretAccessKey: "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",
  Expiration: "2121-11-18T01:20:19.000Z",
};

console.log(pwKinesisCreds["Expiration"]);
