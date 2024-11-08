export const buttondownSubscribe = async (email_address: string) => {
  const API_KEY = process.env.BUTTONDOWN_API_KEY
  const API_URL = 'https://api.buttondown.email/v1/'
  const buttondownRoute = `${API_URL}subscribers`
  const response = await fetch(buttondownRoute, {
    body: JSON.stringify({
      email_address,
    }),
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  return response
}
