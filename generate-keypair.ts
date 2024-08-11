import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();
import base58 from "bs58";

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`✅ Finished!`);