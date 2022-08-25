import type { Auth, Event } from "../types";
import { v2BaseUrl, fetch, newCookie } from "./fetch";

export interface GetEventsRequest extends Auth {
  from: Date;
  to: Date;
}

export interface GetEventsResponse {
  events: Event[];
}

const toDateQuery = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDay();
  return `${date.getFullYear()}${month < 10 ? "0" + month : month}${day < 10 ? "0" + day : day}`;
};

/**
 * Gets live game events between specified dates.
 * @param request provides the dates to get events.
 * @returns game events.
 */
export const getEvents = async (request: GetEventsRequest): Promise<GetEventsResponse> => {
  const to = toDateQuery(request.to);
  const from = toDateQuery(request.from);
  return fetch(`${v2BaseUrl}/games/ffl/games?useMap=true&dates=${from}-${to}&pbpOnly=true`, {
    headers: {
      Cookie: newCookie(request),
    },
  });
};
