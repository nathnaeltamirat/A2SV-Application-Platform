export async function fetchCycles(currentPage:number,limit:number) {
  const res = await fetch(
    `https://a2sv-application-platform-backend-team9.onrender.com/cycles/?page=${currentPage}&limit=${limit}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}
