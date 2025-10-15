import ServiceCard from '../ServiceCard'
import { Hammer } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <ServiceCard 
      icon={Hammer}
      title="Infrastructure Readiness"
      description="Ensuring projects align with regional infrastructure capabilities and requirements."
      index={0}
    />
  )
}
