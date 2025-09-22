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
      <Column horizontal="center" marginTop="16">
        <a href="https://github.com/glownydev/tecnotalk/releases/download/v.0.3.2-alpha/TecnoTalk.Desktop.Setup.1.0.0.exe" download>
          <button type="button" style={{
            padding: "12px 32px",
            borderRadius: "8px",
            border: "2px solid #0070f3",
            background: "#fff",
            color: "#0070f3",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer"
          }}>
            Télécharger TecnoTalk
          </button>
        </a>
      </Column>
      <Text style={{ textAlign: "center", marginTop: 32, fontWeight: 500, color: '#888' }}>
        Des prochains projets arriveront prochainement !
      </Text>
    </Column>
  );
}
