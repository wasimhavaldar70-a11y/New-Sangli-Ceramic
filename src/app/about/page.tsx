import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sangali Ceramica, our mission, vision, and the team behind our premium tile and sanitaryware collections.',
}

export default function AboutPage() {
  return <AboutClient />
}
