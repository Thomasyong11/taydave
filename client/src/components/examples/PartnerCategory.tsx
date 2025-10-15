import PartnerCategory from '../PartnerCategory'
import { Building2 } from 'lucide-react'

export default function PartnerCategoryExample() {
  return (
    <PartnerCategory 
      icon={Building2}
      title="Engineering Firms"
      description="Structural and civil engineering specialists"
      index={0}
    />
  )
}
