import mikiwiDemo from '../assets/gif/DemoMikiwi.gif';
import mikiwiThumbnail from '../assets/images/projects/mikiwi/DemoMikiwi.webp';

const projectStatus = {
  published: 'published',
  inDevelopment: 'in-development',
  archived: 'archived',
};

const projectVisibility = {
  public: 'public',
  private: 'private',
};

export const projects = [
  {
    id: 'mikiwi',
    slug: 'mikiwi',
    order: 1,
    featured: true,
    showOnHome: true,
    status: projectStatus.published,
    visibility: projectVisibility.public,
    category: {
      id: 'full-stack-application',
      labelKey: 'projects.items.mikiwi.category',
    },
    media: {
      mainImage: {
        src: mikiwiDemo,
        altKey: 'projects.items.mikiwi.imageAlt',
        type: 'gif',
      },
      thumbnail: {
        src: mikiwiThumbnail,
        altKey: 'projects.items.mikiwi.thumbnailAlt',
      },
      gallery: [],
      video: null,
    },
    technologies: [
      { id: 'laravel', name: 'Laravel' },
      { id: 'react', name: 'React' },
      { id: 'inertia-js', name: 'Inertia.js' },
      { id: 'postgresql', name: 'PostgreSQL' },
      { id: 'github-actions', name: 'GitHub Actions' },
      { id: 'git-flow', name: 'Git Flow' },
    ],
    links: [
      {
        id: 'repository',
        url: 'https://github.com/joangriful/MiKiwi',
        labelKey: 'pages.projectDetail.links.repository',
        variant: 'primary',
        external: true,
      },
      {
        id: 'demo',
        url: 'https://mikiwi.onrender.com/',
        labelKey: 'pages.projectDetail.links.demo',
        variant: 'secondary',
        external: true,
      },
    ],
    i18n: {
      titleKey: 'projects.items.mikiwi.title',
      shortDescriptionKey: 'projects.items.mikiwi.shortDescription',
      overviewKey: 'projects.items.mikiwi.description',
    },
    detailSections: [
      {
        id: 'challenge',
        titleKey: 'pages.projectDetail.sections.challenge',
        contentKey: 'projects.items.mikiwi.challenge',
        showOnFeatured: true,
      },
      {
        id: 'solution',
        titleKey: 'pages.projectDetail.sections.solution',
        contentKey: 'projects.items.mikiwi.solution',
        showOnFeatured: true,
      },
      {
        id: 'technical-decisions',
        titleKey: 'pages.projectDetail.sections.technicalDecisions',
        itemsKey: 'projects.items.mikiwi.technicalDecisions',
        showOnFeatured: true,
      },
      {
        id: 'key-takeaway',
        titleKey: 'pages.projectDetail.sections.keyLearning',
        contentKey: 'projects.items.mikiwi.learning',
        showOnFeatured: true,
      },
    ],
  },
  {
    id: 'soundshelf',
    slug: 'soundshelf',
    order: 2,
    featured: false,
    showOnHome: true,
    status: projectStatus.published,
    visibility: projectVisibility.public,
    category: {
      id: 'desktop-application',
      labelKey: 'projects.items.soundshelf.category',
    },
    media: {
      mainImage: null,
      thumbnail: null,
      gallery: [],
      video: null,
    },
    technologies: [
      { id: 'python', name: 'Python' },
      { id: 'customtkinter', name: 'CustomTkinter' },
      { id: 'sqlalchemy', name: 'SQLAlchemy' },
      { id: 'sqlite', name: 'SQLite' },
      { id: 'alembic', name: 'Alembic' },
      { id: 'mutagen', name: 'Mutagen' },
      { id: 'yt-dlp', name: 'yt-dlp' },
      { id: 'ffmpeg', name: 'ffmpeg' },
      { id: 'pillow', name: 'Pillow' },
      { id: 'github-actions', name: 'GitHub Actions' },
    ],
    links: [
      {
        id: 'repository',
        url: 'https://github.com/AngelRagel05/SoundShelf',
        labelKey: 'pages.projectDetail.links.repository',
        variant: 'primary',
        external: true,
      },
    ],
    i18n: {
      titleKey: 'projects.items.soundshelf.title',
      shortDescriptionKey: 'projects.items.soundshelf.shortDescription',
      overviewKey: 'projects.items.soundshelf.overview',
    },
    detailSections: [
      {
        id: 'challenge',
        titleKey: 'pages.projectDetail.sections.challenge',
        contentKey: 'projects.items.soundshelf.challenge',
      },
      {
        id: 'solution',
        titleKey: 'pages.projectDetail.sections.solution',
        contentKey: 'projects.items.soundshelf.solution',
      },
      {
        id: 'technical-decisions',
        titleKey: 'pages.projectDetail.sections.technicalDecisions',
        itemsKey: 'projects.items.soundshelf.technicalDecisions',
      },
      {
        id: 'key-takeaway',
        titleKey: 'pages.projectDetail.sections.keyLearning',
        contentKey: 'projects.items.soundshelf.learning',
      },
    ],
  },
  {
    id: 'zerohour',
    slug: 'zerohour',
    order: 3,
    featured: false,
    showOnHome: true,
    status: projectStatus.published,
    visibility: projectVisibility.public,
    category: {
      id: '2d-platform-game',
      labelKey: 'projects.items.zerohour.category',
    },
    media: {
      mainImage: null,
      thumbnail: null,
      gallery: [],
      video: null,
    },
    technologies: [
      { id: 'unity', name: 'Unity' },
      { id: 'c-sharp', name: 'C#' },
      { id: 'unity-ui', name: 'Unity UI' },
      { id: 'playerprefs', name: 'PlayerPrefs' },
      { id: 'tilemap', name: 'Tilemap' },
      { id: '2d-physics', name: '2D Physics' },
    ],
    links: [
      {
        id: 'repository',
        url: 'https://github.com/AngelRagel05/ZeroHour',
        labelKey: 'pages.projectDetail.links.repository',
        variant: 'primary',
        external: true,
      },
      {
        id: 'gameplay-video',
        url: 'https://youtu.be/hYiUXvoiLvY',
        labelKey: 'pages.projectDetail.links.gameplayVideo',
        variant: 'secondary',
        external: true,
      },
    ],
    i18n: {
      titleKey: 'projects.items.zerohour.title',
      shortDescriptionKey: 'projects.items.zerohour.shortDescription',
      overviewKey: 'projects.items.zerohour.overview',
    },
    detailSections: [
      {
        id: 'challenge',
        titleKey: 'pages.projectDetail.sections.challenge',
        contentKey: 'projects.items.zerohour.challenge',
      },
      {
        id: 'solution',
        titleKey: 'pages.projectDetail.sections.solution',
        contentKey: 'projects.items.zerohour.solution',
      },
      {
        id: 'technical-decisions',
        titleKey: 'pages.projectDetail.sections.technicalDecisions',
        itemsKey: 'projects.items.zerohour.technicalDecisions',
      },
      {
        id: 'key-takeaway',
        titleKey: 'pages.projectDetail.sections.keyLearning',
        contentKey: 'projects.items.zerohour.learning',
      },
    ],
  },
  {
    id: 'polygon-execution',
    slug: 'polygon-execution',
    order: 4,
    featured: false,
    showOnHome: true,
    status: projectStatus.published,
    visibility: projectVisibility.public,
    category: {
      id: 'top-down-action-game',
      labelKey: 'projects.items.polygonExecution.category',
    },
    media: {
      mainImage: null,
      thumbnail: null,
      gallery: [],
      video: null,
    },
    technologies: [
      { id: 'unity', name: 'Unity' },
      { id: 'c-sharp', name: 'C#' },
      { id: 'urp', name: 'URP' },
      { id: 'unity-ui', name: 'Unity UI' },
      { id: '3d-physics', name: '3D Physics' },
    ],
    links: [
      {
        id: 'repository',
        url: 'https://github.com/AngelRagel05/PolygonExecution',
        labelKey: 'pages.projectDetail.links.repository',
        variant: 'primary',
        external: true,
      },
      {
        id: 'download-build',
        url: 'https://drive.google.com/drive/folders/1TTRt5qeZdJ_0_8Kt5elMyoJ2hSJdJQYq?usp=drive_link',
        labelKey: 'pages.projectDetail.links.downloadBuild',
        variant: 'secondary',
        external: true,
      },
    ],
    i18n: {
      titleKey: 'projects.items.polygonExecution.title',
      shortDescriptionKey:
        'projects.items.polygonExecution.shortDescription',
      overviewKey: 'projects.items.polygonExecution.overview',
    },
    detailSections: [
      {
        id: 'challenge',
        titleKey: 'pages.projectDetail.sections.challenge',
        contentKey: 'projects.items.polygonExecution.challenge',
      },
      {
        id: 'solution',
        titleKey: 'pages.projectDetail.sections.solution',
        contentKey: 'projects.items.polygonExecution.solution',
      },
      {
        id: 'technical-decisions',
        titleKey: 'pages.projectDetail.sections.technicalDecisions',
        itemsKey: 'projects.items.polygonExecution.technicalDecisions',
      },
      {
        id: 'key-takeaway',
        titleKey: 'pages.projectDetail.sections.keyLearning',
        contentKey: 'projects.items.polygonExecution.learning',
      },
    ],
  },
];

function sortByOrder(projectsToSort) {
  return [...projectsToSort].sort((currentProject, nextProject) => (
    currentProject.order - nextProject.order
  ));
}

export const publicProjects = sortByOrder(
  projects.filter((project) => project.visibility === projectVisibility.public),
);

export const featuredProject = publicProjects.find(
  (project) => project.featured,
);

export const homePreviewProjects = publicProjects.filter(
  (project) => project.showOnHome && !project.featured,
);

export function getProjectBySlug(slug) {
  return publicProjects.find((project) => project.slug === slug);
}
