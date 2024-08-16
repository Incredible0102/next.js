'use client'
import { experimental_renderToHTML } from 'react-markup'

function Preview() {
  return <div>Hello, Dave!</div>
}

export default async function Page() {
  const html = await experimental_renderToHTML(<Preview />)
  return <pre>{html}</pre>
}
