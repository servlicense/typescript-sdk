import axios from "axios";
import { type RequestOptions } from "./types";

class ServlicenseClient {
  private readonly server: string;
  private identifier: string | undefined;
  private secret: string | undefined;

  constructor(server: string) {
    this.server = server;
  }

  withAuth(identifier: string, secret: string): this {
    this.identifier = identifier;
    this.secret = secret;
    return this;
  }

  async request<T>(path: string, options: RequestOptions): Promise<T> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (this.identifier && this.secret) {
      headers["Authorization"] = `${Buffer.from(
        `${this.identifier}:${this.secret}`
      ).toString("base64")}`;
    }

    const response = await axios({
      method: options.method,
      url: `${this.server}${path}`,
      headers,
      data: options.body,
    });

    return response.data;
  }

  async me(): Promise<{ id: string; scopes: [] }> {
    if (!this.identifier || !this.secret) {
      throw new Error(
        "ServlicenseClientError: No credentials provided, can't check scopes."
      );
    }
    return this.request("/auth/me", { method: "GET" });
  }
}

export default ServlicenseClient;
