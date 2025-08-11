export const resetPassword = async (payload: any) => {
  const options = {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/auth/reset-password",
    options
  );

  if (!res.ok) {
    throw new Error("can't reset");
  }
};
