import type { Number2 } from "$lib/types";
import { SMARTCUT_API_KEY } from "$env/static/private";

export async function smartcut(stock: Number2, parts: Number2[], spacing: number) {
  let body = {
    saw: {
      options: {
        minSpacing: spacing
      }
    },
    stock: [{
      l: stock.x,
      w: stock.y,
    }],
    parts: parts.map(part => ({
      l: part.x,
      w: part.y,
    })),
  };

  let calcResponse = await fetch("https://api.smartcut.dev/v2/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": SMARTCUT_API_KEY,
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body),
  });

  let { id: jobId } = await calcResponse.json();

  let pollResponse = await fetch(`https://smartcut.dev/v2/result?id=${jobId}`, {
    method: "GET",
    headers: {
      Authorization: SMARTCUT_API_KEY
    }
  });

  let result = await pollResponse.json();

  return result.stock;


  //I want this function to return an array with all the stocks needed, and data detailing all the position and sizes of every part to be cut
  //is the information included in the body enough information for the api?
  //how do I send the request to the API including the API key?
}