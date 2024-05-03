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

export async function generateAesKey() {
    const key = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
    return key;
}

export async function handleFileEncryption(fileList, publicKey) {
    const file = fileList[0];

    const binaryString = atob(publicKey);

    // Convert the binary string to a Uint8Array
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }
    //genenrate rsa-oaep keys
    const rsaKeyPair = await generateKeyPair();

    // Check if rsaKeyPair contains the expected properties
    if (!rsaKeyPair || !rsaKeyPair.publicKey) {
        throw new Error("RSA key pair generation failed or publicKey is missing.");
    }
    console.log("rsaKeyPair", rsaKeyPair);
    console.log("public key ", rsaKeyPair.publicKey);

    // Generate a symmetric encryption key
    const key = generateAesKey();
    if (!key) {
        throw new Error("AES key generation failed.");
    }

    console.log(key);
    console.log(file);
    const arrayBuffer = await file.arrayBuffer();
    console.log(arrayBuffer);

    // Initialization vector for AES-GCM
    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    // Encrypt the data
    const encrypted = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        arrayBuffer
    );
    console.log(encrypted);

    const encryptedAESKey = await encryptAESKeyWithRSA(key, rsaKeyPair.publicKey);
    const privateKey = rsaKeyPair.privateKey;
    console.log(privateKey);


    // Convert encrypted data to Blob for easier handling/display
    const encryptedDataWithIV = new Blob([iv, encrypted], { type: 'application/octet-stream' });
    console.log(encryptedDataWithIV);

    return { privateKey, encryptedAESKey, encryptedDataWithIV };


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


// export async function importAesKeyFromBase64(base64Key) {
//     try {
//         // Decode the Base64-encoded key to a binary string
//         const binaryString = atob(base64Key.trim()); // Trim to remove any accidental whitespace

//         // Convert the binary string to a Uint8Array
//         const keyBytes = new Uint8Array(binaryString.length);
//         for (let i = 0; i < binaryString.length; i++) {
//             keyBytes[i] = binaryString.charCodeAt(i);
//         }

//         // Import the key for use with AES-GCM
//         return await window.crypto.subtle.importKey(
//             "raw",
//             keyBytes,
//             { name: "AES-GCM" },
//             true,
//             ["encrypt", "decrypt"] // Specify use for both encryption and decryption
//         );
//     } catch (error) {
//         console.error("Error importing AES key from Base64:", error);
//         throw error; // Rethrow to make it clear there was an issue
//     }
// }
export async function importAesKeyFromBase64(base64Key) {
    try {
        // Decode the Base64-encoded key to a binary string
        const binaryString = atob(base64Key.trim()); // Trim to remove any accidental whitespace

        // Convert the binary string to a Uint8Array
        const keyBytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            keyBytes[i] = binaryString.charCodeAt(i);
        }

        // Check if keyBytes length is 16, 24, or 32 bytes (128, 192, 256 bits)
        if (![16, 24, 32].includes(keyBytes.length)) {
            throw new Error(`Invalid AES key length: ${keyBytes.length * 8} bits. Must be 128, 192, or 256 bits.`);
        }

        // Import the key for use with AES-GCM
        return await window.crypto.subtle.importKey(
            "raw",
            keyBytes,
            { name: "AES-GCM" },
            true,
            ["encrypt", "decrypt"] // Specify use for both encryption and decryption
        );
    } catch (error) {
        console.error("Error importing AES key from Base64:", error);
        throw error; // Rethrow to make it clear there was an issue
    }
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
  
  // Example usage of generateKeys
//   generateKeys().then(aesKey => {
//     console.log('AES Key:', aesKey);
//   }).catch(error => {
//     console.error('Failed to generate AES key:', error);
//   });
  


// export async function handleFileEncrypt(fileList, publicKey) {
//     const file = fileList[0];

//     // const key = await importAesKeyFromBase64(publicKey);
//     const key = await generateKeys() ; 
//     console.log(key);
//     console.log(file);
//     const arrayBuffer = await file.arrayBuffer();
//     console.log(arrayBuffer);

//     // Initialization vector for AES-GCM
//     const iv = window.crypto.getRandomValues(new Uint8Array(12));

