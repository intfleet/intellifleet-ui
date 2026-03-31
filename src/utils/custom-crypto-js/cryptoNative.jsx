// Helper to encode/decode base64
export const bufferToBase64 = (buffer) => btoa(String.fromCharCode(...new Uint8Array(buffer)))

export const base64ToBuffer = (base64) => Uint8Array.from(atob(base64), c => c.charCodeAt(0))

// Derive AES key from password using PBKDF2
export async function deriveKey(password, salt) {
  const enc = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  )

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )
}

// Encrypt text using AES-GCM with password
export async function encryptText(text, password) {
  const enc = new TextEncoder()
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const key = await deriveKey(password, salt)

  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc.encode(text)
  )

  return {
    cipherText: bufferToBase64(encrypted),
    iv: bufferToBase64(iv),
    salt: bufferToBase64(salt),
  }
}

// Decrypt text using AES-GCM with password
export async function decryptText(cipherText, password, ivBase64, saltBase64) {
  const dec = new TextDecoder()
  const iv = base64ToBuffer(ivBase64)
  const salt = base64ToBuffer(saltBase64)
  const encryptedData = base64ToBuffer(cipherText)
  const key = await deriveKey(password, salt)

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    encryptedData
  )

  return dec.decode(decrypted)
}
