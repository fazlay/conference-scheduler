import { GetStaticProps } from "next";
import { ReactNode } from "react";

import { gql } from "@apollo/client";
import BaseLayout from "@/layout/BaseLayout";
import createApolloClient from "@/lib/client";
import HomePage from "@/components/HomePage";

export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query getConference {
        conferences {
          id
          name
          slogan
          startDate
        }
      }
    `,
  });

  return {
    props: {
      conferences: data.conferences,
    },
  };
};

const Index = ({ conferences }) => {
  return <HomePage conferences={conferences} />;
};

Index.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};

export default Index;
