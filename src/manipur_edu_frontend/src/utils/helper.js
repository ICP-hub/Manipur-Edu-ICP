import { json } from "../../../../node_modules/react-router-dom/dist/index";
import { colorStar } from "./Data/SvgData";

export async function generateKeyPair() {
    return await window.crypto.subtle.generateKey(
        {
            name: "RSA-OAEP",
            modulusLength: 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: { name: "SHA-256" },
        },
        true,
        ["encrypt", "decrypt"]
    );
}

export async function decryptAESKeyWithRSA(encryptedKey, privateKey) {
    privateKey = JSON.parse(privateKey)
    console.log("privateKey is ", privateKey)
    const decryptedKey = await window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        privateKey,
        encryptedKey
    );
    return decryptedKey;
}

export async function getKeysForInstitute() {

    const key = await generateAesKey();
    if (!key) {
        throw new Error("AES key generation failed.");
    }
    console.log('aeskey', key);
    //genenrate rsa-oaep keys
    const rsaKeyPair = await generateKeyPair();

    // Check if rsaKeyPair contains the expected properties
    if (!rsaKeyPair || !rsaKeyPair.publicKey) {
        throw new Error("RSA key pair generation failed or publicKey is missing.");
    }
    console.log("rsaKeyPair", rsaKeyPair);
    console.log("public key ", rsaKeyPair.publicKey);

    const encryptedKey = await encryptAESKeyWithRSA(key, rsaKeyPair.publicKey);
    console.log("encryptedKey", encryptedKey);
    // convert this key into base64
    const uint8Array = new Uint8Array(encryptedKey);

    // Convert Uint8Array to Base64 string
    const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
    console.log("base64String", base64String);

    const privateKeyData = await window.crypto.subtle.exportKey("pkcs8", rsaKeyPair.privateKey);
    const privateKeyArray = new Uint8Array(privateKeyData);
    const privateKey = btoa(String.fromCharCode.apply(null, privateKeyArray));
    return { base64String, privateKey }

}

export async function encryptAESKeyWithRSA(aesKey, publicKey) {
    const exportedKey = await window.crypto.subtle.exportKey("raw", aesKey);
    console.log(exportedKey);
    console.log("Public key:", publicKey);

    return await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        publicKey,
        exportedKey
    );
}

export async function generateAesKeyBase64() {
    // Generate AES-GCM key
    const key = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    // Export the generated key in raw format
    const exportedKey = await window.crypto.subtle.exportKey("raw", key);

    // Convert the raw key bytes to a Uint8Array
    const keyBytes = new Uint8Array(exportedKey);

    // Convert the Uint8Array to a Base64-encoded string
    const base64Key = btoa(String.fromCharCode.apply(null, keyBytes));

    return base64Key;
}

const generateKeys = async () => {
    try {
        const aesKey = await window.crypto.subtle.generateKey(
            { name: "AES-CBC", length: 256 }, true, ["encrypt", "decrypt"]
        );

        return aesKey;
    } catch (error) {
        console.error("Error generating key:", error);
        throw error;  // Ensure errors are propagated
    }
};

function arrayBufferToString(buffer) {
    const uint8Array = new Uint8Array(buffer);
    const binaryString = String.fromCharCode(...uint8Array);
    return btoa(binaryString);
}

function uint8ArrayToString(uint8Array) {
    const decoder = new TextDecoder('utf-8'); // Specify UTF-8 encoding
    return decoder.decode(uint8Array);
}

function uint8ArrayToBase64(uint8Array) {
    const string = String.fromCharCode.apply(null, uint8Array);
    return btoa(string);
}

function base64ToUint8Array(base64) {
    const binary_string = atob(base64);
    const len = binary_string.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
}

