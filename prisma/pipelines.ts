import { PipelineStatus } from '@prisma/client';

export const Pipelines = [
  {
    name: '16SrRNA',
    description:
      'Variable regions in 16SrRNA, used to study Cystic Fibrosis (Doud et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/16SrRNA',
    status: PipelineStatus.Completed
  },
  {
    name: 'Alpha-1',
    description: 'Alpha-1 Antitrypsin Deficiency (Cickovski et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/Alpha-1',
    status: PipelineStatus.Completed
  },
  {
    name: 'ASV',
    description:
      'Data Analysis Using Amplicon Sequence Variants (ASVs) (Nayman et al, 2021)',
    githubUrl: 'https://github.com/movingpictures83/ASV',
    status: PipelineStatus.Completed
  },
  {
    name: 'Mouse',
    description:
      'Simple pipeline to analyze mouse gut microbiome, from the PluMA userguide (Kozich et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/Mouse',
    status: PipelineStatus.Completed
  },
  {
    name: 'PM16S',
    description:
      'Downstream analysis on 16S mouse gut microbiome data, pre- and post-obesity (Cickovski and Narasimhan, 2018)',
    githubUrl: 'https://github.com/movingpictures83/PM16S',
    status: PipelineStatus.Completed
  },
  {
    name: 'Plots',
    description:
      'Divide a dataset into groups and produce boxplots, heatmaps and Principal Component Analysis',
    githubUrl: 'https://github.com/movingpictures83/Plots',
    status: PipelineStatus.Completed
  },
  {
    name: 'Qiime2',
    description:
      'Metagenomics Pipeline with Qiime2 Facilities (Polanco et al, 2020)',
    githubUrl: 'https://github.com/movingpictures83/Qiime2',
    status: PipelineStatus.Completed
  },
  {
    name: 'RawAnalysis',
    description:
      'Take a file of reads, normalize and threshold them, and finally split them into CSV files by group',
    githubUrl: 'https://github.com/movingpictures83/rawAnalysis',
    status: PipelineStatus.Completed
  },
  {
    name: 'RunBacteria',
    description: 'Produce Microbial Social Networks (Fernandez et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/runBacteria',
    status: PipelineStatus.Completed
  },
  {
    name: 'Viral',
    description: 'Viral Challenge',
    githubUrl: 'https://github.com/movingpictures83/Viral',
    status: PipelineStatus.Completed
  },
  {
    name: 'ADHD',
    description: 'ADHD (Mathee et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/ADHD',
    status: PipelineStatus.InProgress
  },
  {
    name: 'ASV_OTU',
    description:
      'Study comparing OTUs with Amplicon Sequence Variants (ASVs) (Callahan et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/ASV_OTU',
    status: PipelineStatus.InProgress
  },
  {
    name: 'Glutamine',
    description: 'Analysis of Glutamine Metabolite',
    githubUrl: 'https://github.com/movingpictures83/Glutamine',
    status: PipelineStatus.InProgress
  },
  {
    name: 'IBD',
    description: 'Irritable Bowl Disease (IBD) (Lloyd-Price et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/IBD',
    status: PipelineStatus.InProgress
  },
  {
    name: 'Pseudomonas',
    description: 'Pseudomonas Genome Evolution (Mathee et al, 2008, 2020)',
    githubUrl: 'https://github.com/movingpictures83/Pseudomonas',
    status: PipelineStatus.InProgress
  },
  {
    name: 'Smoking',
    description:
      'Study comparing and contrasting smoker lung microbiomes (Campos et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/Smoking',
    status: PipelineStatus.InProgress
  },
  {
    name: 'Soil',
    description:
      'Analyzing soil microbial communities from Tims Branch watershed exposed to heavy metals (Morales and Weisenhorn, 2019)',
    githubUrl: 'https://github.com/movingpictures83/Soil',
    status: PipelineStatus.InProgress
  },
  {
    name: 'Cancer',
    description: 'Pan-cancer analysis of whole genomes (PCAWGC, 2020)',
    githubUrl: 'https://github.com/movingpictures83/Cancer',
    status: PipelineStatus.Future
  },
  {
    name: 'Causality',
    description: 'Causality (Sazal et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/Causality',
    status: PipelineStatus.Future
  },
  {
    name: 'Covid',
    description: 'Covid-19 and Thrombosis (Nunez-Castilla et al, 2021)',
    githubUrl: 'https://github.com/movingpictures83/Covid',
    status: PipelineStatus.Future
  },
  {
    name: 'DBN',
    description: 'Dynamic Bayesian Networks (DBNs) (Ruiz-Perez et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/DBN',
    status: PipelineStatus.Future
  },
  {
    name: 'MWAS',
    description: 'Metagenome-Wide Association Studies (Wang and Jia, 2016)',
    githubUrl: 'https://github.com/movingpictures83/MWAS',
    status: PipelineStatus.Future
  },
  {
    name: 'Multiomics',
    description: 'Multiomics downstream analysis (Cickovski et al, 2021)',
    githubUrl: 'https://github.com/movingpictures83/Multiomics',
    status: PipelineStatus.Future
  },
  {
    name: 'Parkinsons',
    description: "Parkinson's Disease (Pietrucci et al, 2020)",
    githubUrl: 'https://github.com/movingpictures83/Parkinsons',
    status: PipelineStatus.Future
  },
  {
    name: 'PetRi',
    description: 'PetRi (Stebliankin et al, 2020)',
    githubUrl: 'https://github.com/movingpictures83/PetRI',
    status: PipelineStatus.Future
  },
  {
    name: 'T2D',
    description: 'Type 2 Diabetes (T2D) (Stanford University, 2020)',
    githubUrl: 'https://github.com/movingpictures83/T2D',
    status: PipelineStatus.Future
  },
  {
    name: 'WanDB',
    description: 'WanDB (Rahman, 2020)',
    githubUrl: 'https://github.com/movingpictures83/WanDB',
    status: PipelineStatus.Future
  }
];
