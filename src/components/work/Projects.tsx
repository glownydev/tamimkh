import { Column, Text, SmartLink, Button } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

export function Projects() {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <ProjectCard
        priority={true}
        key="tecnotalk"
        href="https://github.com/glownydev/tecnotalk"
        images={[]}
        title="TecnoTalk"
        description="TecnoTalk est un outil pour faciliter la mise de punitions aux élèves, conçu pour les professeurs. Il permet de gérer et suivre les sanctions de façon simple et rapide."
        content=""
        avatars={[]}
        link="https://github.com/glownydev/tecnotalk"
        appLink="https://app.tamimkh.com"
      />
      <Column horizontal="center" marginTop="16">
        <SmartLink href="https://github.com/glownydev/tecnotalk/releases/download/v.0.3.2-alpha/TecnoTalk.Desktop.Setup.1.0.0.exe">
          <Button variant="secondary" size="m">
            Télécharger TecnoTalk
          </Button>
        </SmartLink>
      </Column>
      <Text style={{ textAlign: "center", marginTop: 32, fontWeight: 500, color: '#888' }}>
        Des prochains projets arriveront prochainement !
      </Text>
    </Column>
  );
}
