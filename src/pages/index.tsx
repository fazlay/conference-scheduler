import BaseLayout from '@/layout/BaseLayout';
import { ReactNode } from 'react';
import { Base } from '../templates/Base';

const Index = () => <Base />;

Index.getLayout = (page: ReactNode) => {
  return (
    <BaseLayout className="flex min-h-screen flex-col bg-brand-25/50">
      {page}
    </BaseLayout>
  );
};

export default Index;
