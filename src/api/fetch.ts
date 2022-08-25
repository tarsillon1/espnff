import type { Auth } from "../types";
import superFetch, { RequestInit } from "node-fetch";

export const v3BaseUrl = "https://fantasy.espn.com/apis/v3";
export const v2BaseUrl = "https://site.api.espn.com/apis/fantasy/v2";

export const newCookie = (request: Auth): string => `SWID=${request.swid};espn_s2=${request.espnS2};`;

export const fetch = async (url: string, opts: RequestInit): Promise<any> => {
  const response = await superFetch(url, opts);
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`failed to fetch with status code ${response.status}: ${response.statusText}: ${text}`);
  }
  return response.json();
};
