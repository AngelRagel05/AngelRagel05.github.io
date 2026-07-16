import mikiwiDemo from '../assets/gif/DemoMikiwi.gif';

export const projects = [
  {
    id: 'mikiwi',
    slug: 'mikiwi',
    featured: true,
    showOnHome: true,
    image: mikiwiDemo,
    technologies: [
      'Laravel',
      'React',
      'Inertia.js',
      'PostgreSQL',
      'GitHub Actions',
      'Git Flow',
    ],
    repositoryUrl: 'https://github.com/joangriful/MiKiwi',
    demoUrl: 'https://mikiwi.onrender.com/',
    titleKey: 'projects.items.mikiwi.title',
    categoryKey: 'projects.items.mikiwi.category',
    shortDescriptionKey: 'projects.items.mikiwi.shortDescription',
    descriptionKey: 'projects.items.mikiwi.description',
    imageAltKey: 'projects.items.mikiwi.imageAlt',
    previewLabelKey: 'projects.previewPlaceholder',
    detailSections: {
      challenge: {
        titleKey: 'pages.projectDetail.sections.challenge',
        contentKey: 'projects.items.mikiwi.challenge',
      },
      solution: {
        titleKey: 'pages.projectDetail.sections.solution',
        contentKey: 'projects.items.mikiwi.solution',
      },
      technicalDecisions: {
        titleKey: 'pages.projectDetail.sections.technicalDecisions',
        itemsKey: 'projects.items.mikiwi.technicalDecisions',
      },
      learning: {
        titleKey: 'pages.projectDetail.sections.keyLearning',
        contentKey: 'projects.items.mikiwi.learning',
      },
    },
  },
  {
    id: 'soundshelf',
    slug: 'soundshelf',
    featured: false,
    showOnHome: true,
    image: null,
    technologies: ['Python', 'CustomTkinter', 'SQLAlchemy', 'SQLite'],
    repositoryUrl: '',
    demoUrl: '',
    titleKey: 'projects.items.soundshelf.title',
    categoryKey: 'projects.items.soundshelf.category',
    shortDescriptionKey: 'projects.items.soundshelf.shortDescription',
    descriptionKey: 'projects.items.soundshelf.shortDescription',
    imageAltKey: null,
    previewLabelKey: 'projects.previewPlaceholder',
    detailSections: {},
  },
  {
    id: 'polygon-execution',
    slug: 'polygon-execution',
    featured: false,
    showOnHome: true,
    image: null,
    technologies: ['Unity', 'C#'],
    repositoryUrl: '',
    demoUrl: '',
    titleKey: 'projects.items.polygonExecution.title',
    categoryKey: 'projects.items.polygonExecution.category',
    shortDescriptionKey: 'projects.items.polygonExecution.shortDescription',
    descriptionKey: 'projects.items.polygonExecution.shortDescription',
    imageAltKey: null,
    previewLabelKey: 'projects.previewPlaceholder',
    detailSections: {},
  },
  {
    id: 'zerohour',
    slug: 'zerohour',
    featured: false,
    showOnHome: true,
    image: null,
    technologies: ['Unity', 'C#'],
    repositoryUrl: '',
    demoUrl: '',
    titleKey: 'projects.items.zerohour.title',
    categoryKey: 'projects.items.zerohour.category',
    shortDescriptionKey: 'projects.items.zerohour.shortDescription',
    descriptionKey: 'projects.items.zerohour.shortDescription',
    imageAltKey: null,
    previewLabelKey: 'projects.previewPlaceholder',
    detailSections: {},
  },
];

export const featuredProject = projects.find((project) => project.featured);

export const homePreviewProjects = projects.filter(
  (project) => project.showOnHome && !project.featured,
);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
