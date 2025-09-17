import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
// import { Mailchimp } from "@/components";
// import { Posts } from "@/components/blog/Posts";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Blog",
    description: "Retrouvez ici les articles et ressources de Tamim Khenissi.",
    baseURL: baseURL,
  image: '/api/og/generate?title=Blog',
    path: "/blog",
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        Blog
      </Heading>
  {/* Blog désactivé, contenu supprimé */}
    </Column>
  );
}
