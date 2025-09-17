import { Column, Text } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

export function Projects() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <ProjectCard
        priority={true}
        key="tecnotalk"
        href="/work/tecnotalk"
        images={["/images/projects/project-01/cover-01.jpg"]}
        title="TecnoTalk"
        description="TecnoTalk est un outil pour faciliter la mise de punitions aux élèves, conçu pour les professeurs. Il permet de gérer et suivre les sanctions de façon simple et rapide."
        content=""
        avatars={[]}
        link=""
      />
      <Text style={{ textAlign: "center", marginTop: 32, fontWeight: 500, color: '#888' }}>
        Des prochains projets arriveront prochainement !
      </Text>
    </Column>
  );
}
