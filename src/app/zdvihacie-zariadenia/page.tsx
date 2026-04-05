import ServiceDetail from '@/components/ServiceDetail';
import { Metadata } from 'next';
import { services } from '@/lib/services';

const s = services.zdvih;

export const metadata: Metadata = {
  title: `${s.tag} — Alpha Revízie`,
  description: s.desc,
};

export default function Page() {
  return <ServiceDetail serviceKey="zdvih" />;
}
