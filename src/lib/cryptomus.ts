import crypto from "crypto";

export interface CryptomusSubscriptionPayload {
  amount: string;
  currency: string;
  order_id: string;
  name: string;
  url_return_success: string;
  url_return_cancel: string;
  is_payment_multiple?: boolean;
  lifetime?: number;
}

export interface CryptomusResponse {
  result?: {
    uuid: string;
    url: string;
    status: string;
  };
  error?: string;
  errors?: Record<string, string[]>;
  message?: string;
}

function generateSignature(data: string, apiKey: string): string {
  return crypto
    .createHash("md5")
    .update(data + apiKey)
    .digest("hex");
}

export async function createCryptomusSubscription(
  payload: CryptomusSubscriptionPayload
): Promise<CryptomusResponse> {
  const merchantId = process.env.CRYPTOMUS_MERCHANT_ID;
  const apiKey = process.env.CRYPTOMUS_API_KEY;
  const baseUrl =
    process.env.CRYPTOMUS_BASE_URL || "https://api.cryptomus.com/v1";

  if (!merchantId || !apiKey) {
    throw new Error("Missing Cryptomus credentials in environment variables");
  }

  const requestBody = {
    amount: payload.amount,
    currency: payload.currency,
    order_id: payload.order_id,
    name: payload.name,
    url_return_success: payload.url_return_success,
    url_return_cancel: payload.url_return_cancel,
    is_payment_multiple: payload.is_payment_multiple ?? true,
    lifetime: payload.lifetime || 3600,
  };

  const jsonString = JSON.stringify(requestBody);
  const base64Payload = Buffer.from(jsonString).toString("base64");

  // Signature is calculated as: MD5(base64(json) + apiKey)
  const sign = generateSignature(base64Payload, apiKey);

  try {
    const response = await fetch(`${baseUrl}/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        merchant: merchantId,
        sign: sign,
      },
      body: jsonString,
    });

    const data = await response.json();

    if (!response.ok || data.result === null) {
      throw new Error(
        `Cryptomus API error: ${
          data.message ||
          data.error ||
          JSON.stringify(data.errors || "Unknown error")
        }`
      );
    }

    return data as CryptomusResponse;
  } catch (error) {
    console.error("Cryptomus subscription creation failed:", error);
    throw error;
  }
}

export function generateOrderId(): string {
  return `order_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}
