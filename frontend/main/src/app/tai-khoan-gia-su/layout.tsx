import TutorLayoutWrapper from '@/components/TutorLayoutWrapper';
import { ProfileProvider } from '@/context/ProfileContext';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProfileProvider>
      <TutorLayoutWrapper>
        {children}
      </TutorLayoutWrapper>
    </ProfileProvider>
  );
}
