
import { PluginCreateInput } from '../server/@generated/prisma-graphql/plugin';
import { categories } from './categories';
import { languages } from './languages';

export const Plugins: PluginCreateInput[] = [
  {
    name: 'AbundCSV2NOA',
    description: 'Convert CSV file of abundances to NOA for Cytoscape',
    githubUrl: 'https://github.com/movingpictures83/AbundCSV2NOA',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'BIOM2CSV',
    description: 'Convert BIOM file to CSVA',
    githubUrl: 'https://github.com/verociraptor/BIOM2CSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'BIOM2Upgrade',
    description: 'Upgrade to BIOM version 2 (McDonald et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/BIOM2Upgrade',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'ClusterCSV2NOA',
    description: 'Convert CSV File Of Clusters to NOA',
    githubUrl: 'https://github.com/movingpictures83/ClusterCSV2NOA',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'Copy',
    description: 'Make a copy of a file',
    githubUrl: 'https://github.com/movingpictures83/Copy',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CountTableProcessing',
    description: 'Converts Mothur Counts To Abundance CSV',
    githubUrl: 'https://github.com/movingpictures83/CountTableProcessing',
    language: Language.R,
    category: Category.FileConverters
  },
  {
    name: 'CSVAppend',
    description: 'Append a new row or column to a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVAppend',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVChop',
    description: 'Return a range of rows from a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVChop',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSV2EDA',
    description: 'Converter from CSV to Cytoscape EDA file format',
    githubUrl: 'https://github.com/movingpictures83/CSV2EDA',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSV2GML',
    description: 'CSV To GML Converter',
    githubUrl: 'https://github.com/movingpictures83/CSV2GML',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSV2PLSDA',
    description: 'Convert an input CSV file to multiple files that can be analyzed with PLSDA (Stahle and Wold 1987)',
    githubUrl: 'https://github.com/movingpictures83/CSV2PLSDA',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSV2PathwayTools',
    description: 'Take a CSV file and perform lookups in PathwayTools (Karp et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/CSV2PathwayTools',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSV2TSNE',
    description: 'Convert CSV file of abundances to multiple input files for TSNE (Van der Maaten et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/CSV2TSNE',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSV2TSV',
    description: 'Converter from comma-separated to tab-delimited format',
    githubUrl: 'https://github.com/movingpictures83/CSV2TSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVExtract',
    description: 'Extract rows from a CSV file with a specific value in a column',
    githubUrl: 'https://github.com/movingpictures83/CSVExtract',
    language: Language.R,
    category: Category.FileConverters
  },
  {
    name: 'CSVFilter',
    description: 'Remove Columns from a CSV file with Zero Values above a threshold',
    githubUrl: 'https://github.com/movingpictures83/CSVFilter',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVIndex',
    description: 'Index a CSV file over a range of columns',
    githubUrl: 'https://github.com/movingpictures83/CSVIndex',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVLabel',
    description: 'Label rows of a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVLabel',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVLast2First',
    description: 'Move the last column of a CSV file to the first ',
    githubUrl: 'https://github.com/movingpictures83/CSVLast2First',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVMerge',
    description: 'Merge Multiple CSV Files',
    githubUrl: 'https://github.com/movingpictures83/CSVMerge',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVPad',
    description: 'CSV Padding',
    githubUrl: 'https://github.com/movingpictures83/CSVPad',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVQuote',
    description: 'Add quotes to row and column headers',
    githubUrl: 'https://github.com/movingpictures83/CSVQuote',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVRemove',
    description: 'Remove a column from a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVRemove',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVScreen',
    description: 'Remove all rows with a zero or non-zero value in a specific column',
    githubUrl: 'https://github.com/movingpictures83/CSVScreen',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVScreenTax',
    description: 'Remove all rows with a zero or non-zero abundance for a specific taxon (any phylogenetic tree level)',
    githubUrl: 'https://github.com/movingpictures83/CSVScreenTax',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVToss',
    description: 'Remove all observables that are not present in a threshold percentage of samples',
    githubUrl: 'https://github.com/movingpictures83/CSVToss',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'CSVTrim',
    description: 'Trim a CSV file to a specific set of columns ',
    githubUrl: 'https://github.com/movingpictures83/CSVTrim',
    language: Language.R,
    category: Category.FileConverters
  },
  {
    name: 'CSVUnPad',
    description: 'Remove CSV padding',
    githubUrl: 'https://github.com/movingpictures83/CSVUnPad',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'DESeq2TXT',
    description: 'Human-readable statistics for DESeq2 (Love et al, 2014) output',
    githubUrl: 'https://github.com/movingpictures83/DESeq2TXT',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'FAAOrthologScreen',
    description: 'Screen two FASTA files for mutual orthologs',
    githubUrl: 'https://github.com/movingpictures83/FAAOrthologScreen',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'FASTA2FASTQ',
    description: 'Convert from FASTA to FASTQ format',
    githubUrl: 'https://github.com/movingpictures83/FASTA2FASTQ',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'FASTQ2FASTA',
    description: 'Convert from FASTQ to FASTA format',
    githubUrl: 'https://github.com/movingpictures83/FASTQ2FASTA',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'FASTQ2QZA',
    description: 'Convert a group of FASTQ files to Qiime2 (Bolyen et al, 2019) QZA (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FASTQ2QZA',
    language: Language.CUDA,
    category: Category.FileConverters
  },
  {
    name: 'FASTAReplace',
    description: 'Replace sequence names with OTU',
    githubUrl: 'https://github.com/movingpictures83/FASTAReplace',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'FilterPathway',
    description: 'Take a CSV and find all pathways present in PathwayTools (Karp et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/FilterPathway',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'GB2CSV',
    description: 'GenBank To CSV Converter',
    githubUrl: 'https://github.com/movingpictures83/GB2CSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'GML2CSV',
    description: 'GML To CSV Converter',
    githubUrl: 'https://github.com/verociraptor/GML2CSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'GTF2CSV',
    description: 'GTF to CSV Converter (Xue, 2021)',
    githubUrl: 'https://github.com/movingpictures83/GTF2CSV',
    language: Language.CUDA,
    category: Category.FileConverters
  },
  {
    name: 'Harvest',
    description: 'Harvest (Treagen et al, 2014) tools',
    githubUrl: 'https://github.com/movingpictures83/Harvest',
    language: Language.CUDA,
    category: Category.FileConverters
  },
  {
    name: 'Krona2CSV',
    description: 'Convert a Krona file to multiple CSV files, one per taxonomic level',
    githubUrl: 'https://github.com/movingpictures83/Krona2CSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'Krona2PhyloSeq',
    description: 'Convert a Krona file to PhyloSeq (McMurdie et al, 2013) OTU and taxonomy tables',
    githubUrl: 'https://github.com/movingpictures83/Krona2PhyloSeq',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'KronaTree',
    description: 'Convert a Krona file to multiple TXT files, one per taxonomic level',
    githubUrl: 'https://github.com/movingpictures83/KronaTree',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'LabelDups',
    description: 'Take a CSV file and label duplicate entries',
    githubUrl: 'https://github.com/movingpictures83/LabelDups',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'MergeFiles',
    description: 'Merge the content of all files that match a pattern',
    githubUrl: 'https://github.com/movingpictures83/MergeFiles',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'Mothur2PhyloSeq',
    description: 'Convert Mothur (Schloss et al, 2009) output to PhyloSeq (McMurdie and Holmes, 2013) input',
    githubUrl: 'https://github.com/movingpictures83/Mothur2PhyloSeq',
    language: Language.R,
    category: Category.FileConverters
  },
  {
    name: 'PathwayFilter',
    description: 'Take a CSV and remove all connections with no corresponding pathway in PathwayTools (Karp et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/PathwayFilter',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'PathwayTools2HMDB',
    description: 'Map PathwayTools (Karp et al, 2015) identifiers to HMDB',
    githubUrl: 'https://github.com/movingpictures83/PathwayTools2HMDB',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'PCL2CSV',
    description: 'PCL To CSV (File Conversion)',
    githubUrl: 'https://github.com/movingpictures83/PCL2CSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'PCPoints',
    description: 'Convert principal components to (x,y) coordinates',
    githubUrl: 'https://github.com/movingpictures83/PCPoints',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'PhyloSeq2LEfSe',
    description: 'Convert PhyloSeq (McMurdie and Holmes, 2013) data to a single file that can be analyzed by LEfSe (Segata et al, 2011) for biomarkers ',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeq2LEfSe',
    language: Language.R,
    category: Category.FileConverters
  },
  {
    name: 'PhyloSeq2Qiime',
    description: 'Convert PhyloSeq (McMurdie and Holmes, 2013) data files (OTU/TAX/META) into Qiime (Caporaso et al, 2010)-compatible (BIOM/TRE) formats ',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeq2Qiime',
    language: Language.R,
    category: Category.FileConverters
  },
  {
    name: 'PhyloSeqReorder',
    description: 'Reorder PhyloSeq (McMurdie and Holmes, 2013) taxa to correspond to metadata',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqReorder',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'Qiime2PhyloSeq',
    description: 'Convert Qiime (Caporaso et al, 2010) OTU and metadata files to PhyloSeq (McMurdie and Holmes, 2013) format ',
    githubUrl: 'https://github.com/movingpictures83/Qiime2PhyloSeq',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'QiimeTwo2PhyloSeq',
    description: 'Convert input files from Qiime2 (Bolyen et al, 2019) to PhyloSeq (McMurdie et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/QiimeTwo2PhyloSeq',
    language: Language.R,
    category: Category.FileConverters
  },
  {
    name: 'RemoveRow',
    description: 'Remove a row of a file',
    githubUrl: 'https://github.com/movingpictures83/RemoveRow',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'SIF2CSV',
    description: 'SIF To CSV (Interactions to Correlations)',
    githubUrl: 'https://github.com/movingpictures83/SIF2CSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'SplitBIOM',
    description: 'Take a BIOM File and split it into each taxonomic tree level',
    githubUrl: 'https://github.com/movingpictures83/SplitBIOM',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'TSV2CSV',
    description: 'Converter from tab-delimited to comma-separated format',
    githubUrl: 'https://github.com/movingpictures83/TSV2CSV',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'Tab2GML',
    description: 'Converter from tab-delimited to GML format',
    githubUrl: 'https://github.com/movingpictures83/Tab2GML',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'TSVFilter',
    description: 'Remove Columns from a TSV file with Zero Values above a threshold',
    githubUrl: 'https://github.com/movingpictures83/TSVFilter',
    language: Language.Python,
    category: Category.FileConverters
  },
  {
    name: 'Abundance',
    description: 'Average abundance of an entity in a sample set.',
    githubUrl: 'https://github.com/movingpictures83/Abundance',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'AlphaDiversity',
    description: 'Alpha-diversity using Qiime (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/AlphaDiversity',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'AlphaStats',
    description: 'Alpha-diversity statistics',
    githubUrl: 'https://github.com/movingpictures83/AlphaStats',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'AminoAcidComposition',
    description: 'Amino acid composition of a protein sequence (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AminoAcidComposition',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'AssemblyStats',
    description: 'Full genome assembly statistics (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AssemblyStats',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'Atlas',
    description: 'Plot the abundance of a taxon over samples, colored by category',
    githubUrl: 'https://github.com/movingpictures83/Atlas',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'ANOSIM',
    description: 'Analysis of Similarities (ANOSIM) (Clarke, 1993) ',
    githubUrl: 'https://github.com/verociraptor/ANOSIM',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Bar',
    description: 'Bar graph of OTU abundances ',
    githubUrl: 'https://github.com/movingpictures83/Bar',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'BetaDiversity',
    description: 'Beta-diversity using Qiime (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/BetaDiversity',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'BetaInAndOut',
    description: 'Compute Beta-diversity between all pairs of samples within each subcategory, and all pairs of samples in different subcategories.',
    githubUrl: 'https://github.com/movingpictures83/BetaInAndOut',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'BoxPlot',
    description: 'Produce a boxplot',
    githubUrl: 'https://github.com/movingpictures83/BoxPlot',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'BUSCO',
    description: 'Assess gene assembly and/or annotation using BUSCO (Simao et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/BUSCO',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'CalcMeanStd',
    description: 'Calculates Mean and Standard Deviation',
    githubUrl: 'https://github.com/movingpictures83/CalcMeanStd',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Core',
    description: 'Core taxa community statistics',
    githubUrl: 'https://github.com/movingpictures83/Core',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'CSV2Dot',
    description: 'Take a Network in CSV Format and Visualize in Dot (Gansner et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/CSV2Dot',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'CSVAvgDeg',
    description: 'Compute the average node degree of a network.',
    githubUrl: 'https://github.com/verociraptor/CSVAvgDeg',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'CSVAvgEdgeWeight',
    description: 'Compute the average edge weight of a network.',
    githubUrl: 'https://github.com/verociraptor/CSVAvgEdgeWeight',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'CSVDup',
    description: 'List duplicate row and column entries in a CSV file.',
    githubUrl: 'https://github.com/movingpictures83/CSVDup',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'CSVMax',
    description: 'Determines Maximum Count Within Samples',
    githubUrl: 'https://github.com/movingpictures83/CSVMax',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'CSVNegOnly',
    description: 'Output negative edges.',
    githubUrl: 'https://github.com/movingpictures83/CSVNegOnly',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'CSVOverlap',
    description: 'Vector overlap',
    githubUrl: 'https://github.com/movingpictures83/CSVOverlap',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'CytoViz',
    description: 'Cytoscape Visualizer ',
    githubUrl: 'https://github.com/movingpictures83/CytoViz',
    language: Language.Perl,
    category: Category.StatsVisualizations
  },
  {
    name: 'Delta',
    description: 'Calculate differences in abundance (mean, std dev, etc.) between two samples ',
    githubUrl: 'https://github.com/movingpictures83/Delta',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Density',
    description: 'Density plot (normalized abundance vs frequency) of a target taxon ',
    githubUrl: 'https://github.com/movingpictures83/Density',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'DIABLO',
    description: 'Generate DIABLO (Singh et al, 2019) plot ',
    githubUrl: 'https://github.com/movingpictures83/DIABLO',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Diversity',
    description: 'Various diversity measurements ',
    githubUrl: 'https://github.com/movingpictures83/Diversity',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'DivNet',
    description: 'DivNet (Willis and Martin, 2020) algorithm for estimating diversity when taxa co-occur',
    githubUrl: 'https://github.com/movingpictures83/DivNet',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Dominance',
    description: 'Dominance index (Locey and Lennon, 2016) ',
    githubUrl: 'https://github.com/movingpictures83/Dominance',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'EllipsePlot',
    description: '2D plot, with confidence ellipses ',
    githubUrl: 'https://github.com/movingpictures83/EllipsePlot',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'ErrorRate',
    description: 'Error statistics in sequence bases ',
    githubUrl: 'https://github.com/movingpictures83/ErrorRate',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Evenness',
    description: 'Evenness indices ',
    githubUrl: 'https://github.com/movingpictures83/Evenness',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Extract',
    description: 'Extract sequences that include a target sequence  ',
    githubUrl: 'https://github.com/movingpictures83/Extract',
    language: Language.Perl,
    category: Category.StatsVisualizations
  },
  {
    name: 'FASTACount',
    description: 'Count the number of sequences in a FASTA file ',
    githubUrl: 'https://github.com/movingpictures83/FASTACount',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Gini',
    description: 'Gini index (Gini, 1912) ',
    githubUrl: 'https://github.com/movingpictures83/Gini',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'GraPhlAn',
    description: 'Visualize phylogenetic tree with GraPhlAn (Asnicar et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/GraPhlAn',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'Gnuplot',
    description: 'Plot data using Gnuplot (Williams and Kelley, 2011)',
    githubUrl: 'https://github.com/movingpictures83/Gnuplot',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'Heatmap',
    description: 'Render a heatmap ',
    githubUrl: 'https://github.com/movingpictures83/Heatmap',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'HIVE',
    description: 'HIVE (Hanson, 2011) plots ',
    githubUrl: 'https://github.com/movingpictures83/HIVE',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'InterGroup',
    description: 'Intergroup Beta Diversity',
    githubUrl: 'https://github.com/movingpictures83/InterGroup',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'IntraGroup',
    description: 'Intragroup Beta Diversity',
    githubUrl: 'https://github.com/movingpictures83/IntraGroup',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'InverseSimpson',
    description: 'Inverse Simpson Diversity Index',
    githubUrl: 'https://github.com/movingpictures83/InverseSimpson',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'KMerGenie',
    description: 'KMerGenie optimal k-mer length for assembly (Chikhi and Medvedev, 2014)',
    githubUrl: 'https://github.com/movingpictures83/KMerGenie',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Krona',
    description: 'Krona plot',
    githubUrl: 'https://github.com/movingpictures83/Krona',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'KronaCheck',
    description: 'Check for valid Krona taxonomy',
    githubUrl: 'https://github.com/movingpictures83/KronaCheck',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'KronaCount',
    description: 'Count the number of taxa in a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaCount',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Landscape',
    description: 'Landscape plot of sample sets vs. first two principal components',
    githubUrl: 'https://github.com/movingpictures83/Landscape',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'LogModulo',
    description: 'Log-modulo skew (Magurran and McGill, 2011) ',
    githubUrl: 'https://github.com/movingpictures83/LogModulo',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'MetaQuast',
    description: 'Metagenome assembly evaluation using MetaQuast (Mikheenko et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/MetaQuast',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'MIQ',
    description: 'Median InterQuartile (IQ)',
    githubUrl: 'https://github.com/movingpictures83/MIQ',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'MM',
    description: 'Partitions multi-omics data',
    githubUrl: 'https://github.com/movingpictures83/MM',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'MULTIQC',
    description: 'Summarize results from multiple bioinformatics toolkits in HTML form (Ewels et al, 2016) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MULTIQC',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'MV',
    description: 'Plot mean vs. variance',
    githubUrl: 'https://github.com/movingpictures83/MV',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'NetworkViz',
    description: 'Network Visualizer (Generates Multiple Cytoscape Input Files)',
    githubUrl: 'https://github.com/movingpictures83/NetworkViz',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'NMDS',
    description: 'Produce an OTU heatmap using Non-Multi-Dimensional Scaling (NMDS) (Kruskal, 1964)',
    githubUrl: 'https://github.com/movingpictures83/NMDS',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'OTUHeatmap',
    description: 'Plot OTU abundances using a heatmap',
    githubUrl: 'https://github.com/movingpictures83/OTUHeatmap',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'OTUPlot',
    description: 'Plot OTU abundances at multiple levels of the phylogenetic tree',
    githubUrl: 'https://github.com/movingpictures83/OTUPlot',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'OTURecover',
    description: 'Number of OTUs recovered',
    githubUrl: 'https://github.com/movingpictures83/OTURecover',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Pie',
    description: 'Phylum/class pie plot',
    githubUrl: 'https://github.com/movingpictures83/Pie',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'PlotAlphaDiversity',
    description: 'Plot alpha-diversity for a set of samples (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/PlotAlphaDiversity',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'PlotBetaDiversity3D',
    description: 'Plot beta-diversity for a set of samples in 3D (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/PlotBetaDiversity3D',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'ProcessDesc',
    description: 'Extract phylogenetic information from FASTA file',
    githubUrl: 'https://github.com/movingpictures83/ProcessDesc',
    language: Language.Perl,
    category: Category.StatsVisualizations
  },
  {
    name: 'QGraph',
    description: 'QGraph Visualizer',
    githubUrl: 'https://github.com/movingpictures83/QGraph',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Qiime2Viz',
    description: 'Qiime 2 Visualizer (Bolyen et al, 2019) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Qiime2Viz',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'QualiMap',
    description: 'Generate a QualiMap (Garcia-Alcalde et al, 2012) report',
    githubUrl: 'https://github.com/movingpictures83/QualiMap',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'QualityProfile',
    description: 'Sequence quality statistics',
    githubUrl: 'https://github.com/movingpictures83/QualityProfile',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Quast',
    description: 'Quality Assessment Tool for Genome Assemblies (Gurevich et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/Quast',
    language: Language.CUDA,
    category: Category.StatsVisualizations
  },
  {
    name: 'Rank',
    description: 'Converts a set of counts to ranks in a sample',
    githubUrl: 'https://github.com/movingpictures83/Rank',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Rare',
    description: 'Rare taxa community statistics',
    githubUrl: 'https://github.com/movingpictures83/Rare',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'ReactionPathway',
    description: 'ReactionPathway (Statistical Analysis of Metabolite Network and Reaction Pathway Data)',
    githubUrl: 'https://github.com/movingpictures83/ReactionPathway',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'ReadTracker',
    description: 'Track reads through a pipeline',
    githubUrl: 'https://github.com/movingpictures83/ReadTracker',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Richness',
    description: 'Sample set richness',
    githubUrl: 'https://github.com/movingpictures83/Richness',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Rival',
    description: 'Rival clubs (Fernandez et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/Rival',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'SequenceLength',
    description: 'Sequence length',
    githubUrl: 'https://github.com/movingpictures83/SequenceLength',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Social',
    description: 'Social clubs (Fernandez et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/Social',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Sparsity',
    description: 'Plot sparsity of a dataset',
    githubUrl: 'https://github.com/movingpictures83/Sparsity',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Spread',
    description: 'Plot spread of taxa abundances over all samples',
    githubUrl: 'https://github.com/movingpictures83/Spread',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'Statistics',
    description: 'Take a set of samples and output statistics (mean, standard deviation, etc.) on the most abundant taxa ',
    githubUrl: 'https://github.com/movingpictures83/Statistics',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Summarize',
    description: 'Output a summary of a sample set to the screen',
    githubUrl: 'https://github.com/movingpictures83/Summarize',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'TaxaQuery',
    description: 'Query a taxon and obtain statistics',
    githubUrl: 'https://github.com/movingpictures83/TaxaQuery',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Tree',
    description: 'PluMA plugin to produce a phylogenetic tree for taxa, decorated by sample set',
    githubUrl: 'https://github.com/movingpictures83/Tree',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'TriadCounter',
    description: 'Counts the number of stable and unstable triads (Easley and Kleinberg, 2010) in a social network',
    githubUrl: 'https://github.com/movingpictures83/TriadCounter',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'TTestDependent',
    description: 'Run the T-Test on dependent samples',
    githubUrl: 'https://github.com/verociraptor/TTestDependent',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'TTestIndependent',
    description: 'Run the T-Test on independent data',
    githubUrl: 'https://github.com/verociraptor/TTestIndependent',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Unclassified',
    description: 'Number of OTUs unclassified',
    githubUrl: 'https://github.com/movingpictures83/Unclassified',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'UnclassifiedList',
    description: 'List unclassified OTUs',
    githubUrl: 'https://github.com/movingpictures83/UnclassifiedList',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'UniqueGroups',
    description: 'Output the unique groups',
    githubUrl: 'https://github.com/movingpictures83/UniqueGroups',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'UniqueSequences',
    description: 'Output all unique sequences in a FASTA file',
    githubUrl: 'https://github.com/movingpictures83/UniqueSequences',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Variance',
    description: 'Variance Calculator',
    githubUrl: 'https://github.com/movingpictures83/Variance',
    language: Language.Python,
    category: Category.StatsVisualizations
  },
  {
    name: 'Violin',
    description: 'Violin plot',
    githubUrl: 'https://github.com/movingpictures83/Violin',
    language: Language.R,
    category: Category.StatsVisualizations
  },
  {
    name: 'ASV2Taxon',
    description: 'Assign unique taxa to Amplicon Sequence Variants (ASVs) (Callahan, 2017)',
    githubUrl: 'https://github.com/movingpictures83/ASV2Taxon',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'BWA',
    description: 'Burrows-Wheeler Alignment (Li and Durbin, 2009)',
    githubUrl: 'https://github.com/movingpictures83/BWA',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'ChangeLevel',
    description: 'Change phylogenetic analysis level',
    githubUrl: 'https://github.com/movingpictures83/ChangeLevel',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'ChimeraRemove',
    description: 'Remove chimeric sequences',
    githubUrl: 'https://github.com/movingpictures83/ChimeraRemove',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Circular2Linear',
    description: 'Linearize a circular DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/Circular2Linear',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CLR',
    description: 'Center Log Ratio (CLR) transformation',
    githubUrl: 'https://github.com/movingpictures83/CLR',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Clusterize',
    description: 'Remove Edges Between Nodes in Different Clusters',
    githubUrl: 'https://github.com/movingpictures83/Clusterize',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVAverage',
    description: 'Average column values of a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVAverage',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVCollate',
    description: 'Collate a set of CSV files into one',
    githubUrl: 'https://github.com/movingpictures83/CSVCollate',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVJoinSplit',
    description: 'Generate taxonomically classified taxa counts from original counts, metadata and taxonomic tree ',
    githubUrl: 'https://github.com/movingpictures83/CSVJoinSplit',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'CSVMapRange',
    description: 'Map Range of One CSV File To Another (Useful in Multi-Omics)',
    githubUrl: 'https://github.com/movingpictures83/CSVMapRange',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVMult',
    description: 'Multiply a CSV file by a constant',
    githubUrl: 'https://github.com/movingpictures83/CSVMult',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVNeg2Pos',
    description: 'Map [-1, 1] edge weight range to [0, 2]',
    githubUrl: 'https://github.com/movingpictures83/CSVNeg2Pos',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVNeg2Zero',
    description: 'Change Negative Edges To Zero',
    githubUrl: 'https://github.com/movingpictures83/CSVNeg2Zero',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVNoDup',
    description: 'Remove duplicates from CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVNoDup',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVNormalize',
    description: 'CSV Normalization',
    githubUrl: 'https://github.com/movingpictures83/CSVNormalize',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVNoUnderscore',
    description: 'Remove underscores from CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVNoUnderscore',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVPathways',
    description: 'Take a CSV and lookup all metabolic pathways involving internal taxa or metabolites',
    githubUrl: 'https://github.com/movingpictures83/CSVPathways',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVPool',
    description: 'Take a CSV and pool together duplicate rows/columns',
    githubUrl: 'https://github.com/movingpictures83/CSVPool',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVRename',
    description: 'Rename rows and/or columns of a CSV',
    githubUrl: 'https://github.com/movingpictures83/CSVRename',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVScale',
    description: 'Scale CSV Values to Have a Median of One',
    githubUrl: 'https://github.com/movingpictures83/CSVScale',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVSort',
    description: 'Sort a CSV file by row',
    githubUrl: 'https://github.com/movingpictures83/CSVSort',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVTranspose',
    description: 'Transpose a Matrix in a CSV File',
    githubUrl: 'https://github.com/movingpictures83/CSVTranspose',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVUnNormalize',
    description: 'CSV Reverse Normalization',
    githubUrl: 'https://github.com/movingpictures83/CSVUnNormalize',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVUpperTriangular',
    description: 'Upper triangular portion of a matrix',
    githubUrl: 'https://github.com/movingpictures83/CSVUpperTriangular',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'CSVZero2Min',
    description: 'Change All Zeroes in a CSV to the Minimum Value',
    githubUrl: 'https://github.com/movingpictures83/CSVZero2Min',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'DADA',
    description: 'Divisive Amplicon Denoising Algorithm (Rosen et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/DADA',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'Deblur',
    description: 'Qiime 2 (Bolyen et al, 2019) deblur (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Deblur',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'DeMUX',
    description: 'Demultiplex (DeMUX) a set of sequences into groups given their barcodes (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/DeMUX',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'DeReplicate',
    description: 'Remove replicate sequences',
    githubUrl: 'https://github.com/movingpictures83/DeReplicate',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'Dereplication',
    description: 'Convert redundant reads into sequences and counts',
    githubUrl: 'https://github.com/movingpictures83/Dereplication',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'DNA2Protein',
    description: 'Corresponding protein for DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/DNA2Protein',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'DNAComplement',
    description: 'Complement a DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/DNAComplement',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'DNAReverseComplement',
    description: 'Reverse complement a DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/DNAReverseComplement',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'FAIDX',
    description: 'Filter a FASTA file by sequence length range (Shirley et al, 2015) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FAIDX',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'FASTAExtract',
    description: 'Extract a portion of a FASTA File',
    githubUrl: 'https://github.com/movingpictures83/FASTAExtract',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'FilterAndTrim',
    description: 'Filter sequences for quality, and trim to a specified length',
    githubUrl: 'https://github.com/movingpictures83/FilterAndTrim',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'FiltLong',
    description: 'FiltLong filter for long reads',
    githubUrl: 'https://github.com/movingpictures83/FiltLong',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'FilterMicrobes',
    description: 'Filter out connections between metagenomic data based on underlying metabolic networks',
    githubUrl: 'https://github.com/movingpictures83/FilterMicrobes',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'GPUGauss',
    description: 'GPU Gaussian elimination (Cabrera Domingo et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUGauss',
    language: Language.CXX,
    category: Category.Transformations
  },
  {
    name: 'GPUTSVAdd',
    description: 'GPU matrix addition (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVAdd',
    language: Language.CXX,
    category: Category.Transformations
  },
  {
    name: 'GPUTSVCofactor',
    description: 'GPU matrix cofactor (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVCofactor',
    language: Language.CXX,
    category: Category.Transformations
  },
  {
    name: 'GPUTSVMult',
    description: 'GPU matrix multiplication (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVMult',
    language: Language.CXX,
    category: Category.Transformations
  },
  {
    name: 'GPUTSVScale',
    description: 'GPU matrix scaling (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVScale',
    language: Language.CXX,
    category: Category.Transformations
  },
  {
    name: 'GPUTSVTranspose',
    description: 'GPU matrix transpose (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVTranspose',
    language: Language.CXX,
    category: Category.Transformations
  },
  {
    name: 'Hellinger',
    description: 'Hellinger transform (Hellinger et al, 1914)',
    githubUrl: 'https://github.com/movingpictures83/Hellinger',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Host',
    description: 'Retrieve host sequences (Uritsky et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/Host',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'KronaClean',
    description: 'Clean a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaClean',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'KronaIgnore',
    description: 'Ignore all taxa in Krona file that contain a specific string',
    githubUrl: 'https://github.com/movingpictures83/KronaIgnore',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'KronaNoGroups',
    description: 'Remove groups from a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaNoGroups',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'KronaNoVirus',
    description: 'Remove viruses from a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaNoVirus',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'KronaReplace',
    description: 'Replace a string in a Krona file by another string',
    githubUrl: 'https://github.com/movingpictures83/KronaReplace',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'LEfSeOnlyLowest',
    description: 'Restrict LEfSe (Segata et al, 2011) output to lowest taxonomic level',
    githubUrl: 'https://github.com/movingpictures83/LEfSeOnlyLowest',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'LEfSeRemoveZero',
    description: 'Convert LEfSe (Segata et al, 2011) output to biomarkers only (nonzero LDA score)',
    githubUrl: 'https://github.com/movingpictures83/LEfSeRemoveZero',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'Log10',
    description: 'Transform data by log base 10',
    githubUrl: 'https://github.com/movingpictures83/Log10',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Log10P',
    description: 'Transform data by log(1+x)',
    githubUrl: 'https://github.com/movingpictures83/Log10P',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'LogTransform',
    description: 'Log-transform data',
    githubUrl: 'https://github.com/movingpictures83/LogTransform',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'LongestContig',
    description: 'Find the longest contig in a FASTA file',
    githubUrl: 'https://github.com/movingpictures83/LongestContig',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'MakeIndex',
    description: 'Make index from multiple reference genomes (Li et al, 2009)',
    githubUrl: 'https://github.com/movingpictures83/MakeIndex',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'Map2Positive',
    description: 'Map All Edges To Positive Range',
    githubUrl: 'https://github.com/movingpictures83/Map2Positive',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'MapReads',
    description: 'Map a set of reads to a reference genome (Li and Durbin, 2009)',
    githubUrl: 'https://github.com/movingpictures83/MapReads',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'MergePairedEnd',
    description: 'Merge paired-end reads',
    githubUrl: 'https://github.com/movingpictures83/MergePairedEnd',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'MetabNorm',
    description: 'Mixed-Mode (Cohort and Batch) Metabolite Normalization (Jauhiainen et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/MetabNorm',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Microbial',
    description: 'Retrieve microbial sequences (Uritsky et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/Microbial',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'MothurFilter',
    description: 'Filter Mothur (Schloss et al, 2009) taxa',
    githubUrl: 'https://github.com/movingpictures83/MothurFilter',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'MultiomicScreen',
    description: 'Screen taxa correlations, leaving only heterogeneous',
    githubUrl: 'https://github.com/movingpictures83/MultiomicScreen',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'NetworkDeconvolution',
    description: 'Network deconvolution algorithm (Feizi et al, 2013) to determine direct network dependencies.',
    githubUrl: 'https://github.com/movingpictures83/NetworkDeconvolution',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'NetworkNoise',
    description: 'Add random noise to a signed and weighted network.',
    githubUrl: 'https://github.com/movingpictures83/NetworkNoise',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'NormScoreTransform',
    description: 'Normal Probability Values',
    githubUrl: 'https://github.com/movingpictures83/NormScoreTransform',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Oksanen',
    description: 'Oksanen transformation (Oksanen, 1983)',
    githubUrl: 'https://github.com/movingpictures83/Oksanen',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'OTUSummary',
    description: 'Summarize OTUs at multiple levels of the phylogenetic tree',
    githubUrl: 'https://github.com/movingpictures83/OTUSummary',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'PhyloSeqFilter',
    description: 'Filter PhyloSeq (McMurdie and Holmes, 2013) data',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqFilter',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'PhyloSeqNAResolve',
    description: 'Take PhyloSeq (McMurdie and Holmes, 2013) taxonomy table and resolve all unclassifiable levels ',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqNAResolve',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'PhyloSeqNormalize',
    description: 'Normalize PhyloSeq (McMurdie and Holmes, 2013) taxa',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqNormalize',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'PoreChop',
    description: 'Adapter trimming with PoreChop (Wick et al, 2017) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/PoreChop',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'Qiime2Filter',
    description: 'Filter Qiime2 (Bolyen et al, 2019) reads based on a feature',
    githubUrl: 'https://github.com/movingpictures83/Qiime2Filter',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'QualityFilter',
    description: 'Qiime 2 (Bolyen et al, 2019) quality filter (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/QualityFilter',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'QuantumDenoiser',
    description: 'Remove noisy fluctations from CKMeans quanta',
    githubUrl: 'https://github.com/movingpictures83/QuantumDenoiser',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'Rank2Tax',
    description: 'Convert header of PhyloSeq (McMurdie et al, 2013) taxonomy table to use phylogeny',
    githubUrl: 'https://github.com/movingpictures83/Rank2Tax',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'Rarefy',
    description: 'Rarefying, ad hoc (McMurdie and Holmes, 2014)',
    githubUrl: 'https://github.com/movingpictures83/Rarefy',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'ReferencePoint',
    description: 'Change position of a set of genes based on a reference gene',
    githubUrl: 'https://github.com/movingpictures83/ReferencePoint',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'RemoveNegative',
    description: 'Remove negative edges',
    githubUrl: 'https://github.com/movingpictures83/RemoveNegative',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'RemoveSingletons',
    description: 'Remove singleton taxa',
    githubUrl: 'https://github.com/movingpictures83/RemoveSingletons',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'RemoveTaxa',
    description: 'Remove taxa with a certain property',
    githubUrl: 'https://github.com/movingpictures83/RemoveTaxa',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'RemoveUnclassified',
    description: 'Remove unclassified taxa',
    githubUrl: 'https://github.com/movingpictures83/RemoveUnclassified',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'RemoveZero',
    description: 'Remove zero-abundant entities',
    githubUrl: 'https://github.com/movingpictures83/RemoveZero',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'SortByCluster',
    description: 'Sort nodes in a network based on cluster membership',
    githubUrl: 'https://github.com/movingpictures83/SortByCluster',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'SortForwardReverse',
    description: 'Sort forward and reverse reads to be in the same order',
    githubUrl: 'https://github.com/movingpictures83/SortForwardReverse',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'SortSamples',
    description: 'Sort a set of samples by a property',
    githubUrl: 'https://github.com/movingpictures83/SortSamples',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'SplitTableProcessing',
    description: 'Take a table of counts from Mothur and split into multiple counts classified by taxonomy   ',
    githubUrl: 'https://github.com/movingpictures83/SplitTableProcessing',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'Standardize',
    description: 'Transform to standard distribution',
    githubUrl: 'https://github.com/movingpictures83/Standardize',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Subset',
    description: 'Obtain a subset of PhyloSeq (McMurdie and Holmes, 2013) data',
    githubUrl: 'https://github.com/movingpictures83/Subset',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Subspecies',
    description: 'Obtain subspecies from a KRONA file',
    githubUrl: 'https://github.com/movingpictures83/Subspecies',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'TaxaPrune',
    description: 'Prune PhyloSeq (McMurdie and Holmes, 2013) taxa ',
    githubUrl: 'https://github.com/movingpictures83/TaxaPrune',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'TaxonomySplit',
    description: 'Take a table of abundances and make multiple, one for each level of the taxonomic tree ',
    githubUrl: 'https://github.com/movingpictures83/TaxonomySplit',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'Threshold',
    description: 'Remove all observables from a dataset with a low frequency of occurrence',
    githubUrl: 'https://github.com/movingpictures83/Threshold',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'Transform',
    description: 'Shift composition (Egozcue and Pawlowski-Glahn, 2016)',
    githubUrl: 'https://github.com/movingpictures83/Transform',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'TSVPerturb',
    description: 'Perturb values in TSV file',
    githubUrl: 'https://github.com/movingpictures83/TSVPerturb',
    language: Language.Python,
    category: Category.Transformations
  },
  {
    name: 'UNOISE',
    description: 'Denoise sequences (Edgar et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/UNOISE',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'ValidateMapping',
    description: 'Validate mapping file with Qiime (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/ValidateMapping',
    language: Language.CUDA,
    category: Category.Transformations
  },
  {
    name: 'Z',
    description: 'Z-transformation',
    githubUrl: 'https://github.com/movingpictures83/Z',
    language: Language.R,
    category: Category.Transformations
  },
  {
    name: 'ACE',
    description: 'Abundance-based Convergence Estimator (ACE, Chao and Lee 1992).',
    githubUrl: 'https://github.com/movingpictures83/ACE',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'AES',
    description: 'Autoencoders for dimensionality reduction (Hinton &amp; Salakhutdinov, 2006)',
    githubUrl: 'https://github.com/movingpictures83/AES',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'ANOVA',
    description: 'ANalysis Of VAriance (ANOVA), estimates differences between sample groups (Kaufman and Scheren, 2014).',
    githubUrl: 'https://github.com/verociraptor/ANOVA',
    language: Language.Python,
    category: Category.Dissimilarity
  },
  {
    name: 'BHTSNE',
    description: 'Barnes-Hut version of tSNE (Laczny et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/BHTSNE',
    language: Language.Python,
    category: Category.Dissimilarity
  },
  {
    name: 'BinomialDeviance',
    description: 'Binomial Deviance (McArdle and Anderson, 2001)',
    githubUrl: 'https://github.com/movingpictures83/BinomialDeviance',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Bray',
    description: 'Bray-Curtis (Bray and Curtis, 1957)',
    githubUrl: 'https://github.com/movingpictures83/Bray',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Canberra',
    description: 'Canberra Distance (Lance and Williams, 1966)',
    githubUrl: 'https://github.com/movingpictures83/Canberra',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Chao',
    description: "Chao's Method (Chao, 2005)",
    githubUrl: 'https://github.com/movingpictures83/Chao',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'CORNCOB',
    description: 'Count Regression for Correlated Observations with the Beta-binomial (CORNCOB) (Martin et al, 2020)',
    githubUrl: 'https://github.com/movingpictures83/CORNCOB',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'DESeq',
    description: 'Differential Gene Expression Analysis Based on the Negative Binomial Distribution (Love et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/DESeq',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'DPCoA',
    description: 'Double Principal Component Analysis (Pavoine et al, 2004)',
    githubUrl: 'https://github.com/movingpictures83/DPCoA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'EuclideanDistance',
    description: 'Euclidean Distance ',
    githubUrl: 'https://github.com/movingpictures83/EuclideanDistance',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'FeatureSelection',
    description: 'Determine the most distinguishing features for case vs control',
    githubUrl: 'https://github.com/movingpictures83/FeatureSelection',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Fisher',
    description: 'Fisher Diversity Index (Fisher et al, 1943)',
    githubUrl: 'https://github.com/movingpictures83/Fisher',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Gower',
    description: 'Gower Index (Gower, 1971) ',
    githubUrl: 'https://github.com/movingpictures83/Gower',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Horn',
    description: "Horn's Overlap Index (Horn, 1966)",
    githubUrl: 'https://github.com/movingpictures83/Horn',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'ICA',
    description: 'Independent Component Analysis (Hyvarinen and Oja, 2000)',
    githubUrl: 'https://github.com/movingpictures83/ICA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'IPCA',
    description: 'Independent Principle Component Analysis (Yao et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/IPCA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Jaccard',
    description: 'Jaccard Index (Jaccard, 1912)',
    githubUrl: 'https://github.com/movingpictures83/Jaccard',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'JSD',
    description: 'Jensen-Shannon Divergence (Fuglede et al, 2004)',
    githubUrl: 'https://github.com/movingpictures83/JSD',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Kulczynski',
    description: 'Kulczynski Similarity (Kulczynski, 1927)',
    githubUrl: 'https://github.com/movingpictures83/Kulczynski',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'LEfSe',
    description: 'Linear discriminant analysis Effect Size (LEfSe) (Segata et al, 2011)',
    githubUrl: 'https://github.com/movingpictures83/LEfSe',
    language: Language.Python,
    category: Category.Dissimilarity
  },
  {
    name: 'LMS',
    description: 'Least Mean Squares method for regression analysis (Widrow and Hoff, 1960)',
    githubUrl: 'https://github.com/movingpictures83/LMS',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'MDS',
    description: 'Multi-Dimensional Scaling (Cox, 2008)',
    githubUrl: 'https://github.com/movingpictures83/MDS',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Manhattan',
    description: 'Manhattan Distance',
    githubUrl: 'https://github.com/movingpictures83/Manhattan',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Morisita',
    description: 'Morisita Overlap (Morisita, 1959)',
    githubUrl: 'https://github.com/movingpictures83/Morisita',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Mountford',
    description: 'Mountford Dissimilariy Index (Mountford, 1962)',
    githubUrl: 'https://github.com/movingpictures83/Mountford',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'MT',
    description: 'Multiple Testing of Taxa Abundances According to Sample Category (McMurdie, 2020)',
    githubUrl: 'https://github.com/movingpictures83/MT',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'NetRep',
    description: 'NetRep algorithm (Ritchie et al, 2016) for detecting amount of preservation between two datasets',
    githubUrl: 'https://github.com/movingpictures83/NetRep',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Observed',
    description: 'Observed taxa count',
    githubUrl: 'https://github.com/movingpictures83/Observed',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'PCA',
    description: 'Principle Component Analysis (Pearson, 1901)',
    githubUrl: 'https://github.com/movingpictures83/PCA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'PCoA',
    description: 'Principle Coordinate Analysis (Gower, 1966)',
    githubUrl: 'https://github.com/movingpictures83/PCoA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'PERMANOVA',
    description: 'PERmanent Multivariate ANalysis Of VAriance (PERMANOVA) (Anderson, 2001)',
    githubUrl: 'https://github.com/verociraptor/PERMANOVA',
    language: Language.Python,
    category: Category.Dissimilarity
  },
  {
    name: 'PHATE',
    description: 'Potential of Heat-diffusion for Affinity-based Trajectory Embedding (Moon et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/PHATE',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'PLSDA',
    description: 'Partial Least Squares Discriminant Analysis (PLS-DA, Stahle and Wold 1987)',
    githubUrl: 'https://github.com/movingpictures83/PLSDA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'PLSDA-Multiple',
    description: 'Partial Least Squares Discriminant Analysis (PLS-DA, Stahle and Wold 1987) for multiple datasets',
    githubUrl: 'https://github.com/movingpictures83/PLSDA-Multiple',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Raup',
    description: 'Raup-Crick (Raup and Crick, 1979)',
    githubUrl: 'https://github.com/movingpictures83/Raup',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'RUTA',
    description: 'Differential analysis using unsupervised neural networks (Charte et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/RUTA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Shannon',
    description: 'Shannon Diversity Index (Shannon, 1948)',
    githubUrl: 'https://github.com/movingpictures83/Shannon',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'Simpson',
    description: 'Simpson Diversity Index (Simpson, 1949)',
    githubUrl: 'https://github.com/movingpictures83/Simpson',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'SPLSDA',
    description: 'Sparse Partial Least Squares Discriminant Analysis (SPLS-DA, Le Cao et al 2011)',
    githubUrl: 'https://github.com/movingpictures83/SPLSDA',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'SpNMF',
    description: 'Supervised Non-Negative Matrix Factorization (Cai et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/SpNMF',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'tSNE',
    description: 't-Distributed Stochastic Neighbor Embedding (Van der Maaten et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/tSNE',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'UMAP',
    description: 'Uniform Manifold Approximation and Projection (UMAP) (McInnes et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/UMAP',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'UniFrac',
    description: 'UniFrac distance (Lozupone and Knight, 2005)',
    githubUrl: 'https://github.com/movingpictures83/UniFrac',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'WeightedUniFrac',
    description: 'Weighted UniFrac distance (Lozupone et al, 2007)',
    githubUrl: 'https://github.com/movingpictures83/WeightedUniFrac',
    language: Language.R,
    category: Category.Dissimilarity
  },
  {
    name: 'CCA',
    description: 'Canonical Correlation Analysis (Gonzalez et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/CCA',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'CoNet',
    description: 'Infer abundance matrix from interactions using CoNet (Faust et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/CoNet',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'DistanceCorrelation',
    description: 'Distance Correlation (Szekely, 2005) ',
    githubUrl: 'https://github.com/movingpictures83/DistanceCorrelation',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'Ensemble',
    description: 'Ensemble Correlation Computation (Weiss, 2016) ',
    githubUrl: 'https://github.com/movingpictures83/Ensemble',
    language: Language.Python,
    category: Category.Correlation
  },
  {
    name: 'FunChiSq',
    description: 'Functional Chi-Squared Dependency Computation (Zhang and Song, 2013) ',
    githubUrl: 'https://github.com/movingpictures83/FunChiSq',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'Kendall',
    description: 'Kendall Correlation (Kendall, 1970)',
    githubUrl: 'https://github.com/movingpictures83/Kendall',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'KS',
    description: 'Kolmogorov-Smirnov Test Statistic (Kolmogorov, 1933)',
    githubUrl: 'https://github.com/movingpictures83/KS',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'LSA',
    description: 'Local Similarity Analysis (Ruan, 2006)',
    githubUrl: 'https://github.com/movingpictures83/LSA',
    language: Language.Python,
    category: Category.Correlation
  },
  {
    name: 'MIC',
    description: 'Maximal Information Coefficient (Reshef, 2011)',
    githubUrl: 'https://github.com/movingpictures83/MIC',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'MPLasso',
    description: 'MPLasso (Lo and Marculescu, 2017)',
    githubUrl: 'https://github.com/movingpictures83/MPLasso',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'Pearson',
    description: 'Pearson Correlation (Pearson, 1896)',
    githubUrl: 'https://github.com/movingpictures83/Pearson',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'Phi',
    description: 'Proportionatlity metric (Lovell et al, 2015) for relative data',
    githubUrl: 'https://github.com/movingpictures83/Phi',
    language: Language.Python,
    category: Category.Correlation
  },
  {
    name: 'PhiLR',
    description: 'Phylogenetic Isometric Log-Ratio Transform (Silverman et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/PhiLR',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'RevEcoR',
    description: 'Predict ecological relationships between two organisms based on metabolic networks using RevEcoR (Cao et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/RevEcoR',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'SparCC',
    description: 'SparCC Correlation (Friedman and Alm, 2012)',
    githubUrl: 'https://github.com/movingpictures83/SparCC',
    language: Language.Python,
    category: Category.Correlation
  },
  {
    name: 'SparCCGPU',
    description: 'SparCC on the GPU (Alonso, Escobar, Panoff and Suarez, 2017)',
    githubUrl: 'https://github.com/movingpictures83/SparCCGPU',
    language: Language.CXX,
    category: Category.Correlation
  },
  {
    name: 'Spearman',
    description: 'Spearman Correlation (Spearman, 1904)',
    githubUrl: 'https://github.com/movingpictures83/Spearman',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'SpearmanMulti',
    description: 'Spearman Correlations Over Multiple Data Sets and a Single Sample Set (Useful for Multi-Omics)',
    githubUrl: 'https://github.com/movingpictures83/SpearmanMulti',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'SpearmanTies',
    description: 'Spearman, and Can Handle Rank Ties',
    githubUrl: 'https://github.com/movingpictures83/SpearmanTies',
    language: Language.Python,
    category: Category.Correlation
  },
  {
    name: 'SpearmanTiesMulti',
    description: 'Hybrid Functionality of SpearmanTies and SpearmanMulti',
    githubUrl: 'https://github.com/movingpictures83/SpearmanTiesMulti',
    language: Language.Python,
    category: Category.Correlation
  },
  {
    name: 'SPIECEASI',
    description: 'SPIEC-EASI (Kurtz et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/SPIECEASI',
    language: Language.R,
    category: Category.Correlation
  },
  {
    name: 'ATria',
    description: 'Ablatio Triadum (ATria) Centrality (Cickovski et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/ATria',
    language: Language.CUDA,
    category: Category.Centrality
  },
  {
    name: 'BiasedPageRank',
    description: 'Edge-Weighted Personalized Page Rank (Xie et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/BiasedPageRank',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'Centroid',
    description: 'Centroid algorithm (Wuchty and Stadler, 2003)',
    githubUrl: 'https://github.com/movingpictures83/Centroid',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'ClusterLeaders',
    description: 'Compute leader nodes of network clusters',
    githubUrl: 'https://github.com/movingpictures83/ClusterLeaders',
    language: Language.R,
    category: Category.Centrality
  },
  {
    name: 'Conquests',
    description: 'Conquests algorithm (Laniau et al, 2017) for Phenotypically Essential Metabolites',
    githubUrl: 'https://github.com/movingpictures83/Conquests',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'Degree',
    description: 'Degree Centrality (Freeman, 1979) ',
    githubUrl: 'https://github.com/movingpictures83/Degree',
    language: Language.CUDA,
    category: Category.Centrality
  },
  {
    name: 'Exponential',
    description: 'Exponential Centality (Benzi and Klymko, 2013) ',
    githubUrl: 'https://github.com/movingpictures83/Exponential',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'GPUATria',
    description: 'GPUATria (ATria, on the GPU)',
    githubUrl: 'https://github.com/movingpictures83/GPUATria',
    language: Language.CXX,
    category: Category.Centrality
  },
  {
    name: 'IndVal',
    description: 'Indicator species for each cluster (Roberts, 2007)',
    githubUrl: 'https://github.com/movingpictures83/IndVal',
    language: Language.R,
    category: Category.Centrality
  },
  {
    name: 'Katz',
    description: 'Katz Prestige Centrality (Katz, 1953)',
    githubUrl: 'https://github.com/movingpictures83/Katz',
    language: Language.CUDA,
    category: Category.Centrality
  },
  {
    name: 'MATria',
    description: 'Multiple Ablatio Triadium (Cickovski et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/MATria',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'MWM',
    description: 'Computes edge centralities, with the help of Maximum Weighted Matching (Galil, 1986)',
    githubUrl: 'https://github.com/movingpictures83/MWM',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'NetCooperate',
    description: 'NetCooperate Algorithm for Key Metabolites (Levy et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/NetCooperate',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'PageRank',
    description: 'Page Rank Centrality (Page, 1999)',
    githubUrl: 'https://github.com/movingpictures83/PageRank',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'PyATria',
    description: 'ATria, in Python',
    githubUrl: 'https://github.com/movingpictures83/PyATria',
    language: Language.Python,
    category: Category.Centrality
  },
  {
    name: 'RWRMH',
    description: 'Random Walk with Restart on Multiplex and Heterogeneous biological networks (Valdeolivas et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/RWRMH',
    language: Language.R,
    category: Category.Centrality
  },
  {
    name: 'AffinityPropagation',
    description: 'Affinity Propagation (Frey and Dueck, 2007)',
    githubUrl: 'https://github.com/movingpictures83/AffinityPropagation',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'CDHit',
    description: 'CD-Hit (Li and Godzik, 2006) ',
    githubUrl: 'https://github.com/movingpictures83/CDHit',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'ClusterCount',
    description: 'Number of clusters in a network above a threshold in size',
    githubUrl: 'https://github.com/movingpictures83/ClusterCount',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'ClusterMeans',
    description: 'Mean edge weight between all clusters of a network',
    githubUrl: 'https://github.com/movingpictures83/ClusterMeans',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'ClusterPathways',
    description: 'Given a set of clusters of taxa, find all metabolic pathways shared by node pairs within the cluster',
    githubUrl: 'https://github.com/movingpictures83/ClusterPathways',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'ClusterStd',
    description: 'Edge standard deviation between all clusters of a network',
    githubUrl: 'https://github.com/movingpictures83/ClusterStd',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'Community',
    description: 'Information on the local community of a target.',
    githubUrl: 'https://github.com/movingpictures83/Community',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'CommunityDetection',
    description: 'Girvan-Newman algorithm for community detection in a network (Girvan and Newman, 2002)',
    githubUrl: 'https://github.com/movingpictures83/CommunityDetection',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'CKMeans',
    description: 'CKMeans (Wang and Song, 2011)',
    githubUrl: 'https://github.com/movingpictures83/CKMeans',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'DeNovoOTU',
    description: 'De Novo OTU Selection (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/DeNovoOTU',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'Enterotypes',
    description: 'Find enterotypes within a set of samples (Arumugam et al, 2011)',
    githubUrl: 'https://github.com/movingpictures83/Enterotypes',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'GMM',
    description: 'Gaussian Mixture Model (Rasmussen, 1999)',
    githubUrl: 'https://github.com/movingpictures83/GMM',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'HMM',
    description: 'Hidden Markov Model (Liu and Li, 2017)',
    githubUrl: 'https://github.com/movingpictures83/HMM',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'KMeans',
    description: 'KMeans clustering (MacQueen, 1967)',
    githubUrl: 'https://github.com/movingpictures83/KMeans',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'LinClust',
    description: 'Linear-Time Clustering (Steinegger and Soding, 2018)',
    githubUrl: 'https://github.com/movingpictures83/LinClust',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'Louvain',
    description: 'Louvain Clustering (Blondel et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/Louvain',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'MCL',
    description: 'Markov Clustering (van Dongen, 2000)',
    githubUrl: 'https://github.com/movingpictures83/MCL',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'MClust',
    description: 'MClust (Scrucca et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/MClust',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'ModularityMaximization',
    description: 'Modularity Maximization Algorithm For Clustering Level',
    githubUrl: 'https://github.com/movingpictures83/ModularityMaximization',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'PAM',
    description: 'Partition Around Medoids (PAM) clustering (Kaufman and Rousseeuw, 1987) ',
    githubUrl: 'https://github.com/movingpictures83/PAM',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'PrefixSuffix',
    description: 'Prefix-Suffix algorithm of Qiime (Edgar et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/PrefixSuffix',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'PyNAST',
    description: 'PyNAST clustering (Caporaso et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/PyNAST',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'RivalClub',
    description: 'Find rival clubs in a network (Fernandez et al, 2015) ',
    githubUrl: 'https://github.com/movingpictures83/RivalClub',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'SCIMM',
    description: 'Sequence Clustering with Interpolated Markov Models (Kelley and Salzberg, 2010)',
    githubUrl: 'https://github.com/movingpictures83/SCIMM',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'SIMLR',
    description: 'SIMLR (Wang et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/SIMLR',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'SortMerna',
    description: 'SortMerna (Kopylova et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/SortMerna',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'Spectral',
    description: 'Spectral Clustering (Meila and Shi, 2001)',
    githubUrl: 'https://github.com/movingpictures83/Spectral',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'SumaClust',
    description: 'SumaClust (Mercier et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/SumaClust',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'SWARM',
    description: 'SWARM (Mahe et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/SWARM',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'Tightness',
    description: 'Various tightness measurements for a set of network clusters ',
    githubUrl: 'https://github.com/movingpictures83/Tightness',
    language: Language.R,
    category: Category.Clustering
  },
  {
    name: 'TightnessStatistics',
    description: 'Mean and standard deviation of cluster tightness ',
    githubUrl: 'https://github.com/movingpictures83/TightnessStatistics',
    language: Language.Python,
    category: Category.Clustering
  },
  {
    name: 'Trie',
    description: 'Trie algorithm of Qiime (Edgar et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/Trie',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'UClust',
    description: 'UClust (Edgar et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/UClust',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'UPARSE',
    description: 'UPARSE (Edgar, 2013) algorithm ',
    githubUrl: 'https://github.com/movingpictures83/UPARSE',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'USearch',
    description: 'USearch (Edgar et al, 2010), adds filtering steps to UClust ',
    githubUrl: 'https://github.com/movingpictures83/USearch',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'VSearch',
    description: 'VSearch algorithm (Rognes et al, 2016) for nucleotide-based alignments (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/VSearch',
    language: Language.CUDA,
    category: Category.Clustering
  },
  {
    name: 'AutoCorrelation',
    description: 'Autocorrelation Function Estimate',
    githubUrl: 'https://github.com/movingpictures83/AutoCorrelation',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'CCM',
    description: 'Convergent Cross Mapping (Sugihara et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/CCM',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'CrossCorrelation',
    description: 'Time-Series Cross-Correlation Values',
    githubUrl: 'https://github.com/movingpictures83/CrossCorrelation',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'CubicSpline',
    description: 'Cubic Spline Interpolation',
    githubUrl: 'https://github.com/movingpictures83/CubicSpline',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'CumulativeClassifier',
    description: 'Classify a set of samples by a set of features, at multiple timepoints',
    githubUrl: 'https://github.com/movingpictures83/CumulativeClassifier',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'CumulativeTime',
    description: 'Choose the best features to use to classify a set of samples, at multiple timepoints.',
    githubUrl: 'https://github.com/movingpictures83/CumulativeTime',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'Detrend',
    description: 'Detrend (Least-Squares Fit, Time Series Data) ',
    githubUrl: 'https://github.com/movingpictures83/Detrend',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'DickeyFuller',
    description: 'Dickey-Fuller Test, Time Series Data (Said and Dickey, 1984) ',
    githubUrl: 'https://github.com/movingpictures83/DickeyFuller',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'Granger',
    description: 'Granger Causality (Granger, 1969) ',
    githubUrl: 'https://github.com/movingpictures83/Granger',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'LIMITS',
    description: 'LIMITS algorithm for inferring correlations across time-series (Fisher and Mehta, 2014) ',
    githubUrl: 'https://github.com/movingpictures83/LIMITS',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'NeuralNet',
    description: 'Neural network for virus classification ',
    githubUrl: 'https://github.com/movingpictures83/NeuralNet',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'RandomForest',
    description: 'Random Forest classifier (Liaw and Wiener, 2002) ',
    githubUrl: 'https://github.com/movingpictures83/RandomForest',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'ReplicationRates',
    description: 'Bacterial Replication Rates (Brown et al, 2016) ',
    githubUrl: 'https://github.com/movingpictures83/ReplicationRates',
    language: Language.Python,
    category: Category.TimeSeries
  },
  {
    name: 'TimeSeries',
    description: 'Form a time-series dataset by merging static and dynamic properties',
    githubUrl: 'https://github.com/movingpictures83/TimeSeries',
    language: Language.Python,
    category: Category.TimeSeries
  },
  {
    name: 'TimeWarp',
    description: 'Perform time warping to align biological data sets to same internal clock ',
    githubUrl: 'https://github.com/movingpictures83/TimeWarp',
    language: Language.R,
    category: Category.TimeSeries
  },
  {
    name: 'AbundanceBin',
    description: 'AbundanceBin binning tool (Wu et al, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AbundanceBin',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'AGEnt',
    description: 'Compute accessory genome using AGent (Ozer et al, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AGEnt',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Aragorn',
    description: 'Aragorn (Laslett and Canback, 2004) tRNA, mtRNA, and tmRNA gene detector',
    githubUrl: 'https://github.com/movingpictures83/Aragorn',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Atima',
    description: 'Atima (Weick et al, 2000) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Atima',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'BLASTN',
    description: 'Align sequences to a database using Nucleotide-BLAST (Altschul et al, 1990) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BLASTN',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'BLASTP',
    description: 'Align sequences to a database using Protein-BLAST (Altschul et al, 1990) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BLASTP',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'BLSOM',
    description: 'BLSOM unsupervised neural net (Nakao et al, 2013) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BLSOM',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'BMTagger',
    description: 'Find host sequences with BMTagger (Rotmistrovsky and Agarwala, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BMTagger',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'BMTool',
    description: 'Generate bitmask with BMTool (Rotmistrovsky and Agarwala, 2011) (Rotmistrovsky and Agarwala, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BMTool',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Bowtie',
    description: 'Bowtie sequence alignment and analysis (Langmead et al, 2009) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Bowtie',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Canu',
    description: 'Canu (Koren et al, 2017) long-read genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Canu',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Circlator',
    description: 'Circlator (Hunt et al, 2015) genome circularization (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Circlator',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'ClustAGE',
    description: 'Compute accessory genome using ClustAGE (Ozer et al, 2018) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/ClustAGE',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Cytoscape',
    description: 'Cytoscape Visualizer (Shannon et al, 2003) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Cytoscape',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'DADA2',
    description: 'DADA2 Amplicon Sequence Variant (ASV) Generator (Callahan et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/DADA2',
    language: Language.R,
    category: Category.ExternalTools
  },
  {
    name: 'DIAMOND',
    description: 'DIAMOND  (Buchfink et al, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/DIAMOND',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'FastMRMR',
    description: 'Fast Minimum Redundancy Maximum algorithm (Ramirez-Gallegos et al, 2016) for feature selection (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FastMRMR',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'FASTQC',
    description: 'FASTQC (Andrews) quality control (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FASTQC',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'FastQJoin',
    description: 'FastQJoin (Blankenfeld et al, 2010) for joining paired-end reads (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FastQJoin',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Flye',
    description: 'Flye genome assembly with long reads (Kolmogorov et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/Flye',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'FragGeneScan',
    description: 'FragGeneScan  (Rho et al, 2010) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FragGeneScan',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'HMMER',
    description: 'HMMER  (Finn et al, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/HMMER',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'HUMAnN',
    description: 'HUMAnN (Franzosa et al, 2018) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/HUMAnN',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'IDBA',
    description: 'Iterative De Brujin genome Assembler (Peng et al, 2012) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/IDBA',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Infomap',
    description: 'Infomap (Edler et al., 2017) algorithm for community detection (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Infomap',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'IntegronFinder',
    description: 'Detect integrons in DNA sequences (Cury et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/IntegronFinder',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'IRep',
    description: 'Calculate index of replication (Brown et al, 2016) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/IRep',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'KEGG',
    description: 'Obtain all pathways for an organism in KEGG (Kanehisa and Goto, 2000) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/KEGG',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Kraken2',
    description: 'Metagenomics analysis with Kraken2 (Wood et al, 2019) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Kraken2',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MakeBLASTDB',
    description: 'Make a database of a set of input sequences using BLAST (Altschul et al, 1990) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MakeBLASTDB',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MAUVE',
    description: 'MAUVE (Darling et al, 2004) genome alignment (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MAUVE',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MaxBin',
    description: 'MaxBin (Wu et al, 2014) software for binning reads (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MaxBin',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MegaHit',
    description: 'MegaHit (Li et al, 2015) genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MegaHit',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MEGAN',
    description: 'MEGAN (Huson et al, 2007) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MEGAN',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MelitaSuite',
    description: 'Melita (Jaric et al, 2013) suite of analysis pipelines for degenerate primers',
    githubUrl: 'https://github.com/movingpictures83/MelitaSuite',
    language: Language.Python,
    category: Category.ExternalTools
  },
  {
    name: 'MetaBAT',
    description: 'MetaBAT (Kang et al, 2015) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaBAT',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MetaCluster',
    description: 'MetaCluster (Yang et al, 2010) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaCluster',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MetaPhlAn',
    description: 'MetaPhlAn (Truong et al, 2015) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaPhlAn',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MetaSPAdes',
    description: 'PluMA plugin to run MetaSPAdes (Nurk et al, 2017) genome assembler (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaSPAdes',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Mothur',
    description: 'Mothur (Schloss, 2009) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Mothur',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'MUSCLE',
    description: 'MUltiple Sequence Comparison by Log-Expectation (MUSCLE) (Edgar et al, 2004) alignment tool',
    githubUrl: 'https://github.com/movingpictures83/MUSCLE',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Network',
    description: 'Represent samples as a network, with dissimilarity as edge weights',
    githubUrl: 'https://github.com/movingpictures83/Network',
    language: Language.R,
    category: Category.ExternalTools
  },
  {
    name: 'ParSNP',
    description: 'Core genome alignment and SNP detection using ParSNP (Treangen et al, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/ParSNP',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'PathwayTools',
    description: 'Get data from the PathwayTools (Karp et al, 2015) database',
    githubUrl: 'https://github.com/movingpictures83/PathwayTools',
    language: Language.Python,
    category: Category.ExternalTools
  },
  {
    name: 'PICRUSt',
    description: 'Phylogenetic Investigation of Communities by Reconstruction of Unobserved States (PICRUSt) (Lamille et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/PICRUSt',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Prank',
    description: 'Perform multiple sequence alignment with Prank (Loytynoja, 2014)',
    githubUrl: 'https://github.com/movingpictures83/Prank',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Prodigal',
    description: 'PROkayotic DYnamic programming Gene-finding ALgorithm (Prodigal) (Hyatt et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/Prodigal',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Prokka',
    description: 'Genome annotation using Prokka (Seemann et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/Prokka',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'RAxML',
    description: 'Random Axelerating Maximum Likelihood (Stamatkis, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/RAxML',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'RDPClassify',
    description: 'Classify sequences using the RDP (Wang et al, 2007) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/RDPClassify',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'ReciprocalBLAST',
    description: 'Run ReciprocalBLAST on two outputs from BLAST (Ward, 2014)',
    githubUrl: 'https://github.com/movingpictures83/ReciprocalBLAST',
    language: Language.Python,
    category: Category.ExternalTools
  },
  {
    name: 'Redbiom',
    description: 'Query the Earth Microbiome Project (EMP, Thompson et al 2017) with Redbiom (McDonald et al, 2019) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Redbiom',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'SPAdes',
    description: 'SPAdes (Bankevich et al, 2012) genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/SPAdes',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'SKESA',
    description: 'SKESA (Souvorov et al, 2018) genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/SKESA',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Spine',
    description: 'Spine (Ozer et al, 2014) core and accessory genome determination',
    githubUrl: 'https://github.com/movingpictures83/Spine',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'SplitMEM',
    description: 'SplitMEM (Marcus et al, 2014) pangenome analysis',
    githubUrl: 'https://github.com/movingpictures83/Spine',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'SRPRISM',
    description: 'Single Read Paired Read Indel Substitution Minimizer (SRPRISM) (Morgulis and Agarwala, 2020) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/SRPRISM',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'SynerClust',
    description: 'SynerClust (Georgescu et al, 2018) orthologue clustering tool',
    githubUrl: 'https://github.com/movingpictures83/SynerClust',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Tax2Tree',
    description: 'Tax2Tree (McDonald et al, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Tax2Tree',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'TetraESOM',
    description: 'Tetramer frequencies, input to ESOM (Dick, 2009) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/TetraESOM',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'TrimGalore',
    description: 'Trim sequences with trim-galore (Krueger, 2015) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/TrimGalore',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Trimmomatic',
    description: 'Trim Illumina paired-end reads using Trimmomatic (Bolger et al, 2014) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/Trimmomatic',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Unicycler',
    description: 'Unicycler genome assembly (Wick et al, 2017) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/Unicycler',
    language: Language.CUDA,
    category: Category.ExternalTools
  },
  {
    name: 'Amplicon',
    description: 'Find organisms that produce a product when PCR is executed on a given primer pair',
    githubUrl: 'https://github.com/movingpictures83/Amplicon',
    language: Language.Perl,
    category: Category.Miscellaneous
  },
  {
    name: 'ASVAssign',
    description: 'Assign Amplicon Sequence Variants (Callahan et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/ASVAssign',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'BarabasiAlbert',
    description: 'Generate synthetic network (Barabasi and Albert, 1999)',
    githubUrl: 'https://github.com/movingpictures83/BarabasiAlbert',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'Caffe',
    description: 'Deep learning through Convolutional Architecture for Fast Feature Embedding (Fajet et al, 2019) ',
    githubUrl: 'https://github.com/movingpictures83/Caffe',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'CNN',
    description: 'Convolutional Neural Network (Lawrence et al, 1996)',
    githubUrl: 'https://github.com/movingpictures83/CNN',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'CSVCheck',
    description: 'Check for validity, and number of observables',
    githubUrl: 'https://github.com/movingpictures83/CSVCheck',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'Classify',
    description: 'Phylogenetic OTU Classifier',
    githubUrl: 'https://github.com/movingpictures83/Classify',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'CoreGenome',
    description: 'Compute core genome over a series of FASTA sequences',
    githubUrl: 'https://github.com/movingpictures83/CoreGenome',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'DNN',
    description: 'Deep Neural Network (Nakamoto, 2017)',
    githubUrl: 'https://github.com/movingpictures83/DNN',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'ErdosRenyi',
    description: 'Generate synthetic network (Erdos and Renyi, 1959)',
    githubUrl: 'https://github.com/movingpictures83/ErdosRenyi',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'FCI',
    description: 'Fast Causal Inference (Spirtes et al, 1993)',
    githubUrl: 'https://github.com/movingpictures83/FCI',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'FeatureClassify',
    description: 'Qiime 2 (Bolyen et al, 2019) feature classifier (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FeatureClassify',
    language: Language.CUDA,
    category: Category.Miscellaneous
  },
  {
    name: 'GeneUnify',
    description: 'Unify gene expression values across multiple files',
    githubUrl: 'https://github.com/movingpictures83/GeneUnify',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'GetKraken',
    description: 'Download Kraken (Wood and Salzberg, 2014) database',
    githubUrl: 'https://github.com/movingpictures83/GetKraken',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUAPriori',
    description: 'APriori method for most common subsets (Alemany et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUAPriori',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUBisection',
    description: 'Bisection method (Jardines et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUBisection',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUDijkstra',
    description: "Dijkstra's algorithm for shortest paths (Fernandez et al, 2016)",
    githubUrl: 'https://github.com/movingpictures83/GPUDijkstra',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUDePiCt',
    description: 'Degenerate primers on the GPU (Cickovski et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/GPUDePiCt',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUGraceful',
    description: 'Graceful labeling of a graph (Lopez et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUGraceful',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUKMM',
    description: 'KMM, on the GPU',
    githubUrl: 'https://github.com/movingpictures83/GPUKMM',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUKruskal',
    description: "Kruskal's Algorithm on the GPU (Garcia-Cruz et al, 2016)",
    githubUrl: 'https://github.com/movingpictures83/GPUKruskal',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUPhyllotaxis',
    description: 'Phyllotaxis model on the GPU (Lopez et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/GPUPhyllotaxis',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUPrim',
    description: "Prim's Algorithm for minimum spanning trees (Celli et al, 2016)",
    githubUrl: 'https://github.com/movingpictures83/GPUPrim',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPURiemann',
    description: 'Riemann sums on the GPU (Sanchez et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPURiemann',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'GPUTrapezoiod',
    description: 'Trapezoid method on the GPU (Nunez et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/GPUTrapezoid',
    language: Language.CXX,
    category: Category.Miscellaneous
  },
  {
    name: 'KMM',
    description: 'k-Markov Model for Metagenomics',
    githubUrl: 'https://github.com/movingpictures83/KMM',
    language: Language.CUDA,
    category: Category.Miscellaneous
  },
  {
    name: 'LINGAM',
    description: 'Linear Non-Gaussian Acyclic Model (LINGAM) for Causal Discovery (Shimizu et al, 2006)',
    githubUrl: 'https://github.com/movingpictures83/LINGAM',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'MakeCliques',
    description: 'Make a Network of Cliques (Python)',
    githubUrl: 'https://github.com/movingpictures83/MakeCliques',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'MakeScaleFree',
    description: 'Make a Scale-Free Network (Albert and Barabasi, 2002)',
    githubUrl: 'https://github.com/movingpictures83/MakeScaleFree',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'MakeSynthetic',
    description: 'Make a Synthetic Network',
    githubUrl: 'https://github.com/movingpictures83/MakeSynthetic',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'MakeSynthetic2',
    description: 'Make a Synthetic Network (more complex)',
    githubUrl: 'https://github.com/movingpictures83/MakeSynthetic2',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'MEDUSA',
    description: 'MEDUSA (Bosi et al, 2015) genome scaffolding (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MEDUSA',
    language: Language.CUDA,
    category: Category.Miscellaneous
  },
  {
    name: 'Microarray',
    description: 'Process microarray data, generate gene expression levels',
    githubUrl: 'https://github.com/movingpictures83/Microarray',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'MIMOSA',
    description: 'Data fitting through MIMOSA (Finak et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/MIMOSA',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'MINT',
    description: 'Multivariate INTegration (Rohart et al, 2017) ',
    githubUrl: 'https://github.com/movingpictures83/MINT',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'NorTA',
    description: 'Normal-To-Anything algorithm',
    githubUrl: 'https://github.com/movingpictures83/NorTA',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'ORF',
    description: 'Open Reading Frames (ORFs)',
    githubUrl: 'https://github.com/movingpictures83/ORF',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'PC',
    description: 'PC algorithm for causal structure (Spirtes et al, 2000)',
    githubUrl: 'https://github.com/movingpictures83/PC',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'PCMCI',
    description: 'PCMCI algorithm for time-series data (Runge et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/PCMCI',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'PCStable',
    description: 'PC-Stable algorithm for causal structure (Colombo and Matthuis, 2014)',
    githubUrl: 'https://github.com/movingpictures83/PCStable',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'Qiime2DADA2',
    description: 'Qiime2, with DADA2 denoising',
    githubUrl: 'https://github.com/movingpictures83/Qiime2DADA2',
    language: Language.CUDA,
    category: Category.Miscellaneous
  },
  {
    name: 'QueryPathways',
    description: 'Obtain all metabolic pathways involving a single or pair of taxa/metabolites.',
    githubUrl: 'https://github.com/movingpictures83/QueryPathways',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'RBM',
    description: 'Restricted Boltzmann Machine (Smolensky et al, 1986)',
    githubUrl: 'https://github.com/movingpictures83/RBM',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'RNN',
    description: 'Recurrent Neural Network (Williams et al, 1986)',
    githubUrl: 'https://github.com/movingpictures83/RNN',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'Reactome',
    description: 'Query the Reactome database (Fabregat et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/Reactome',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'ReadingFrame',
    description: 'Compute reading frames between genes',
    githubUrl: 'https://github.com/movingpictures83/ReadingFrame',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'STRING',
    description: 'Query the STRING database (Szklarczyk et al, 2011)',
    githubUrl: 'https://github.com/movingpictures83/STRING',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'SVARS',
    description: 'Calculate counterfactuals using SVARS (Kilian et al, 1998)',
    githubUrl: 'https://github.com/movingpictures83/SVARS',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'SVM',
    description: 'Support Vector Machine (Hearst, 1998)',
    githubUrl: 'https://github.com/movingpictures83/SVM',
    language: Language.R,
    category: Category.Miscellaneous
  },
  {
    name: 'TopMatch',
    description: 'Obtain FASTA file containing the top match of a BLAST (Altschul et al, 1990) query',
    githubUrl: 'https://github.com/movingpictures83/TopMatch',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'Velvet',
    description: 'Velvet (Zerbino and Birney, 2008) de Novo Assembly',
    githubUrl: 'https://github.com/movingpictures83/Velvet',
    language: Language.CUDA,
    category: Category.Miscellaneous
  },
  {
    name: 'WattsStrogatz',
    description: 'Generate synthetic network (Watts and Strogatz, 1998)',
    githubUrl: 'https://github.com/movingpictures83/WattsStrogatz',
    language: Language.Python,
    category: Category.Miscellaneous
  },
  {
    name: 'WikiPathway',
    description: 'Query the WikiPathway database (Pico et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/WikiPathway',
    language: Language.Python,
    category: Category.Miscellaneous
  }
];
