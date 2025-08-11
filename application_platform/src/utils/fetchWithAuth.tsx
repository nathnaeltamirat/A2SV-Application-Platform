export async function FetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  const authOptions: RequestInit = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      "Content-Type": "application/json",
    },
  };

  let response = await fetch(url, authOptions);

  
  if (response.status === 401 && refreshToken) {
    const refreshRes = await fetch(
      "https://a2sv-application-platform-backend-team2.onrender.com/auth/token/refresh",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      }
    );

    if (refreshRes.ok) {
      const data: { access: string; refresh?: string } = await refreshRes.json();
      const newAccessToken = data.access;

      
      localStorage.setItem("access_token", newAccessToken);

      
      const retryOptions: RequestInit = {
        ...authOptions,
        headers: {
          ...authOptions.headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
      };

      response = await fetch(url, retryOptions);
    } else {
     
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/auth/login";
    }
  }

  return response;
}
