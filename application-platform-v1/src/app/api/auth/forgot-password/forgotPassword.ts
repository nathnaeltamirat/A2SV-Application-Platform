export const forgotPassword = async (email: string) => {
  const payload = {
    email: email,
    callback_url: "https://a2-sv-application-platform-dflwwl6r2-nathnaeltamirats-projects.vercel.app/auth/reset-password",
  };
  const options = {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(
    "https://a2sv-application-platform-backend-team9.onrender.com/auth/forgot-password",
    options
  );
  console.log(res);
  if (!res.ok) {
    throw new Error("can't reset");
  }
};