export async function handleFileEncrypt(fileList, publicKeyJwk) {
    const file = fileList[0];

    console.log("*******************************************")
    console.log("fileList " ,fileList )
    console.log("publicKeyJwk" , publicKeyJwk)


    // Parse publicKeyJwk if it's a string
    if (typeof publicKeyJwk === 'string') {
        publicKeyJwk = JSON.parse(publicKeyJwk);
    }

    console.log("publicKeyJwk" , publicKeyJwk)
    console.log("publicKeyJwk.kty" , publicKeyJwk["kty"])


    // Validate the RSA public key JWK
    if (!publicKeyJwk.kty || !publicKeyJwk.alg || !publicKeyJwk.e || !publicKeyJwk.n) {
        console.error("Invalid JWK: Missing required fields.");
        throw new Error("Invalid JWK: Missing required fields. Ensure 'kty', 'alg', 'e', and 'n' are included.");
    }

    // Step 1: Import the RSA public key from JWK
    console.log("Importing RSA public key...");
    const rsaPublicKey = await window.crypto.subtle.importKey(
        "jwk",
        publicKeyJwk,
        {
            name: "RSA-OAEP",
            hash: { name: "SHA-256" },
        },
        true,
        ["encrypt"]
    );

    // Step 2: Generate an AES-GCM key
    console.log("Generating AES-GCM key...");
    const aesKey = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    // Step 3: Read the file as ArrayBuffer
    console.log("Reading file data...");
    const arrayBuffer = await file.arrayBuffer();

    // Step 4: Encrypt the file data using AES-GCM
    console.log("Encrypting file data with AES key...");
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // Initialization vector for AES-GCM
    console.log("iv is " , iv )
    const encryptedData = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        aesKey,
        arrayBuffer
    );

    // Step 5: Encrypt the AES key using the RSA public key
    console.log("Encrypting AES key with RSA public key...");
    const exportedAesKey = await window.crypto.subtle.exportKey("raw", aesKey);
    const encryptedAesKey = await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        rsaPublicKey,
        exportedAesKey
    );

    console.log("encryptedAesKey========>", encryptedAesKey)

    // Step 6: Bundle encrypted AES key and IV with the encrypted file data
    // console.log("Combining encrypted data, IV, and encrypted AES key...");
    // const encryptedDataWithIV = new Uint8Array(iv.length + encryptedData.byteLength + encryptedAesKey.byteLength);
    // encryptedDataWithIV.set(new Uint8Array(iv), 0); // Set IV bytes
    // encryptedDataWithIV.set(new Uint8Array(encryptedAesKey), iv.length); // Set encrypted AES key bytes
    // encryptedDataWithIV.set(new Uint8Array(encryptedData), iv.length + encryptedAesKey.byteLength); // Set encrypted data bytes

    console.log("Encryption complete. Data ready for transfer.");

    // Return both the encrypted data with IV and the AES key

    console.log("iv vector is " , iv)
    console.log("encryptedData  is : ", encryptedData )
    console.log("aesKey in return is : ", aesKey)
    console.log("encryptedAesKey========>", encryptedAesKey)

    // const encryptedAesKeyBase64 = btoa(String.fromCharCode.apply(null, new Uint8Array(encryptedAesKey)));



    const encryptedAesKeyBase64 = arrayBufferToString(encryptedAesKey);

    // change  unit8array of iv to stirng 

    // const ivImport  = uint8ArrayToString(iv) ; 

    const ivbase64 = uint8ArrayToBase64(iv) ; 

    // const encryptedAesKeyBase64 = btoa(encryptedAesKey)
    console.log("ivbase64 is " , ivbase64)
    console.log("ivbase64 type is " , typeof(ivbase64))
    console.log("encryptedAesKeyBase64 is : ", encryptedAesKeyBase64)
    console.log("encryptedAesKeyBase64 type is : ", typeof (encryptedAesKeyBase64))



    return {
        iv: ivbase64,
        encryptedFile: encryptedData ,
        aesKey: encryptedAesKeyBase64, // You may want to export this key or handle it according to your security needs
    };

}

