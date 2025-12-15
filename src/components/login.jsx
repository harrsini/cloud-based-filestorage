import { generateCodeVerifier, generateCodeChallenge } from "../auth/pkce";

function Login() {
  const login = async () => {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);

    // store verifier for token exchange later
    sessionStorage.setItem("pkce_verifier", verifier);

    const params = new URLSearchParams({
      client_id: "28ki4ifpflrutnm48jirmnp58c",
      response_type: "code",
      scope: "openid email phone",
      redirect_uri: "http://localhost:5173/",
      code_challenge: challenge,
      code_challenge_method: "S256",
    });

    window.location.href =
      "https://us-east-1hpueuh0mw.auth.us-east-1.amazoncognito.com/oauth2/authorize?" +
      params.toString();
  };

  return <button onClick={login}>Login</button>;
}

export default Login;
