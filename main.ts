import { serve } from "https://deno.land/std/http/mod.ts";
const fileService = "https://api.opensea.io/";
async function reqHandler(req: Request) {
  const path = new URL(req.url).pathname;

       var openSeaHeaders = new Headers();
      openSeaHeaders.append("X-API-KEY", "36bcfeb8b7b848dd9eec125683d47078");

      var openSeaRequestOptions = {
        method: "GET",
        headers: openSeaHeaders,
        redirect: "follow",
      };

    //  const openSeaResponse = await fetch(
  //      `https://api.opensea.io/v2/orders/ethereum/seaport/listings?order_by=created_date&order_direction=desc`,
   //     openSeaRequestOptions
   //   );

  
  
   const proxyRes = await fetch(fileService + path,openSeaRequestOptions);
  // const openSeaData = await proxyRes.json();
   //console.log("OpenSea Data:", openSeaData);
  return new Response(proxyRes.body, { status: proxyRes.status });
}
serve(reqHandler, { port:80 });