const getImage = async (kyc) => {
    try {
        let i = 1;
        let data;
        const newChunks = [];

        let chunkId = kyc[0].chunk_id;
        for (let i = 0; i < Number(kyc[0].num_chunks); i++) {
            console.log("Fetching chunks");
            const { chunk_id, chunk_data } = await actor.get_image(kyc[0].image_id, chunkId);
            if (chunk_data.length > 0) {
                chunk_data = Buffer.from(chunk_data?.[0]);
                newChunks.push(chunk_data);
                chunkId = chunk_id;
            }
        }
        let imgData = "";
        let reversed = newChunks.reverse();

        for (let i = 0; i < reversed.length; i++) {
            imgData += reversed[i];
        }
        console.log("All chunks fetched:", newChunks);
        console.log("All reversed chunks summed", reversed);
        return imgData;
    } catch (error) {
        console.error("Failed to fetch chunks:", error);
    }
};

async function importAESKey(rawKeyBuffer) {
    try {
        const aesKey = await window.crypto.subtle.importKey(
            "raw",  // format of the key - 'raw' for an ArrayBuffer
            rawKeyBuffer,  // the ArrayBuffer holding the key data
            { name: "AES-GCM", length: 256 },  // algorithm and key length
            true,  // whether the key is extractable (i.e., can be exported)
            ["decrypt"]  // allowed key usages
        );
        return aesKey;
    } catch (err) {
        console.error("Key import failed:", err);
        throw err;  // Propagate the error
    }
}

function stringToUint8Array(str) {
    const encoder = new TextEncoder(); // Uses UTF-8 by default
    return encoder.encode(str);
}

function convertStringToBufferSource(inputString) {
    const encoder = new TextEncoder();
    return encoder.encode(inputString);
}

export async function decrypted_Img(kyc , imgEncrypted, decryptedAesKey, rsaString) {

    // imgEncrypted  = convertStringToBufferSource(imgEncrypted);
    console.log(".......................................................")

    const encryptedAesKeyString = kyc[0]["aes_key"];
    console.log("encryptedAesKeyString", encryptedAesKeyString)
    const encryptedAesKey = stringToArrayBuffer(encryptedAesKeyString);
    console.log("encryptedAesKey is ", encryptedAesKey);

    console.log("encryptedAesKey (type: " + typeof encryptedAesKey + ", is ArrayBuffer: " + (encryptedAesKey instanceof ArrayBuffer) + "): ", encryptedAesKey);

    console.log("RSA strig OK :", rsaString["Ok"]);
    let rsaPrivateKeyJwk;
    try {
        // Since rsaString.Ok is a string that contains JSON, we parse it once
        rsaPrivateKeyJwk = JSON.parse(rsaString.Ok);
        console.log("Parsed RSA Private Key JWK:", rsaPrivateKeyJwk);
    } catch (error) {
        console.log("Error when trying to parse RSA Private Key JWK:", error);
        throw new Error("Invalid RSA private key format: " + error.message);
    }

    if (!rsaPrivateKeyJwk.kty) {
        throw new Error("Invalid RSA private key JWK: Missing 'kty'.");
    }
    const rsaPrivateKey = await window.crypto.subtle.importKey(
        "jwk",
        rsaPrivateKeyJwk,
        {
            name: "RSA-OAEP",
            hash: { name: "SHA-256" },
        },
        true,
        ["decrypt"]
    );
    console.log("rsa Private is ", rsaPrivateKey)

    const aesKeyRaw = await window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        rsaPrivateKey,
        encryptedAesKey
    );
    console.log("aesKey Rae is ", aesKeyRaw)
    console.log("iv is" , kyc[0]["iv"])


    const ivU8 = base64ToUint8Array( kyc[0]["iv"])
    console.log("ivU8 is " , ivU8)
    console.log("imgEncrypted " , imgEncrypted)
    console.log("aesKeyRaw" , aesKeyRaw)



    const dec_AesKey = await window.crypto.subtle.importKey(
        "raw",
        aesKeyRaw,
        { name: "AES-GCM", length: 256 },
        true,
        ["decrypt"]
      );

      console.log("dec_AesKey " , dec_AesKey)



      console.log("IV length:", ivU8.length);
      console.log("Encrypted data length:", imgEncrypted.byteLength);


      try {
            const decryptedImg = await window.crypto.subtle.decrypt(
                {
                    name: "AES-GCM",
                    iv: ivU8
                },
                dec_AesKey,
                imgEncrypted
            );
            console.log("data is " , dec_AesKey)

            console.log("Decryption complete, data is now decrypted.",decryptedImg);
            // return new Uint8Array(decryptedImg);
            // for blob
        const decryptedBlob = new Blob([decryptedImg], { type: "image/jpg" });
        console.log("decryptedBlob",decryptedBlob)
        return decryptedBlob;

        
        } catch (e) {
            console.error("Decryption failed:", e.message);
            throw new Error("Decryption failed: " + e.message);
        }
   
}