//     // Encrypt the data
//     const encrypted = await window.crypto.subtle.encrypt(
//         { name: "AES-GCM", iv },
//         key,
//         arrayBuffer
//     );
//     console.log(encrypted);

//     // Convert encrypted data to Blob for easier handling/display
//     const encryptedDataWithIV = new Uint8Array(iv.length + encrypted.byteLength);
//     encryptedDataWithIV.set(new Uint8Array(iv), 0); // Set IV bytes
//     encryptedDataWithIV.set(new Uint8Array(encrypted), iv.length); // Set encrypted data bytes

//     console.log(encryptedDataWithIV);

//     return encryptedDataWithIV;


// }
// export async function handleFileEncrypt(fileList, publicKey) {
//     const file = fileList[0];

//     // Generate the correct type of key and await its creation
//     const key = await generateKeys();
//     console.log(key);
//     console.log(file);

//     // const arrayBuffer = await file.arrayBuffer();
//     // console.log(arrayBuffer);

//     // Initialization vector for AES-GCM
//     const iv = window.crypto.getRandomValues(new Uint8Array(16));

//     // Encrypt the data using AES-GCM
//     try {
//         const encrypted = await window.crypto.subtle.encrypt(
//             { name: "AES-GCM", iv },
//             key,
//             // arrayBuffer
//       new TextEncoder().encode(file)

//         );
//         console.log(encrypted);

//         // Convert encrypted data to Blob for easier handling/display
//         const encryptedDataWithIV = new Uint8Array(iv.length + encrypted.byteLength);
//         encryptedDataWithIV.set(new Uint8Array(iv), 0); // Set IV bytes
//         encryptedDataWithIV.set(new Uint8Array(encrypted), iv.length); // Set encrypted data bytes

//         console.log(encryptedDataWithIV);

//         return encryptedDataWithIV;
//     } catch (error) {
//         console.error("Encryption failed:", error);
//         throw error;
//     }
// }

export async function handleFileEncrypt(fileList, publicKeyJwk) {
    const file = fileList[0];

    if (typeof publicKeyJwk === 'string') {
        publicKeyJwk = JSON.parse(publicKeyJwk);
    }


    // Import the RSA public key from JWK
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

    // Generate an AES-GCM key
    const aesKey = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    // Encrypt the AES key using the RSA public key
    const exportedAesKey = await window.crypto.subtle.exportKey("raw", aesKey);
    const encryptedAesKey = await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        rsaPublicKey,
        exportedAesKey
    );

    // Read the file as ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    // Initialization vector for AES-GCM
    const iv = window.crypto.getRandomValues(new Uint8Array(16));

    // Encrypt the file data using AES-GCM
    const encryptedData = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        aesKey,
        arrayBuffer
    );

    // Bundle encrypted AES key and IV with the encrypted file data
    const encryptedDataWithIV = new Uint8Array(iv.length + encryptedData.byteLength + encryptedAesKey.byteLength);
    encryptedDataWithIV.set(new Uint8Array(iv), 0); // Set IV bytes
    encryptedDataWithIV.set(new Uint8Array(encryptedAesKey), iv.length); // Set encrypted AES key bytes
    encryptedDataWithIV.set(new Uint8Array(encryptedData), iv.length + encryptedAesKey.byteLength); // Set encrypted data bytes

    console.log("Encrypted Data with IV:", encryptedDataWithIV);


    
    return encryptedDataWithIV;
}


export async function handleFileDecrypt(encryptedDataWithIV, privateKey) {
    try {
        const key = await importAesKeyFromBase64(privateKey);
        console.log('key', key);
        const iv = encryptedDataWithIV.slice(0, 12);
        const encryptedData = encryptedDataWithIV.slice(12);

        console.log(`IV Length: ${iv.length}`, iv);
        console.log(`Encrypted Data Length: ${encryptedData.length}`, encryptedData);

        const decrypted = await window.crypto.subtle.decrypt(
            { name: "AES-GCM", iv },
            key,
            encryptedData
        );

        // for blob
        const decryptedBlob = new Blob([decrypted], { type: "application/octet-stream" });
        return decryptedBlob;


        // const decryptedBase64 = btoa(String.fromCharCode.apply(null, new Uint8Array(decrypted)));
        // return decryptedBase64;
    } catch (error) {
        console.error("Decryption failed:", error);
        throw error;
    }
}





