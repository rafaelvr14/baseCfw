export function jsonResponse(data: any, status: number) {
  const body = JSON.stringify({message: data, status: status}, null, 2)
  const init = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Methods": "POST,PUT,GET,OPTIONS,DELETE",
      "Acess-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    status
  }

  return new Response(body, init)
}