async function exportCryptoKeyToArrayBuffer(cryptoKey) {
    if (cryptoKey.extractable) {
        const keyData = await window.crypto.subtle.exportKey('raw', cryptoKey);
        return keyData; // This is an ArrayBuffer
    } else {
        throw new Error("CryptoKey is not extractable");
    }
}

async function importPrivateKey(privateKeyJwk) {

    if (typeof privateKeyJwk === 'string') {
        privateKeyJwk = JSON.parse(privateKeyJwk);
    }
    console.log("Importing JWK:", privateKeyJwk);
    console.log("Type of JWK:", typeof privateKeyJwk);
    return await window.crypto.subtle.importKey(
        "jwk",
        privateKeyJwk,
        {
            name: "RSA-OAEP",
            hash: { name: "SHA-256" }
        },
        true,
        ["decrypt"]
    );
}

async function importAesKey(jwkString) {
    console.log("jwk in importAesKey is ", jwkString)
    console.log("jwk type in importAesKey is ", typeof (jwkString))
    // Parse the JWK string back to a JSON object if it's a string
    if (typeof jwkString === 'string') {
        try {
            jwkString = JSON.parse(jwkString);
        } catch (error) {
            console.error("Failed to parse JWK string:", error);
            throw new Error("Invalid JWK format");
        }
    }

    console.log("Importing JWK as object:", jwkString);

    try {
        return await window.crypto.subtle.importKey(
            "jwk",
            jwkString,
            {
                name: "AES-GCM",
                length: 256
            },
            true,  // whether the key is extractable
            ["encrypt", "decrypt"]
        );
    } catch (error) {
        console.error("Error importing the AES key:", error);
        throw error;
    }
}

async function importKey(jwk) {
    if (!jwk || !jwk.kty) {
        console.log("Invalid or missing key type:", jwk);
        throw new Error("Invalid key format or missing key type (kty).");
    }

    try {
        switch (jwk.kty) {
            case 'RSA':
                return await window.crypto.subtle.importKey(
                    "jwk",
                    jwk,
                    { name: "RSA-OAEP", hash: { name: "SHA-256" } },
                    true, // whether the key is extractable
                    ["decrypt"]
                );
            case 'oct':
                return await window.crypto.subtle.importKey(
                    "jwk",
                    jwk,
                    { name: "AES-GCM", length: 256 },
                    true, // whether the key is extractable
                    jwk.key_ops // Uses the operations defined in the JWK
                );
            default:
                throw new Error(`Unsupported key type: ${jwk.kty}`);
        }
    } catch (error) {
        console.error("Error importing key:", error);
        throw error;
    }
}

