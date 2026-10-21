const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8' },
})

const text = (value, limit) => String(value || '').trim().slice(0, limit)

export async function onRequestPost({ request, env }) {
  let payload
  try {
    payload = await request.json()
  } catch {
    return json({ error: 'Invalid form submission.' }, 400)
  }

  if (text(payload.website, 200)) return json({ ok: true })

  const lead = {
    name: text(payload.name, 160),
    email: text(payload.email, 254),
    phone: text(payload.phone, 64),
    business: text(payload.business, 160),
    message: text(payload.message, 4000),
  }
  if (!/^\d{10}$/.test(lead.phone)) return json({ error: 'Enter a 10-digit phone number.' }, 400)
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ error: 'Contact delivery is not configured yet.' }, 503)
  }

  const site = new URL(request.url).hostname
  const telegram = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: `New website lead — ${site}\n\nName: ${lead.name || 'Not provided'}\nEmail: ${lead.email || 'Not provided'}\nPhone: ${lead.phone}\nBusiness / Role: ${lead.business || 'Not provided'}\n\nMessage:\n${lead.message || 'Not provided'}`,
    }),
  })
  const delivery = await telegram.json().catch(() => null)
  if (!telegram.ok || !delivery?.ok) return json({ error: 'Unable to deliver your message right now.' }, 502)
  return json({ ok: true })
}
