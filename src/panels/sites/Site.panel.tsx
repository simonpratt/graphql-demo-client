import { ContentLayout, SubHeading } from '@dtdot/lego';
import React from 'react';
import { useParams } from 'react-router-dom';

const SitePanel = () => {
  const { siteId } = useParams() as any;

  return (
    <ContentLayout>
      <ContentLayout.Header>
        <SubHeading>Site {siteId}</SubHeading>
      </ContentLayout.Header>
      <ContentLayout.Content></ContentLayout.Content>
    </ContentLayout>
  );
};

export default SitePanel;