async function decryptAesKey(encryptedAesKey, privateKeyJwk) {
    try {
        // Import the RSA private key from a JWK format
        const privateKey = await window.crypto.subtle.importKey(
            "jwk",
            JSON.parse(privateKeyJwk.Ok), // Assuming privateKeyJwk.Ok is a JSON string of the JWK
            {
                name: "RSA-OAEP",
                hash: { name: "SHA-256" }
            },
            true, // Whether the key is extractable
            ["decrypt"] // Specify operation for which the key is usable
        );

        // Use the imported privateKey to decrypt data
        return await window.crypto.subtle.decrypt(
            { name: "RSA-OAEP" },
            privateKey,
            encryptedAesKey
        );
    } catch (error) {
        console.error("Decryption failed:", error);
    }
}

function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64); // Decode Base64 to binary string
    const len = binaryString.length;
    const bytes = new Uint8Array(len); // Create a typed array of the same length
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i); // Convert chars to byte
    }
    return bytes.buffer; // Access the ArrayBuffer from the typed array
}

async function decryptData(encryptedData, aesKey, iv) {
    return window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        aesKey,
        encryptedData
    );
}

function correctBase64Padding(base64String) {
    const paddingNeeded = (4 - (base64String.length % 4)) % 4;
    return base64String + "=".repeat(paddingNeeded);
}

function stringToArrayBuffer(str) {
    const binaryString = atob(str);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

export async function aes_Decrypt(kyc, rsaString) {
    
    console.log("kyc is ", kyc)
    console.log("kyc  kyc[0].aes_key is ", kyc[0]);
    console.log("kyc  kyc[0].aes_key is ", kyc[0]["aes_key"]);

    const encryptedAesKeyString = kyc[0]["aes_key"];

    console.log("encryptedAesKeyString", encryptedAesKeyString)
    // const encryptedAesKey = Uint8Array.from(atob(encryptedAesKeyBase64), c => c.charCodeAt(0));
    const encryptedAesKey = stringToArrayBuffer(encryptedAesKeyString);

    console.log("encryptedAesKey is ", encryptedAesKey);


    console.log("******************encryptedAesKey (type: " + typeof encryptedAesKey + ", is ArrayBuffer: " + (encryptedAesKey instanceof ArrayBuffer) + "): ", encryptedAesKey);



    console.log("RSA string Key JWK:", rsaString);
    let rsaPrivateKeyJwk;
    try {
        // Since rsaString.Ok is a string that contains JSON, we parse it once
        rsaPrivateKeyJwk = JSON.parse(rsaString.Ok);
        console.log("Parsed RSA Private Key JWK:", rsaPrivateKeyJwk);
    } catch (error) {
        console.log("Error when trying to parse RSA Private Key JWK:", error);
        throw new Error("Invalid RSA private key format: " + error.message);
    }

    if (!rsaPrivateKeyJwk.kty) {
        throw new Error("Invalid RSA private key JWK: Missing 'kty'.");
    }

    const rsaPrivateKey = await window.crypto.subtle.importKey(
        "jwk",
        rsaPrivateKeyJwk,
        {
            name: "RSA-OAEP",
            hash: { name: "SHA-256" },
        },
        true,
        ["decrypt"]
    );
    console.log("rsa Private is ", rsaPrivateKey)

    const aesKeyRaw = await window.crypto.subtle.decrypt(
        { name: "RSA-OAEP" },
        rsaPrivateKey,
        encryptedAesKey
    );

    console.log("*********^^^^^^^^^^^^^^^^^^^^^^^^^^***********************")

    console.log("aesKey Rae is from decrypte is  ", aesKeyRaw)

    const decryptedAesKey = await window.crypto.subtle.importKey(
        "raw",
        aesKeyRaw,
        { name: "AES-CBC", length: 256 },
        true,
        ["decrypt"]
      );

      console.log("decryptedAesKey " , decryptedAesKey)

    return aesKeyRaw;

}

function isValidBase64(base64) {
    return /^[A-Za-z0-9+/]+={0,2}$/.test(base64);
}
