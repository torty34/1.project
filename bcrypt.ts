import { Aes } from "https://deno.land/x/crypto/aes.ts";
import { Cbc, Padding } from "https://deno.land/x/crypto/block-modes.ts";
import {Collection} from "./dataManager.ts"

const iv = new Uint8Array(16)
const key = new TextEncoder().encode("tamanodediesise1")

export function encrypt (data:any){
    const cipher = new Cbc(Aes , key ,iv ,Padding.PKCS7)
    const dataText = new TextEncoder().encode(data)
    const encryptEnd = cipher.encrypt(dataText)
    const array:number[] = []
    encryptEnd.forEach( elemento => { array.push(Number(elemento)) } );
    return array
}
export function descipher (data:any){
    const dataUnit = new Uint8Array(data)
    const descipher = new Cbc (Aes , key ,iv , Padding.PKCS7)
    const desciphered = descipher.decrypt(dataUnit) 
    const descryp = new TextDecoder().decode(desciphered) 
    return descryp
}
//const endar = encrypt("3")
//console.log(endar)
//const nnn = new Uint8Array(endar)
//console.log(descipher(nnn))

