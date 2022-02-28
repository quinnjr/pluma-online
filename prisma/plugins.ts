
import { PluginCreateInput } from '../server/@generated/prisma-graphql/plugin';
import { categories } from './categories';
import { languages } from './languages';

export const Plugins: PluginCreateInput[] = [
  {
    name: 'AbundCSV2NOA',
    description: 'Convert CSV file of abundances to NOA for Cytoscape',
    githubUrl: 'https://github.com/movingpictures83/AbundCSV2NOA',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'BIOM2CSV',
    description: 'Convert BIOM file to CSVA',
    githubUrl: 'https://github.com/verociraptor/BIOM2CSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'BIOM2Upgrade',
    description: 'Upgrade to BIOM version 2 (McDonald et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/BIOM2Upgrade',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'ClusterCSV2NOA',
    description: 'Convert CSV File Of Clusters to NOA',
    githubUrl: 'https://github.com/movingpictures83/ClusterCSV2NOA',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'Copy',
    description: 'Make a copy of a file',
    githubUrl: 'https://github.com/movingpictures83/Copy',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CountTableProcessing',
    description: 'Converts Mothur Counts To Abundance CSV',
    githubUrl: 'https://github.com/movingpictures83/CountTableProcessing',
    language: 'R',
    category: 'File Converters'
  },
  {
    name: 'CSVAppend',
    description: 'Append a new row or column to a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVAppend',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVChop',
    description: 'Return a range of rows from a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVChop',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSV2EDA',
    description: 'Converter from CSV to Cytoscape EDA file format',
    githubUrl: 'https://github.com/movingpictures83/CSV2EDA',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSV2GML',
    description: 'CSV To GML Converter',
    githubUrl: 'https://github.com/movingpictures83/CSV2GML',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSV2PLSDA',
    description: 'Convert an input CSV file to multiple files that can be analyzed with PLSDA (Stahle and Wold 1987)',
    githubUrl: 'https://github.com/movingpictures83/CSV2PLSDA',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSV2PathwayTools',
    description: 'Take a CSV file and perform lookups in PathwayTools (Karp et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/CSV2PathwayTools',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSV2TSNE',
    description: 'Convert CSV file of abundances to multiple input files for TSNE (Van der Maaten et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/CSV2TSNE',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSV2TSV',
    description: 'Converter from comma-separated to tab-delimited format',
    githubUrl: 'https://github.com/movingpictures83/CSV2TSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVExtract',
    description: 'Extract rows from a CSV file with a specific value in a column',
    githubUrl: 'https://github.com/movingpictures83/CSVExtract',
    language: 'R',
    category: 'File Converters'
  },
  {
    name: 'CSVFilter',
    description: 'Remove Columns from a CSV file with Zero Values above a threshold',
    githubUrl: 'https://github.com/movingpictures83/CSVFilter',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVIndex',
    description: 'Index a CSV file over a range of columns',
    githubUrl: 'https://github.com/movingpictures83/CSVIndex',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVLabel',
    description: 'Label rows of a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVLabel',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVLast2First',
    description: 'Move the last column of a CSV file to the first ',
    githubUrl: 'https://github.com/movingpictures83/CSVLast2First',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVMerge',
    description: 'Merge Multiple CSV Files',
    githubUrl: 'https://github.com/movingpictures83/CSVMerge',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVPad',
    description: 'CSV Padding',
    githubUrl: 'https://github.com/movingpictures83/CSVPad',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVQuote',
    description: 'Add quotes to row and column headers',
    githubUrl: 'https://github.com/movingpictures83/CSVQuote',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVRemove',
    description: 'Remove a column from a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVRemove',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVScreen',
    description: 'Remove all rows with a zero or non-zero value in a specific column',
    githubUrl: 'https://github.com/movingpictures83/CSVScreen',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVScreenTax',
    description: 'Remove all rows with a zero or non-zero abundance for a specific taxon (any phylogenetic tree level)',
    githubUrl: 'https://github.com/movingpictures83/CSVScreenTax',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVToss',
    description: 'Remove all observables that are not present in a threshold percentage of samples',
    githubUrl: 'https://github.com/movingpictures83/CSVToss',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'CSVTrim',
    description: 'Trim a CSV file to a specific set of columns ',
    githubUrl: 'https://github.com/movingpictures83/CSVTrim',
    language: 'R',
    category: 'File Converters'
  },
  {
    name: 'CSVUnPad',
    description: 'Remove CSV padding',
    githubUrl: 'https://github.com/movingpictures83/CSVUnPad',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'DESeq2TXT',
    description: 'Human-readable statistics for DESeq2 (Love et al, 2014) output',
    githubUrl: 'https://github.com/movingpictures83/DESeq2TXT',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'FAAOrthologScreen',
    description: 'Screen two FASTA files for mutual orthologs',
    githubUrl: 'https://github.com/movingpictures83/FAAOrthologScreen',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'FASTA2FASTQ',
    description: 'Convert from FASTA to FASTQ format',
    githubUrl: 'https://github.com/movingpictures83/FASTA2FASTQ',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'FASTQ2FASTA',
    description: 'Convert from FASTQ to FASTA format',
    githubUrl: 'https://github.com/movingpictures83/FASTQ2FASTA',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'FASTQ2QZA',
    description: 'Convert a group of FASTQ files to Qiime2 (Bolyen et al, 2019) QZA (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FASTQ2QZA',
    language: 'C++',
    category: 'File Converters'
  },
  {
    name: 'FASTAReplace',
    description: 'Replace sequence names with OTU',
    githubUrl: 'https://github.com/movingpictures83/FASTAReplace',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'FilterPathway',
    description: 'Take a CSV and find all pathways present in PathwayTools (Karp et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/FilterPathway',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'GB2CSV',
    description: 'GenBank To CSV Converter',
    githubUrl: 'https://github.com/movingpictures83/GB2CSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'GML2CSV',
    description: 'GML To CSV Converter',
    githubUrl: 'https://github.com/verociraptor/GML2CSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'GTF2CSV',
    description: 'GTF to CSV Converter (Xue, 2021)',
    githubUrl: 'https://github.com/movingpictures83/GTF2CSV',
    language: 'C++',
    category: 'File Converters'
  },
  {
    name: 'Harvest',
    description: 'Harvest (Treagen et al, 2014) tools',
    githubUrl: 'https://github.com/movingpictures83/Harvest',
    language: 'C++',
    category: 'File Converters'
  },
  {
    name: 'Krona2CSV',
    description: 'Convert a Krona file to multiple CSV files, one per taxonomic level',
    githubUrl: 'https://github.com/movingpictures83/Krona2CSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'Krona2PhyloSeq',
    description: 'Convert a Krona file to PhyloSeq (McMurdie et al, 2013) OTU and taxonomy tables',
    githubUrl: 'https://github.com/movingpictures83/Krona2PhyloSeq',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'KronaTree',
    description: 'Convert a Krona file to multiple TXT files, one per taxonomic level',
    githubUrl: 'https://github.com/movingpictures83/KronaTree',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'LabelDups',
    description: 'Take a CSV file and label duplicate entries',
    githubUrl: 'https://github.com/movingpictures83/LabelDups',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'MergeFiles',
    description: 'Merge the content of all files that match a pattern',
    githubUrl: 'https://github.com/movingpictures83/MergeFiles',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'Mothur2PhyloSeq',
    description: 'Convert Mothur (Schloss et al, 2009) output to PhyloSeq (McMurdie and Holmes, 2013) input',
    githubUrl: 'https://github.com/movingpictures83/Mothur2PhyloSeq',
    language: 'R',
    category: 'File Converters'
  },
  {
    name: 'PathwayFilter',
    description: 'Take a CSV and remove all connections with no corresponding pathway in PathwayTools (Karp et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/PathwayFilter',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'PathwayTools2HMDB',
    description: 'Map PathwayTools (Karp et al, 2015) identifiers to HMDB',
    githubUrl: 'https://github.com/movingpictures83/PathwayTools2HMDB',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'PCL2CSV',
    description: 'PCL To CSV (File Conversion)',
    githubUrl: 'https://github.com/movingpictures83/PCL2CSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'PCPoints',
    description: 'Convert principal components to (x,y) coordinates',
    githubUrl: 'https://github.com/movingpictures83/PCPoints',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'PhyloSeq2LEfSe',
    description: 'Convert PhyloSeq (McMurdie and Holmes, 2013) data to a single file that can be analyzed by LEfSe (Segata et al, 2011) for biomarkers ',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeq2LEfSe',
    language: 'R',
    category: 'File Converters'
  },
  {
    name: 'PhyloSeq2Qiime',
    description: 'Convert PhyloSeq (McMurdie and Holmes, 2013) data files (OTU/TAX/META) into Qiime (Caporaso et al, 2010)-compatible (BIOM/TRE) formats ',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeq2Qiime',
    language: 'R',
    category: 'File Converters'
  },
  {
    name: 'PhyloSeqReorder',
    description: 'Reorder PhyloSeq (McMurdie and Holmes, 2013) taxa to correspond to metadata',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqReorder',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'Qiime2PhyloSeq',
    description: 'Convert Qiime (Caporaso et al, 2010) OTU and metadata files to PhyloSeq (McMurdie and Holmes, 2013) format ',
    githubUrl: 'https://github.com/movingpictures83/Qiime2PhyloSeq',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'QiimeTwo2PhyloSeq',
    description: 'Convert input files from Qiime2 (Bolyen et al, 2019) to PhyloSeq (McMurdie et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/QiimeTwo2PhyloSeq',
    language: 'R',
    category: 'File Converters'
  },
  {
    name: 'RemoveRow',
    description: 'Remove a row of a file',
    githubUrl: 'https://github.com/movingpictures83/RemoveRow',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'SIF2CSV',
    description: 'SIF To CSV (Interactions to Correlations)',
    githubUrl: 'https://github.com/movingpictures83/SIF2CSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'SplitBIOM',
    description: 'Take a BIOM File and split it into each taxonomic tree level',
    githubUrl: 'https://github.com/movingpictures83/SplitBIOM',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'TSV2CSV',
    description: 'Converter from tab-delimited to comma-separated format',
    githubUrl: 'https://github.com/movingpictures83/TSV2CSV',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'Tab2GML',
    description: 'Converter from tab-delimited to GML format',
    githubUrl: 'https://github.com/movingpictures83/Tab2GML',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'TSVFilter',
    description: 'Remove Columns from a TSV file with Zero Values above a threshold',
    githubUrl: 'https://github.com/movingpictures83/TSVFilter',
    language: 'Python',
    category: 'File Converters'
  },
  {
    name: 'Abundance',
    description: 'Average abundance of an entity in a sample set.',
    githubUrl: 'https://github.com/movingpictures83/Abundance',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'AlphaDiversity',
    description: 'Alpha-diversity using Qiime (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/AlphaDiversity',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'AlphaStats',
    description: 'Alpha-diversity statistics',
    githubUrl: 'https://github.com/movingpictures83/AlphaStats',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'AminoAcidComposition',
    description: 'Amino acid composition of a protein sequence (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AminoAcidComposition',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'AssemblyStats',
    description: 'Full genome assembly statistics (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AssemblyStats',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Atlas',
    description: 'Plot the abundance of a taxon over samples, colored by category',
    githubUrl: 'https://github.com/movingpictures83/Atlas',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'ANOSIM',
    description: 'Analysis of Similarities (ANOSIM) (Clarke, 1993) ',
    githubUrl: 'https://github.com/verociraptor/ANOSIM',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Bar',
    description: 'Bar graph of OTU abundances ',
    githubUrl: 'https://github.com/movingpictures83/Bar',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'BetaDiversity',
    description: 'Beta-diversity using Qiime (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/BetaDiversity',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'BetaInAndOut',
    description: 'Compute Beta-diversity between all pairs of samples within each subcategory, and all pairs of samples in different subcategories.',
    githubUrl: 'https://github.com/movingpictures83/BetaInAndOut',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'BoxPlot',
    description: 'Produce a boxplot',
    githubUrl: 'https://github.com/movingpictures83/BoxPlot',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'BUSCO',
    description: 'Assess gene assembly and/or annotation using BUSCO (Simao et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/BUSCO',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CalcMeanStd',
    description: 'Calculates Mean and Standard Deviation',
    githubUrl: 'https://github.com/movingpictures83/CalcMeanStd',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Core',
    description: 'Core taxa community statistics',
    githubUrl: 'https://github.com/movingpictures83/Core',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CSV2Dot',
    description: 'Take a Network in CSV Format and Visualize in Dot (Gansner et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/CSV2Dot',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CSVAvgDeg',
    description: 'Compute the average node degree of a network.',
    githubUrl: 'https://github.com/verociraptor/CSVAvgDeg',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CSVAvgEdgeWeight',
    description: 'Compute the average edge weight of a network.',
    githubUrl: 'https://github.com/verociraptor/CSVAvgEdgeWeight',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CSVDup',
    description: 'List duplicate row and column entries in a CSV file.',
    githubUrl: 'https://github.com/movingpictures83/CSVDup',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CSVMax',
    description: 'Determines Maximum Count Within Samples',
    githubUrl: 'https://github.com/movingpictures83/CSVMax',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CSVNegOnly',
    description: 'Output negative edges.',
    githubUrl: 'https://github.com/movingpictures83/CSVNegOnly',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CSVOverlap',
    description: 'Vector overlap',
    githubUrl: 'https://github.com/movingpictures83/CSVOverlap',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'CytoViz',
    description: 'Cytoscape Visualizer ',
    githubUrl: 'https://github.com/movingpictures83/CytoViz',
    language: 'Perl',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Delta',
    description: 'Calculate differences in abundance (mean, std dev, etc.) between two samples ',
    githubUrl: 'https://github.com/movingpictures83/Delta',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Density',
    description: 'Density plot (normalized abundance vs frequency) of a target taxon ',
    githubUrl: 'https://github.com/movingpictures83/Density',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'DIABLO',
    description: 'Generate DIABLO (Singh et al, 2019) plot ',
    githubUrl: 'https://github.com/movingpictures83/DIABLO',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Diversity',
    description: 'Various diversity measurements ',
    githubUrl: 'https://github.com/movingpictures83/Diversity',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'DivNet',
    description: 'DivNet (Willis and Martin, 2020) algorithm for estimating diversity when taxa co-occur',
    githubUrl: 'https://github.com/movingpictures83/DivNet',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Dominance',
    description: 'Dominance index (Locey and Lennon, 2016) ',
    githubUrl: 'https://github.com/movingpictures83/Dominance',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'EllipsePlot',
    description: '2D plot, with confidence ellipses ',
    githubUrl: 'https://github.com/movingpictures83/EllipsePlot',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'ErrorRate',
    description: 'Error statistics in sequence bases ',
    githubUrl: 'https://github.com/movingpictures83/ErrorRate',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Evenness',
    description: 'Evenness indices ',
    githubUrl: 'https://github.com/movingpictures83/Evenness',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Extract',
    description: 'Extract sequences that include a target sequence  ',
    githubUrl: 'https://github.com/movingpictures83/Extract',
    language: 'Perl',
    category: 'Stats & Visualizations'
  },
  {
    name: 'FASTACount',
    description: 'Count the number of sequences in a FASTA file ',
    githubUrl: 'https://github.com/movingpictures83/FASTACount',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Gini',
    description: 'Gini index (Gini, 1912) ',
    githubUrl: 'https://github.com/movingpictures83/Gini',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'GraPhlAn',
    description: 'Visualize phylogenetic tree with GraPhlAn (Asnicar et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/GraPhlAn',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Gnuplot',
    description: 'Plot data using Gnuplot (Williams and Kelley, 2011)',
    githubUrl: 'https://github.com/movingpictures83/Gnuplot',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Heatmap',
    description: 'Render a heatmap ',
    githubUrl: 'https://github.com/movingpictures83/Heatmap',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'HIVE',
    description: 'HIVE (Hanson, 2011) plots ',
    githubUrl: 'https://github.com/movingpictures83/HIVE',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'InterGroup',
    description: 'Intergroup Beta Diversity',
    githubUrl: 'https://github.com/movingpictures83/InterGroup',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'IntraGroup',
    description: 'Intragroup Beta Diversity',
    githubUrl: 'https://github.com/movingpictures83/IntraGroup',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'InverseSimpson',
    description: 'Inverse Simpson Diversity Index',
    githubUrl: 'https://github.com/movingpictures83/InverseSimpson',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'KMerGenie',
    description: 'KMerGenie optimal k-mer length for assembly (Chikhi and Medvedev, 2014)',
    githubUrl: 'https://github.com/movingpictures83/KMerGenie',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Krona',
    description: 'Krona plot',
    githubUrl: 'https://github.com/movingpictures83/Krona',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'KronaCheck',
    description: 'Check for valid Krona taxonomy',
    githubUrl: 'https://github.com/movingpictures83/KronaCheck',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'KronaCount',
    description: 'Count the number of taxa in a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaCount',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Landscape',
    description: 'Landscape plot of sample sets vs. first two principal components',
    githubUrl: 'https://github.com/movingpictures83/Landscape',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'LogModulo',
    description: 'Log-modulo skew (Magurran and McGill, 2011) ',
    githubUrl: 'https://github.com/movingpictures83/LogModulo',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'MetaQuast',
    description: 'Metagenome assembly evaluation using MetaQuast (Mikheenko et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/MetaQuast',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'MIQ',
    description: 'Median InterQuartile (IQ)',
    githubUrl: 'https://github.com/movingpictures83/MIQ',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'MM',
    description: 'Partitions multi-omics data',
    githubUrl: 'https://github.com/movingpictures83/MM',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'MULTIQC',
    description: 'Summarize results from multiple bioinformatics toolkits in HTML form (Ewels et al, 2016) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MULTIQC',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'MV',
    description: 'Plot mean vs. variance',
    githubUrl: 'https://github.com/movingpictures83/MV',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'NetworkViz',
    description: 'Network Visualizer (Generates Multiple Cytoscape Input Files)',
    githubUrl: 'https://github.com/movingpictures83/NetworkViz',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'NMDS',
    description: 'Produce an OTU heatmap using Non-Multi-Dimensional Scaling (NMDS) (Kruskal, 1964)',
    githubUrl: 'https://github.com/movingpictures83/NMDS',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'OTUHeatmap',
    description: 'Plot OTU abundances using a heatmap',
    githubUrl: 'https://github.com/movingpictures83/OTUHeatmap',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'OTUPlot',
    description: 'Plot OTU abundances at multiple levels of the phylogenetic tree',
    githubUrl: 'https://github.com/movingpictures83/OTUPlot',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'OTURecover',
    description: 'Number of OTUs recovered',
    githubUrl: 'https://github.com/movingpictures83/OTURecover',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Pie',
    description: 'Phylum/class pie plot',
    githubUrl: 'https://github.com/movingpictures83/Pie',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'PlotAlphaDiversity',
    description: 'Plot alpha-diversity for a set of samples (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/PlotAlphaDiversity',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'PlotBetaDiversity3D',
    description: 'Plot beta-diversity for a set of samples in 3D (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/PlotBetaDiversity3D',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'ProcessDesc',
    description: 'Extract phylogenetic information from FASTA file',
    githubUrl: 'https://github.com/movingpictures83/ProcessDesc',
    language: 'Perl',
    category: 'Stats & Visualizations'
  },
  {
    name: 'QGraph',
    description: 'QGraph Visualizer',
    githubUrl: 'https://github.com/movingpictures83/QGraph',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Qiime2Viz',
    description: 'Qiime 2 Visualizer (Bolyen et al, 2019) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Qiime2Viz',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'QualiMap',
    description: 'Generate a QualiMap (Garcia-Alcalde et al, 2012) report',
    githubUrl: 'https://github.com/movingpictures83/QualiMap',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'QualityProfile',
    description: 'Sequence quality statistics',
    githubUrl: 'https://github.com/movingpictures83/QualityProfile',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Quast',
    description: 'Quality Assessment Tool for Genome Assemblies (Gurevich et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/Quast',
    language: 'C++',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Rank',
    description: 'Converts a set of counts to ranks in a sample',
    githubUrl: 'https://github.com/movingpictures83/Rank',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Rare',
    description: 'Rare taxa community statistics',
    githubUrl: 'https://github.com/movingpictures83/Rare',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'ReactionPathway',
    description: 'ReactionPathway (Statistical Analysis of Metabolite Network and Reaction Pathway Data)',
    githubUrl: 'https://github.com/movingpictures83/ReactionPathway',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'ReadTracker',
    description: 'Track reads through a pipeline',
    githubUrl: 'https://github.com/movingpictures83/ReadTracker',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Richness',
    description: 'Sample set richness',
    githubUrl: 'https://github.com/movingpictures83/Richness',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Rival',
    description: 'Rival clubs (Fernandez et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/Rival',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'SequenceLength',
    description: 'Sequence length',
    githubUrl: 'https://github.com/movingpictures83/SequenceLength',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Social',
    description: 'Social clubs (Fernandez et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/Social',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Sparsity',
    description: 'Plot sparsity of a dataset',
    githubUrl: 'https://github.com/movingpictures83/Sparsity',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Spread',
    description: 'Plot spread of taxa abundances over all samples',
    githubUrl: 'https://github.com/movingpictures83/Spread',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Statistics',
    description: 'Take a set of samples and output statistics (mean, standard deviation, etc.) on the most abundant taxa ',
    githubUrl: 'https://github.com/movingpictures83/Statistics',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Summarize',
    description: 'Output a summary of a sample set to the screen',
    githubUrl: 'https://github.com/movingpictures83/Summarize',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'TaxaQuery',
    description: 'Query a taxon and obtain statistics',
    githubUrl: 'https://github.com/movingpictures83/TaxaQuery',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Tree',
    description: 'PluMA plugin to produce a phylogenetic tree for taxa, decorated by sample set',
    githubUrl: 'https://github.com/movingpictures83/Tree',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'TriadCounter',
    description: 'Counts the number of stable and unstable triads (Easley and Kleinberg, 2010) in a social network',
    githubUrl: 'https://github.com/movingpictures83/TriadCounter',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'TTestDependent',
    description: 'Run the T-Test on dependent samples',
    githubUrl: 'https://github.com/verociraptor/TTestDependent',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'TTestIndependent',
    description: 'Run the T-Test on independent data',
    githubUrl: 'https://github.com/verociraptor/TTestIndependent',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Unclassified',
    description: 'Number of OTUs unclassified',
    githubUrl: 'https://github.com/movingpictures83/Unclassified',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'UnclassifiedList',
    description: 'List unclassified OTUs',
    githubUrl: 'https://github.com/movingpictures83/UnclassifiedList',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'UniqueGroups',
    description: 'Output the unique groups',
    githubUrl: 'https://github.com/movingpictures83/UniqueGroups',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'UniqueSequences',
    description: 'Output all unique sequences in a FASTA file',
    githubUrl: 'https://github.com/movingpictures83/UniqueSequences',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Variance',
    description: 'Variance Calculator',
    githubUrl: 'https://github.com/movingpictures83/Variance',
    language: 'Python',
    category: 'Stats & Visualizations'
  },
  {
    name: 'Violin',
    description: 'Violin plot',
    githubUrl: 'https://github.com/movingpictures83/Violin',
    language: 'R',
    category: 'Stats & Visualizations'
  },
  {
    name: 'ArcDirect',
    description: 'Obtain directed arcs',
    githubUrl: 'https://github.com/movingpictures83/ArcDirect',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'ArcUndirect',
    description: 'Obtain undirected arcs',
    githubUrl: 'https://github.com/movingpictures83/ArcUndirect',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'ASV2Taxon',
    description: 'Assign unique taxa to Amplicon Sequence Variants (ASVs) (Callahan, 2017)',
    githubUrl: 'https://github.com/movingpictures83/ASV2Taxon',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'BootStrength',
    description: 'Boostrap-based inference (Cameron et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/BootStrength',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'BWA',
    description: 'Burrows-Wheeler Alignment (Li and Durbin, 2009)',
    githubUrl: 'https://github.com/movingpictures83/BWA',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'ChangeLevel',
    description: 'Change phylogenetic analysis level',
    githubUrl: 'https://github.com/movingpictures83/ChangeLevel',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'ChimeraRemove',
    description: 'Remove chimeric sequences',
    githubUrl: 'https://github.com/movingpictures83/ChimeraRemove',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Circular2Linear',
    description: 'Linearize a circular DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/Circular2Linear',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CLR',
    description: 'Center Log Ratio (CLR) transformation',
    githubUrl: 'https://github.com/movingpictures83/CLR',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Clusterize',
    description: 'Remove Edges Between Nodes in Different Clusters',
    githubUrl: 'https://github.com/movingpictures83/Clusterize',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVAverage',
    description: 'Average column values of a CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVAverage',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVCollate',
    description: 'Collate a set of CSV files into one',
    githubUrl: 'https://github.com/movingpictures83/CSVCollate',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVJoinSplit',
    description: 'Generate taxonomically classified taxa counts from original counts, metadata and taxonomic tree ',
    githubUrl: 'https://github.com/movingpictures83/CSVJoinSplit',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'CSVMapRange',
    description: 'Map Range of One CSV File To Another (Useful in Multi-Omics)',
    githubUrl: 'https://github.com/movingpictures83/CSVMapRange',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVMult',
    description: 'Multiply a CSV file by a constant',
    githubUrl: 'https://github.com/movingpictures83/CSVMult',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVNeg2Pos',
    description: 'Map [-1, 1] edge weight range to [0, 2]',
    githubUrl: 'https://github.com/movingpictures83/CSVNeg2Pos',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVNeg2Zero',
    description: 'Change Negative Edges To Zero',
    githubUrl: 'https://github.com/movingpictures83/CSVNeg2Zero',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVNoDup',
    description: 'Remove duplicates from CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVNoDup',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVNormalize',
    description: 'CSV Normalization',
    githubUrl: 'https://github.com/movingpictures83/CSVNormalize',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVNoUnderscore',
    description: 'Remove underscores from CSV file',
    githubUrl: 'https://github.com/movingpictures83/CSVNoUnderscore',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVPathways',
    description: 'Take a CSV and lookup all metabolic pathways involving internal taxa or metabolites',
    githubUrl: 'https://github.com/movingpictures83/CSVPathways',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVPool',
    description: 'Take a CSV and pool together duplicate rows/columns',
    githubUrl: 'https://github.com/movingpictures83/CSVPool',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVRename',
    description: 'Rename rows and/or columns of a CSV',
    githubUrl: 'https://github.com/movingpictures83/CSVRename',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVScale',
    description: 'Scale CSV Values to Have a Median of One',
    githubUrl: 'https://github.com/movingpictures83/CSVScale',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVSort',
    description: 'Sort a CSV file by row',
    githubUrl: 'https://github.com/movingpictures83/CSVSort',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVTranspose',
    description: 'Transpose a Matrix in a CSV File',
    githubUrl: 'https://github.com/movingpictures83/CSVTranspose',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVUnNormalize',
    description: 'CSV Reverse Normalization',
    githubUrl: 'https://github.com/movingpictures83/CSVUnNormalize',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVUpperTriangular',
    description: 'Upper triangular portion of a matrix',
    githubUrl: 'https://github.com/movingpictures83/CSVUpperTriangular',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'CSVZero2Min',
    description: 'Change All Zeroes in a CSV to the Minimum Value',
    githubUrl: 'https://github.com/movingpictures83/CSVZero2Min',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'DADA',
    description: 'Divisive Amplicon Denoising Algorithm (Rosen et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/DADA',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'Deblur',
    description: 'Qiime 2 (Bolyen et al, 2019) deblur (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Deblur',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'DeMUX',
    description: 'Demultiplex (DeMUX) a set of sequences into groups given their barcodes (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/DeMUX',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'DeReplicate',
    description: 'Remove replicate sequences',
    githubUrl: 'https://github.com/movingpictures83/DeReplicate',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'Dereplication',
    description: 'Convert redundant reads into sequences and counts',
    githubUrl: 'https://github.com/movingpictures83/Dereplication',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'DNA2Protein',
    description: 'Corresponding protein for DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/DNA2Protein',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'DNAComplement',
    description: 'Complement a DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/DNAComplement',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'DNAReverseComplement',
    description: 'Reverse complement a DNA sequence',
    githubUrl: 'https://github.com/movingpictures83/DNAReverseComplement',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'FAIDX',
    description: 'Filter a FASTA file by sequence length range (Shirley et al, 2015) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FAIDX',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'FASTAExtract',
    description: 'Extract a portion of a FASTA File',
    githubUrl: 'https://github.com/movingpictures83/FASTAExtract',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'FilterAndTrim',
    description: 'Filter sequences for quality, and trim to a specified length',
    githubUrl: 'https://github.com/movingpictures83/FilterAndTrim',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'FiltLong',
    description: 'FiltLong filter for long reads',
    githubUrl: 'https://github.com/movingpictures83/FiltLong',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'FilterMicrobes',
    description: 'Filter out connections between metagenomic data based on underlying metabolic networks',
    githubUrl: 'https://github.com/movingpictures83/FilterMicrobes',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'GPUGauss',
    description: 'GPU Gaussian elimination (Cabrera Domingo et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUGauss',
    language: 'CUDA',
    category: 'Transformations'
  },
  {
    name: 'GPUTSVAdd',
    description: 'GPU matrix addition (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVAdd',
    language: 'CUDA',
    category: 'Transformations'
  },
  {
    name: 'GPUTSVCofactor',
    description: 'GPU matrix cofactor (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVCofactor',
    language: 'CUDA',
    category: 'Transformations'
  },
  {
    name: 'GPUTSVMult',
    description: 'GPU matrix multiplication (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVMult',
    language: 'CUDA',
    category: 'Transformations'
  },
  {
    name: 'GPUTSVScale',
    description: 'GPU matrix scaling (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVScale',
    language: 'CUDA',
    category: 'Transformations'
  },
  {
    name: 'GPUTSVTranspose',
    description: 'GPU matrix transpose (Tahoun et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUTSVTranspose',
    language: 'CUDA',
    category: 'Transformations'
  },
  {
    name: 'Hellinger',
    description: 'Hellinger transform (Hellinger et al, 1914)',
    githubUrl: 'https://github.com/movingpictures83/Hellinger',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Host',
    description: 'Retrieve host sequences (Uritsky et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/Host',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'KronaClean',
    description: 'Clean a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaClean',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'KronaIgnore',
    description: 'Ignore all taxa in Krona file that contain a specific string',
    githubUrl: 'https://github.com/movingpictures83/KronaIgnore',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'KronaNoGroups',
    description: 'Remove groups from a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaNoGroups',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'KronaNoVirus',
    description: 'Remove viruses from a Krona file',
    githubUrl: 'https://github.com/movingpictures83/KronaNoVirus',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'KronaReplace',
    description: 'Replace a string in a Krona file by another string',
    githubUrl: 'https://github.com/movingpictures83/KronaReplace',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'LEfSeOnlyLowest',
    description: 'Restrict LEfSe (Segata et al, 2011) output to lowest taxonomic level',
    githubUrl: 'https://github.com/movingpictures83/LEfSeOnlyLowest',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'LEfSeRemoveZero',
    description: 'Convert LEfSe (Segata et al, 2011) output to biomarkers only (nonzero LDA score)',
    githubUrl: 'https://github.com/movingpictures83/LEfSeRemoveZero',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'Log10',
    description: 'Transform data by log base 10',
    githubUrl: 'https://github.com/movingpictures83/Log10',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Log10P',
    description: 'Transform data by log(1+x)',
    githubUrl: 'https://github.com/movingpictures83/Log10P',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'LogTransform',
    description: 'Log-transform data',
    githubUrl: 'https://github.com/movingpictures83/LogTransform',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'LongestContig',
    description: 'Find the longest contig in a FASTA file',
    githubUrl: 'https://github.com/movingpictures83/LongestContig',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'MakeIndex',
    description: 'Make index from multiple reference genomes (Li et al, 2009)',
    githubUrl: 'https://github.com/movingpictures83/MakeIndex',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'Map2Positive',
    description: 'Map All Edges To Positive Range',
    githubUrl: 'https://github.com/movingpictures83/Map2Positive',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'MapReads',
    description: 'Map a set of reads to a reference genome (Li and Durbin, 2009)',
    githubUrl: 'https://github.com/movingpictures83/MapReads',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'MergePairedEnd',
    description: 'Merge paired-end reads',
    githubUrl: 'https://github.com/movingpictures83/MergePairedEnd',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'MetabNorm',
    description: 'Mixed-Mode (Cohort and Batch) Metabolite Normalization (Jauhiainen et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/MetabNorm',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Microbial',
    description: 'Retrieve microbial sequences (Uritsky et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/Microbial',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'MothurFilter',
    description: 'Filter Mothur (Schloss et al, 2009) taxa',
    githubUrl: 'https://github.com/movingpictures83/MothurFilter',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'MultiomicScreen',
    description: 'Screen taxa correlations, leaving only heterogeneous',
    githubUrl: 'https://github.com/movingpictures83/MultiomicScreen',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'NetworkDeconvolution',
    description: 'Network deconvolution algorithm (Feizi et al, 2013) to determine direct network dependencies.',
    githubUrl: 'https://github.com/movingpictures83/NetworkDeconvolution',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'NetworkNoise',
    description: 'Add random noise to a signed and weighted network.',
    githubUrl: 'https://github.com/movingpictures83/NetworkNoise',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'NormScoreTransform',
    description: 'Normal Probability Values',
    githubUrl: 'https://github.com/movingpictures83/NormScoreTransform',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Oksanen',
    description: 'Oksanen transformation (Oksanen, 1983)',
    githubUrl: 'https://github.com/movingpictures83/Oksanen',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'OTUSummary',
    description: 'Summarize OTUs at multiple levels of the phylogenetic tree',
    githubUrl: 'https://github.com/movingpictures83/OTUSummary',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'PhyloSeqFilter',
    description: 'Filter PhyloSeq (McMurdie and Holmes, 2013) data',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqFilter',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'PhyloSeqNAResolve',
    description: 'Take PhyloSeq (McMurdie and Holmes, 2013) taxonomy table and resolve all unclassifiable levels ',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqNAResolve',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'PhyloSeqNormalize',
    description: 'Normalize PhyloSeq (McMurdie and Holmes, 2013) taxa',
    githubUrl: 'https://github.com/movingpictures83/PhyloSeqNormalize',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'PoreChop',
    description: 'Adapter trimming with PoreChop (Wick et al, 2017) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/PoreChop',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'Qiime2Filter',
    description: 'Filter Qiime2 (Bolyen et al, 2019) reads based on a feature',
    githubUrl: 'https://github.com/movingpictures83/Qiime2Filter',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'QualityFilter',
    description: 'Qiime 2 (Bolyen et al, 2019) quality filter (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/QualityFilter',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'QuantumDenoiser',
    description: 'Remove noisy fluctations from CKMeans quanta',
    githubUrl: 'https://github.com/movingpictures83/QuantumDenoiser',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'Rank2Tax',
    description: 'Convert header of PhyloSeq (McMurdie et al, 2013) taxonomy table to use phylogeny',
    githubUrl: 'https://github.com/movingpictures83/Rank2Tax',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'Rarefy',
    description: 'Rarefying, ad hoc (McMurdie and Holmes, 2014)',
    githubUrl: 'https://github.com/movingpictures83/Rarefy',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'ReferencePoint',
    description: 'Change position of a set of genes based on a reference gene',
    githubUrl: 'https://github.com/movingpictures83/ReferencePoint',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'RemoveNegative',
    description: 'Remove negative edges',
    githubUrl: 'https://github.com/movingpictures83/RemoveNegative',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'RemoveSingletons',
    description: 'Remove singleton taxa',
    githubUrl: 'https://github.com/movingpictures83/RemoveSingletons',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'RemoveTaxa',
    description: 'Remove taxa with a certain property',
    githubUrl: 'https://github.com/movingpictures83/RemoveTaxa',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'RemoveUnclassified',
    description: 'Remove unclassified taxa',
    githubUrl: 'https://github.com/movingpictures83/RemoveUnclassified',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'RemoveZero',
    description: 'Remove zero-abundant entities',
    githubUrl: 'https://github.com/movingpictures83/RemoveZero',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'SortByCluster',
    description: 'Sort nodes in a network based on cluster membership',
    githubUrl: 'https://github.com/movingpictures83/SortByCluster',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'SortForwardReverse',
    description: 'Sort forward and reverse reads to be in the same order',
    githubUrl: 'https://github.com/movingpictures83/SortForwardReverse',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'SortSamples',
    description: 'Sort a set of samples by a property',
    githubUrl: 'https://github.com/movingpictures83/SortSamples',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'SplitTableProcessing',
    description: 'Take a table of counts from Mothur and split into multiple counts classified by taxonomy   ',
    githubUrl: 'https://github.com/movingpictures83/SplitTableProcessing',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'Standardize',
    description: 'Transform to standard distribution',
    githubUrl: 'https://github.com/movingpictures83/Standardize',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Subset',
    description: 'Obtain a subset of PhyloSeq (McMurdie and Holmes, 2013) data',
    githubUrl: 'https://github.com/movingpictures83/Subset',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Subspecies',
    description: 'Obtain subspecies from a KRONA file',
    githubUrl: 'https://github.com/movingpictures83/Subspecies',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'TaxaPrune',
    description: 'Prune PhyloSeq (McMurdie and Holmes, 2013) taxa ',
    githubUrl: 'https://github.com/movingpictures83/TaxaPrune',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'TaxonomySplit',
    description: 'Take a table of abundances and make multiple, one for each level of the taxonomic tree ',
    githubUrl: 'https://github.com/movingpictures83/TaxonomySplit',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'Threshold',
    description: 'Remove all observables from a dataset with a low frequency of occurrence',
    githubUrl: 'https://github.com/movingpictures83/Threshold',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Transform',
    description: 'Shift composition (Egozcue and Pawlowski-Glahn, 2016)',
    githubUrl: 'https://github.com/movingpictures83/Transform',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'TSVPerturb',
    description: 'Perturb values in TSV file',
    githubUrl: 'https://github.com/movingpictures83/TSVPerturb',
    language: 'Python',
    category: 'Transformations'
  },
  {
    name: 'UNOISE',
    description: 'Denoise sequences (Edgar et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/UNOISE',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'ValidateMapping',
    description: 'Validate mapping file with Qiime (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/ValidateMapping',
    language: 'C++',
    category: 'Transformations'
  },
  {
    name: 'VStructures',
    description: 'Obtain V-structures',
    githubUrl: 'https://github.com/movingpictures83/VStructures',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'Z',
    description: 'Z-transformation',
    githubUrl: 'https://github.com/movingpictures83/Z',
    language: 'R',
    category: 'Transformations'
  },
  {
    name: 'ACE',
    description: 'Abundance-based Convergence Estimator (ACE, Chao and Lee 1992).',
    githubUrl: 'https://github.com/movingpictures83/ACE',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'AES',
    description: 'Autoencoders for dimensionality reduction (Hinton &amp; Salakhutdinov, 2006)',
    githubUrl: 'https://github.com/movingpictures83/AES',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'ANOVA',
    description: 'ANalysis Of VAriance (ANOVA), estimates differences between sample groups (Kaufman and Scheren, 2014).',
    githubUrl: 'https://github.com/verociraptor/ANOVA',
    language: 'Python',
    category: 'Dissimilarity'
  },
  {
    name: 'BHTSNE',
    description: 'Barnes-Hut version of tSNE (Laczny et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/BHTSNE',
    language: 'Python',
    category: 'Dissimilarity'
  },
  {
    name: 'BinomialDeviance',
    description: 'Binomial Deviance (McArdle and Anderson, 2001)',
    githubUrl: 'https://github.com/movingpictures83/BinomialDeviance',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Bray',
    description: 'Bray-Curtis (Bray and Curtis, 1957)',
    githubUrl: 'https://github.com/movingpictures83/Bray',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Canberra',
    description: 'Canberra Distance (Lance and Williams, 1966)',
    githubUrl: 'https://github.com/movingpictures83/Canberra',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Chao',
    description: "Chao's Method (Chao, 2005)",
    githubUrl: 'https://github.com/movingpictures83/Chao',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'CORNCOB',
    description: 'Count Regression for Correlated Observations with the Beta-binomial (CORNCOB) (Martin et al, 2020)',
    githubUrl: 'https://github.com/movingpictures83/CORNCOB',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'DESeq',
    description: 'Differential Gene Expression Analysis Based on the Negative Binomial Distribution (Love et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/DESeq',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'DPCoA',
    description: 'Double Principal Component Analysis (Pavoine et al, 2004)',
    githubUrl: 'https://github.com/movingpictures83/DPCoA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'EuclideanDistance',
    description: 'Euclidean Distance ',
    githubUrl: 'https://github.com/movingpictures83/EuclideanDistance',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'FeatureSelection',
    description: 'Determine the most distinguishing features for case vs control',
    githubUrl: 'https://github.com/movingpictures83/FeatureSelection',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Fisher',
    description: 'Fisher Diversity Index (Fisher et al, 1943)',
    githubUrl: 'https://github.com/movingpictures83/Fisher',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Gower',
    description: 'Gower Index (Gower, 1971) ',
    githubUrl: 'https://github.com/movingpictures83/Gower',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Horn',
    description: "Horn's Overlap Index (Horn, 1966)",
    githubUrl: 'https://github.com/movingpictures83/Horn',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'ICA',
    description: 'Independent Component Analysis (Hyvarinen and Oja, 2000)',
    githubUrl: 'https://github.com/movingpictures83/ICA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'IPCA',
    description: 'Independent Principle Component Analysis (Yao et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/IPCA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Jaccard',
    description: 'Jaccard Index (Jaccard, 1912)',
    githubUrl: 'https://github.com/movingpictures83/Jaccard',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'JSD',
    description: 'Jensen-Shannon Divergence (Fuglede et al, 2004)',
    githubUrl: 'https://github.com/movingpictures83/JSD',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Kulczynski',
    description: 'Kulczynski Similarity (Kulczynski, 1927)',
    githubUrl: 'https://github.com/movingpictures83/Kulczynski',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'LEfSe',
    description: 'Linear discriminant analysis Effect Size (LEfSe) (Segata et al, 2011)',
    githubUrl: 'https://github.com/movingpictures83/LEfSe',
    language: 'Python',
    category: 'Dissimilarity'
  },
  {
    name: 'LMS',
    description: 'Least Mean Squares method for regression analysis (Widrow and Hoff, 1960)',
    githubUrl: 'https://github.com/movingpictures83/LMS',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'MDS',
    description: 'Multi-Dimensional Scaling (Cox, 2008)',
    githubUrl: 'https://github.com/movingpictures83/MDS',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Manhattan',
    description: 'Manhattan Distance',
    githubUrl: 'https://github.com/movingpictures83/Manhattan',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Morisita',
    description: 'Morisita Overlap (Morisita, 1959)',
    githubUrl: 'https://github.com/movingpictures83/Morisita',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Mountford',
    description: 'Mountford Dissimilariy Index (Mountford, 1962)',
    githubUrl: 'https://github.com/movingpictures83/Mountford',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'MT',
    description: 'Multiple Testing of Taxa Abundances According to Sample Category (McMurdie, 2020)',
    githubUrl: 'https://github.com/movingpictures83/MT',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'NetRep',
    description: 'NetRep algorithm (Ritchie et al, 2016) for detecting amount of preservation between two datasets',
    githubUrl: 'https://github.com/movingpictures83/NetRep',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Observed',
    description: 'Observed taxa count',
    githubUrl: 'https://github.com/movingpictures83/Observed',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'PCA',
    description: 'Principle Component Analysis (Pearson, 1901)',
    githubUrl: 'https://github.com/movingpictures83/PCA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'PCoA',
    description: 'Principle Coordinate Analysis (Gower, 1966)',
    githubUrl: 'https://github.com/movingpictures83/PCoA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'PERMANOVA',
    description: 'PERmanent Multivariate ANalysis Of VAriance (PERMANOVA) (Anderson, 2001)',
    githubUrl: 'https://github.com/verociraptor/PERMANOVA',
    language: 'Python',
    category: 'Dissimilarity'
  },
  {
    name: 'PHATE',
    description: 'Potential of Heat-diffusion for Affinity-based Trajectory Embedding (Moon et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/PHATE',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'PLSDA',
    description: 'Partial Least Squares Discriminant Analysis (PLS-DA, Stahle and Wold 1987)',
    githubUrl: 'https://github.com/movingpictures83/PLSDA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'PLSDA-Multiple',
    description: 'Partial Least Squares Discriminant Analysis (PLS-DA, Stahle and Wold 1987) for multiple datasets',
    githubUrl: 'https://github.com/movingpictures83/PLSDA-Multiple',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Raup',
    description: 'Raup-Crick (Raup and Crick, 1979)',
    githubUrl: 'https://github.com/movingpictures83/Raup',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'RUTA',
    description: 'Differential analysis using unsupervised neural networks (Charte et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/RUTA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Shannon',
    description: 'Shannon Diversity Index (Shannon, 1948)',
    githubUrl: 'https://github.com/movingpictures83/Shannon',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'Simpson',
    description: 'Simpson Diversity Index (Simpson, 1949)',
    githubUrl: 'https://github.com/movingpictures83/Simpson',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'SPLSDA',
    description: 'Sparse Partial Least Squares Discriminant Analysis (SPLS-DA, Le Cao et al 2011)',
    githubUrl: 'https://github.com/movingpictures83/SPLSDA',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'SpNMF',
    description: 'Supervised Non-Negative Matrix Factorization (Cai et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/SpNMF',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'tSNE',
    description: 't-Distributed Stochastic Neighbor Embedding (Van der Maaten et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/tSNE',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'UMAP',
    description: 'Uniform Manifold Approximation and Projection (UMAP) (McInnes et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/UMAP',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'UniFrac',
    description: 'UniFrac distance (Lozupone and Knight, 2005)',
    githubUrl: 'https://github.com/movingpictures83/UniFrac',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'WeightedUniFrac',
    description: 'Weighted UniFrac distance (Lozupone et al, 2007)',
    githubUrl: 'https://github.com/movingpictures83/WeightedUniFrac',
    language: 'R',
    category: 'Dissimilarity'
  },
  {
    name: 'CCA',
    description: 'Canonical Correlation Analysis (Gonzalez et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/CCA',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'CausalNetwork',
    description: 'Build a causal network (Sazal et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/CausalNetwork',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'CoNet',
    description: 'Infer abundance matrix from interactions using CoNet (Faust et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/CoNet',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'DistanceCorrelation',
    description: 'Distance Correlation (Szekely, 2005) ',
    githubUrl: 'https://github.com/movingpictures83/DistanceCorrelation',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'Ensemble',
    description: 'Ensemble Correlation Computation (Weiss, 2016) ',
    githubUrl: 'https://github.com/movingpictures83/Ensemble',
    language: 'Python',
    category: 'Correlation'
  },
  {
    name: 'FunChiSq',
    description: 'Functional Chi-Squared Dependency Computation (Zhang and Song, 2013) ',
    githubUrl: 'https://github.com/movingpictures83/FunChiSq',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'Kendall',
    description: 'Kendall Correlation (Kendall, 1970)',
    githubUrl: 'https://github.com/movingpictures83/Kendall',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'KS',
    description: 'Kolmogorov-Smirnov Test Statistic (Kolmogorov, 1933)',
    githubUrl: 'https://github.com/movingpictures83/KS',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'LSA',
    description: 'Local Similarity Analysis (Ruan, 2006)',
    githubUrl: 'https://github.com/movingpictures83/LSA',
    language: 'Python',
    category: 'Correlation'
  },
  {
    name: 'MIC',
    description: 'Maximal Information Coefficient (Reshef, 2011)',
    githubUrl: 'https://github.com/movingpictures83/MIC',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'MPLasso',
    description: 'MPLasso (Lo and Marculescu, 2017)',
    githubUrl: 'https://github.com/movingpictures83/MPLasso',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'Pearson',
    description: 'Pearson Correlation (Pearson, 1896)',
    githubUrl: 'https://github.com/movingpictures83/Pearson',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'Phi',
    description: 'Proportionatlity metric (Lovell et al, 2015) for relative data',
    githubUrl: 'https://github.com/movingpictures83/Phi',
    language: 'Python',
    category: 'Correlation'
  },
  {
    name: 'PhiLR',
    description: 'Phylogenetic Isometric Log-Ratio Transform (Silverman et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/PhiLR',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'RevEcoR',
    description: 'Predict ecological relationships between two organisms based on metabolic networks using RevEcoR (Cao et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/RevEcoR',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'SparCC',
    description: 'SparCC Correlation (Friedman and Alm, 2012)',
    githubUrl: 'https://github.com/movingpictures83/SparCC',
    language: 'Python',
    category: 'Correlation'
  },
  {
    name: 'SparCCGPU',
    description: 'SparCC on the GPU (Alonso, Escobar, Panoff and Suarez, 2017)',
    githubUrl: 'https://github.com/movingpictures83/SparCCGPU',
    language: 'CUDA',
    category: 'Correlation'
  },
  {
    name: 'Spearman',
    description: 'Spearman Correlation (Spearman, 1904)',
    githubUrl: 'https://github.com/movingpictures83/Spearman',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'SpearmanMulti',
    description: 'Spearman Correlations Over Multiple Data Sets and a Single Sample Set (Useful for Multi-Omics)',
    githubUrl: 'https://github.com/movingpictures83/SpearmanMulti',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'SpearmanTies',
    description: 'Spearman, and Can Handle Rank Ties',
    githubUrl: 'https://github.com/movingpictures83/SpearmanTies',
    language: 'Python',
    category: 'Correlation'
  },
  {
    name: 'SpearmanTiesMulti',
    description: 'Hybrid Functionality of SpearmanTies and SpearmanMulti',
    githubUrl: 'https://github.com/movingpictures83/SpearmanTiesMulti',
    language: 'Python',
    category: 'Correlation'
  },
  {
    name: 'SPIECEASI',
    description: 'SPIEC-EASI (Kurtz et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/SPIECEASI',
    language: 'R',
    category: 'Correlation'
  },
  {
    name: 'ATria',
    description: 'Ablatio Triadum (ATria) Centrality (Cickovski et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/ATria',
    language: 'C++',
    category: 'Centrality'
  },
  {
    name: 'BiasedPageRank',
    description: 'Edge-Weighted Personalized Page Rank (Xie et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/BiasedPageRank',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'Centroid',
    description: 'Centroid algorithm (Wuchty and Stadler, 2003)',
    githubUrl: 'https://github.com/movingpictures83/Centroid',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'ClusterLeaders',
    description: 'Compute leader nodes of network clusters',
    githubUrl: 'https://github.com/movingpictures83/ClusterLeaders',
    language: 'R',
    category: 'Centrality'
  },
  {
    name: 'Conquests',
    description: 'Conquests algorithm (Laniau et al, 2017) for Phenotypically Essential Metabolites',
    githubUrl: 'https://github.com/movingpictures83/Conquests',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'Degree',
    description: 'Degree Centrality (Freeman, 1979) ',
    githubUrl: 'https://github.com/movingpictures83/Degree',
    language: 'C++',
    category: 'Centrality'
  },
  {
    name: 'Exponential',
    description: 'Exponential Centality (Benzi and Klymko, 2013) ',
    githubUrl: 'https://github.com/movingpictures83/Exponential',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'GPUATria',
    description: 'GPUATria (ATria, on the GPU)',
    githubUrl: 'https://github.com/movingpictures83/GPUATria',
    language: 'CUDA',
    category: 'Centrality'
  },
  {
    name: 'IndVal',
    description: 'Indicator species for each cluster (Roberts, 2007)',
    githubUrl: 'https://github.com/movingpictures83/IndVal',
    language: 'R',
    category: 'Centrality'
  },
  {
    name: 'Katz',
    description: 'Katz Prestige Centrality (Katz, 1953)',
    githubUrl: 'https://github.com/movingpictures83/Katz',
    language: 'C++',
    category: 'Centrality'
  },
  {
    name: 'MATria',
    description: 'Multiple Ablatio Triadium (Cickovski et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/MATria',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'MWM',
    description: 'Computes edge centralities, with the help of Maximum Weighted Matching (Galil, 1986)',
    githubUrl: 'https://github.com/movingpictures83/MWM',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'NetCooperate',
    description: 'NetCooperate Algorithm for Key Metabolites (Levy et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/NetCooperate',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'PageRank',
    description: 'Page Rank Centrality (Page, 1999)',
    githubUrl: 'https://github.com/movingpictures83/PageRank',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'PyATria',
    description: 'ATria, in Python',
    githubUrl: 'https://github.com/movingpictures83/PyATria',
    language: 'Python',
    category: 'Centrality'
  },
  {
    name: 'RWRMH',
    description: 'Random Walk with Restart on Multiplex and Heterogeneous biological networks (Valdeolivas et al, 2018)',
    githubUrl: 'https://github.com/movingpictures83/RWRMH',
    language: 'R',
    category: 'Centrality'
  },
  {
    name: 'AffinityPropagation',
    description: 'Affinity Propagation (Frey and Dueck, 2007)',
    githubUrl: 'https://github.com/movingpictures83/AffinityPropagation',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'CDHit',
    description: 'CD-Hit (Li and Godzik, 2006) ',
    githubUrl: 'https://github.com/movingpictures83/CDHit',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'ClusterCount',
    description: 'Number of clusters in a network above a threshold in size',
    githubUrl: 'https://github.com/movingpictures83/ClusterCount',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'ClusterMeans',
    description: 'Mean edge weight between all clusters of a network',
    githubUrl: 'https://github.com/movingpictures83/ClusterMeans',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'ClusterPathways',
    description: 'Given a set of clusters of taxa, find all metabolic pathways shared by node pairs within the cluster',
    githubUrl: 'https://github.com/movingpictures83/ClusterPathways',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'ClusterStd',
    description: 'Edge standard deviation between all clusters of a network',
    githubUrl: 'https://github.com/movingpictures83/ClusterStd',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'Community',
    description: 'Information on the local community of a target.',
    githubUrl: 'https://github.com/movingpictures83/Community',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'CommunityDetection',
    description: 'Girvan-Newman algorithm for community detection in a network (Girvan and Newman, 2002)',
    githubUrl: 'https://github.com/movingpictures83/CommunityDetection',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'CKMeans',
    description: 'CKMeans (Wang and Song, 2011)',
    githubUrl: 'https://github.com/movingpictures83/CKMeans',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'DeNovoOTU',
    description: 'De Novo OTU Selection (Caporaso et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/DeNovoOTU',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'Enterotypes',
    description: 'Find enterotypes within a set of samples (Arumugam et al, 2011)',
    githubUrl: 'https://github.com/movingpictures83/Enterotypes',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'GMM',
    description: 'Gaussian Mixture Model (Rasmussen, 1999)',
    githubUrl: 'https://github.com/movingpictures83/GMM',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'HMM',
    description: 'Hidden Markov Model (Liu and Li, 2017)',
    githubUrl: 'https://github.com/movingpictures83/HMM',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'KMeans',
    description: 'KMeans clustering (MacQueen, 1967)',
    githubUrl: 'https://github.com/movingpictures83/KMeans',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'LinClust',
    description: 'Linear-Time Clustering (Steinegger and Soding, 2018)',
    githubUrl: 'https://github.com/movingpictures83/LinClust',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'Louvain',
    description: 'Louvain Clustering (Blondel et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/Louvain',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'MCL',
    description: 'Markov Clustering (van Dongen, 2000)',
    githubUrl: 'https://github.com/movingpictures83/MCL',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'MClust',
    description: 'MClust (Scrucca et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/MClust',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'ModularityMaximization',
    description: 'Modularity Maximization Algorithm For Clustering Level',
    githubUrl: 'https://github.com/movingpictures83/ModularityMaximization',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'PAM',
    description: 'Partition Around Medoids (PAM) clustering (Kaufman and Rousseeuw, 1987) ',
    githubUrl: 'https://github.com/movingpictures83/PAM',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'PrefixSuffix',
    description: 'Prefix-Suffix algorithm of Qiime (Edgar et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/PrefixSuffix',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'PyNAST',
    description: 'PyNAST clustering (Caporaso et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/PyNAST',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'RivalClub',
    description: 'Find rival clubs in a network (Fernandez et al, 2015) ',
    githubUrl: 'https://github.com/movingpictures83/RivalClub',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'SCIMM',
    description: 'Sequence Clustering with Interpolated Markov Models (Kelley and Salzberg, 2010)',
    githubUrl: 'https://github.com/movingpictures83/SCIMM',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'SIMLR',
    description: 'SIMLR (Wang et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/SIMLR',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'SortMerna',
    description: 'SortMerna (Kopylova et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/SortMerna',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'Spectral',
    description: 'Spectral Clustering (Meila and Shi, 2001)',
    githubUrl: 'https://github.com/movingpictures83/Spectral',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'SumaClust',
    description: 'SumaClust (Mercier et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/SumaClust',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'SWARM',
    description: 'SWARM (Mahe et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/SWARM',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'Tightness',
    description: 'Various tightness measurements for a set of network clusters ',
    githubUrl: 'https://github.com/movingpictures83/Tightness',
    language: 'R',
    category: 'Clustering'
  },
  {
    name: 'TightnessStatistics',
    description: 'Mean and standard deviation of cluster tightness ',
    githubUrl: 'https://github.com/movingpictures83/TightnessStatistics',
    language: 'Python',
    category: 'Clustering'
  },
  {
    name: 'Trie',
    description: 'Trie algorithm of Qiime (Edgar et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/Trie',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'UClust',
    description: 'UClust (Edgar et al, 2010) ',
    githubUrl: 'https://github.com/movingpictures83/UClust',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'UPARSE',
    description: 'UPARSE (Edgar, 2013) algorithm ',
    githubUrl: 'https://github.com/movingpictures83/UPARSE',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'USearch',
    description: 'USearch (Edgar et al, 2010), adds filtering steps to UClust ',
    githubUrl: 'https://github.com/movingpictures83/USearch',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'VSearch',
    description: 'VSearch algorithm (Rognes et al, 2016) for nucleotide-based alignments (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/VSearch',
    language: 'C++',
    category: 'Clustering'
  },
  {
    name: 'AutoCorrelation',
    description: 'Autocorrelation Function Estimate',
    githubUrl: 'https://github.com/movingpictures83/AutoCorrelation',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'CCM',
    description: 'Convergent Cross Mapping (Sugihara et al, 2012)',
    githubUrl: 'https://github.com/movingpictures83/CCM',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'CrossCorrelation',
    description: 'Time-Series Cross-Correlation Values',
    githubUrl: 'https://github.com/movingpictures83/CrossCorrelation',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'CubicSpline',
    description: 'Cubic Spline Interpolation',
    githubUrl: 'https://github.com/movingpictures83/CubicSpline',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'CumulativeClassifier',
    description: 'Classify a set of samples by a set of features, at multiple timepoints',
    githubUrl: 'https://github.com/movingpictures83/CumulativeClassifier',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'CumulativeTime',
    description: 'Choose the best features to use to classify a set of samples, at multiple timepoints.',
    githubUrl: 'https://github.com/movingpictures83/CumulativeTime',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'Detrend',
    description: 'Detrend (Least-Squares Fit, Time Series Data) ',
    githubUrl: 'https://github.com/movingpictures83/Detrend',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'DickeyFuller',
    description: 'Dickey-Fuller Test, Time Series Data (Said and Dickey, 1984) ',
    githubUrl: 'https://github.com/movingpictures83/DickeyFuller',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'Granger',
    description: 'Granger Causality (Granger, 1969) ',
    githubUrl: 'https://github.com/movingpictures83/Granger',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'LIMITS',
    description: 'LIMITS algorithm for inferring correlations across time-series (Fisher and Mehta, 2014) ',
    githubUrl: 'https://github.com/movingpictures83/LIMITS',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'NeuralNet',
    description: 'Neural network for virus classification ',
    githubUrl: 'https://github.com/movingpictures83/NeuralNet',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'RandomForest',
    description: 'Random Forest classifier (Liaw and Wiener, 2002) ',
    githubUrl: 'https://github.com/movingpictures83/RandomForest',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'ReplicationRates',
    description: 'Bacterial Replication Rates (Brown et al, 2016) ',
    githubUrl: 'https://github.com/movingpictures83/ReplicationRates',
    language: 'Python',
    category: 'Time Series'
  },
  {
    name: 'TimeSeries',
    description: 'Form a time-series dataset by merging static and dynamic properties',
    githubUrl: 'https://github.com/movingpictures83/TimeSeries',
    language: 'Python',
    category: 'Time Series'
  },
  {
    name: 'TimeWarp',
    description: 'Perform time warping to align biological data sets to same internal clock ',
    githubUrl: 'https://github.com/movingpictures83/TimeWarp',
    language: 'R',
    category: 'Time Series'
  },
  {
    name: 'AbundanceBin',
    description: 'AbundanceBin binning tool (Wu et al, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AbundanceBin',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'AGEnt',
    description: 'Compute accessory genome using AGent (Ozer et al, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/AGEnt',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Aragorn',
    description: 'Aragorn (Laslett and Canback, 2004) tRNA, mtRNA, and tmRNA gene detector',
    githubUrl: 'https://github.com/movingpictures83/Aragorn',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Atima',
    description: 'Atima (Weick et al, 2000) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Atima',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'BLASTN',
    description: 'Align sequences to a database using Nucleotide-BLAST (Altschul et al, 1990) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BLASTN',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'BLASTP',
    description: 'Align sequences to a database using Protein-BLAST (Altschul et al, 1990) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BLASTP',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'BLSOM',
    description: 'BLSOM unsupervised neural net (Nakao et al, 2013) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BLSOM',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'BMTagger',
    description: 'Find host sequences with BMTagger (Rotmistrovsky and Agarwala, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BMTagger',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'BMTool',
    description: 'Generate bitmask with BMTool (Rotmistrovsky and Agarwala, 2011) (Rotmistrovsky and Agarwala, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/BMTool',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Bowtie',
    description: 'Bowtie sequence alignment and analysis (Langmead et al, 2009) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Bowtie',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Canu',
    description: 'Canu (Koren et al, 2017) long-read genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Canu',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Circlator',
    description: 'Circlator (Hunt et al, 2015) genome circularization (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Circlator',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'ClustAGE',
    description: 'Compute accessory genome using ClustAGE (Ozer et al, 2018) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/ClustAGE',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Cytoscape',
    description: 'Cytoscape Visualizer (Shannon et al, 2003) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Cytoscape',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'DADA2',
    description: 'DADA2 Amplicon Sequence Variant (ASV) Generator (Callahan et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/DADA2',
    language: 'R',
    category: 'External Tools'
  },
  {
    name: 'DIAMOND',
    description: 'DIAMOND  (Buchfink et al, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/DIAMOND',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'FastMRMR',
    description: 'Fast Minimum Redundancy Maximum algorithm (Ramirez-Gallegos et al, 2016) for feature selection (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FastMRMR',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'FASTQC',
    description: 'FASTQC (Andrews) quality control (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FASTQC',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'FastQJoin',
    description: 'FastQJoin (Blankenfeld et al, 2010) for joining paired-end reads (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FastQJoin',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Flye',
    description: 'Flye genome assembly with long reads (Kolmogorov et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/Flye',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'FragGeneScan',
    description: 'FragGeneScan  (Rho et al, 2010) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FragGeneScan',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'HMMER',
    description: 'HMMER  (Finn et al, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/HMMER',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'HUMAnN',
    description: 'HUMAnN (Franzosa et al, 2018) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/HUMAnN',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'IDBA',
    description: 'Iterative De Brujin genome Assembler (Peng et al, 2012) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/IDBA',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Infomap',
    description: 'Infomap (Edler et al., 2017) algorithm for community detection (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Infomap',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'IntegronFinder',
    description: 'Detect integrons in DNA sequences (Cury et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/IntegronFinder',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'IRep',
    description: 'Calculate index of replication (Brown et al, 2016) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/IRep',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'KEGG',
    description: 'Obtain all pathways for an organism in KEGG (Kanehisa and Goto, 2000) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/KEGG',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Kraken2',
    description: 'Metagenomics analysis with Kraken2 (Wood et al, 2019) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Kraken2',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MakeBLASTDB',
    description: 'Make a database of a set of input sequences using BLAST (Altschul et al, 1990) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MakeBLASTDB',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MAUVE',
    description: 'MAUVE (Darling et al, 2004) genome alignment (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MAUVE',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MaxBin',
    description: 'MaxBin (Wu et al, 2014) software for binning reads (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MaxBin',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MegaHit',
    description: 'MegaHit (Li et al, 2015) genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MegaHit',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MEGAN',
    description: 'MEGAN (Huson et al, 2007) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MEGAN',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MelitaSuite',
    description: 'Melita (Jaric et al, 2013) suite of analysis pipelines for degenerate primers',
    githubUrl: 'https://github.com/movingpictures83/MelitaSuite',
    language: 'Python',
    category: 'External Tools'
  },
  {
    name: 'MetaBAT',
    description: 'MetaBAT (Kang et al, 2015) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaBAT',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MetaCluster',
    description: 'MetaCluster (Yang et al, 2010) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaCluster',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MetaPhlAn',
    description: 'MetaPhlAn (Truong et al, 2015) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaPhlAn',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MetaSPAdes',
    description: 'PluMA plugin to run MetaSPAdes (Nurk et al, 2017) genome assembler (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MetaSPAdes',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Mothur',
    description: 'Mothur (Schloss, 2009) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Mothur',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'MUSCLE',
    description: 'MUltiple Sequence Comparison by Log-Expectation (MUSCLE) (Edgar et al, 2004) alignment tool',
    githubUrl: 'https://github.com/movingpictures83/MUSCLE',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Network',
    description: 'Represent samples as a network, with dissimilarity as edge weights',
    githubUrl: 'https://github.com/movingpictures83/Network',
    language: 'R',
    category: 'External Tools'
  },
  {
    name: 'ParSNP',
    description: 'Core genome alignment and SNP detection using ParSNP (Treangen et al, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/ParSNP',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'PathwayTools',
    description: 'Get data from the PathwayTools (Karp et al, 2015) database',
    githubUrl: 'https://github.com/movingpictures83/PathwayTools',
    language: 'Python',
    category: 'External Tools'
  },
  {
    name: 'PICRUSt',
    description: 'Phylogenetic Investigation of Communities by Reconstruction of Unobserved States (PICRUSt) (Lamille et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/PICRUSt',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Prank',
    description: 'Perform multiple sequence alignment with Prank (Loytynoja, 2014)',
    githubUrl: 'https://github.com/movingpictures83/Prank',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Prodigal',
    description: 'PROkayotic DYnamic programming Gene-finding ALgorithm (Prodigal) (Hyatt et al, 2010)',
    githubUrl: 'https://github.com/movingpictures83/Prodigal',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Prokka',
    description: 'Genome annotation using Prokka (Seemann et al, 2014)',
    githubUrl: 'https://github.com/movingpictures83/Prokka',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'RAxML',
    description: 'Random Axelerating Maximum Likelihood (Stamatkis, 2014) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/RAxML',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'RDPClassify',
    description: 'Classify sequences using the RDP (Wang et al, 2007) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/RDPClassify',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'ReciprocalBLAST',
    description: 'Run ReciprocalBLAST on two outputs from BLAST (Ward, 2014)',
    githubUrl: 'https://github.com/movingpictures83/ReciprocalBLAST',
    language: 'Python',
    category: 'External Tools'
  },
  {
    name: 'Redbiom',
    description: 'Query the Earth Microbiome Project (EMP, Thompson et al 2017) with Redbiom (McDonald et al, 2019) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Redbiom',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'SPAdes',
    description: 'SPAdes (Bankevich et al, 2012) genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/SPAdes',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'SKESA',
    description: 'SKESA (Souvorov et al, 2018) genome assembly (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/SKESA',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Spine',
    description: 'Spine (Ozer et al, 2014) core and accessory genome determination',
    githubUrl: 'https://github.com/movingpictures83/Spine',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'SplitMEM',
    description: 'SplitMEM (Marcus et al, 2014) pangenome analysis',
    githubUrl: 'https://github.com/movingpictures83/Spine',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'SRPRISM',
    description: 'Single Read Paired Read Indel Substitution Minimizer (SRPRISM) (Morgulis and Agarwala, 2020) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/SRPRISM',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'SynerClust',
    description: 'SynerClust (Georgescu et al, 2018) orthologue clustering tool',
    githubUrl: 'https://github.com/movingpictures83/SynerClust',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Tax2Tree',
    description: 'Tax2Tree (McDonald et al, 2011) (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/Tax2Tree',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'TetraESOM',
    description: 'Tetramer frequencies, input to ESOM (Dick, 2009) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/TetraESOM',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'TrimGalore',
    description: 'Trim sequences with trim-galore (Krueger, 2015) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/TrimGalore',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Trimmomatic',
    description: 'Trim Illumina paired-end reads using Trimmomatic (Bolger et al, 2014) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/Trimmomatic',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Unicycler',
    description: 'Unicycler genome assembly (Wick et al, 2017) (Generated by PluGen).',
    githubUrl: 'https://github.com/movingpictures83/Unicycler',
    language: 'C++',
    category: 'External Tools'
  },
  {
    name: 'Amplicon',
    description: 'Find organisms that produce a product when PCR is executed on a given primer pair',
    githubUrl: 'https://github.com/movingpictures83/Amplicon',
    language: 'Perl',
    category: 'Miscellaneous'
  },
  {
    name: 'ASVAssign',
    description: 'Assign Amplicon Sequence Variants (Callahan et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/ASVAssign',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'BarabasiAlbert',
    description: 'Generate synthetic network (Barabasi and Albert, 1999)',
    githubUrl: 'https://github.com/movingpictures83/BarabasiAlbert',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'Caffe',
    description: 'Deep learning through Convolutional Architecture for Fast Feature Embedding (Fajet et al, 2019) ',
    githubUrl: 'https://github.com/movingpictures83/Caffe',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'CNN',
    description: 'Convolutional Neural Network (Lawrence et al, 1996)',
    githubUrl: 'https://github.com/movingpictures83/CNN',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'CSVCheck',
    description: 'Check for validity, and number of observables',
    githubUrl: 'https://github.com/movingpictures83/CSVCheck',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'Classify',
    description: 'Phylogenetic OTU Classifier',
    githubUrl: 'https://github.com/movingpictures83/Classify',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'CoreGenome',
    description: 'Compute core genome over a series of FASTA sequences',
    githubUrl: 'https://github.com/movingpictures83/CoreGenome',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'DNN',
    description: 'Deep Neural Network (Nakamoto, 2017)',
    githubUrl: 'https://github.com/movingpictures83/DNN',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'ErdosRenyi',
    description: 'Generate synthetic network (Erdos and Renyi, 1959)',
    githubUrl: 'https://github.com/movingpictures83/ErdosRenyi',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'FCI',
    description: 'Fast Causal Inference (Spirtes et al, 1993)',
    githubUrl: 'https://github.com/movingpictures83/FCI',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'FeatureClassify',
    description: 'Qiime 2 (Bolyen et al, 2019) feature classifier (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/FeatureClassify',
    language: 'C++',
    category: 'Miscellaneous'
  },
  {
    name: 'GeneUnify',
    description: 'Unify gene expression values across multiple files',
    githubUrl: 'https://github.com/movingpictures83/GeneUnify',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'GetKraken',
    description: 'Download Kraken (Wood and Salzberg, 2014) database',
    githubUrl: 'https://github.com/movingpictures83/GetKraken',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUAPriori',
    description: 'APriori method for most common subsets (Alemany et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUAPriori',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUBisection',
    description: 'Bisection method (Jardines et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUBisection',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUDijkstra',
    description: "Dijkstra's algorithm for shortest paths (Fernandez et al, 2016)",
    githubUrl: 'https://github.com/movingpictures83/GPUDijkstra',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUDePiCt',
    description: 'Degenerate primers on the GPU (Cickovski et al, 2015)',
    githubUrl: 'https://github.com/movingpictures83/GPUDePiCt',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUGraceful',
    description: 'Graceful labeling of a graph (Lopez et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPUGraceful',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUKMM',
    description: 'KMM, on the GPU',
    githubUrl: 'https://github.com/movingpictures83/GPUKMM',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUKruskal',
    description: "Kruskal's Algorithm on the GPU (Garcia-Cruz et al, 2016)",
    githubUrl: 'https://github.com/movingpictures83/GPUKruskal',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUPhyllotaxis',
    description: 'Phyllotaxis model on the GPU (Lopez et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/GPUPhyllotaxis',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUPrim',
    description: "Prim's Algorithm for minimum spanning trees (Celli et al, 2016)",
    githubUrl: 'https://github.com/movingpictures83/GPUPrim',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPURiemann',
    description: 'Riemann sums on the GPU (Sanchez et al, 2016)',
    githubUrl: 'https://github.com/movingpictures83/GPURiemann',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'GPUTrapezoiod',
    description: 'Trapezoid method on the GPU (Nunez et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/GPUTrapezoid',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'KMM',
    description: 'k-Markov Model for Metagenomics',
    githubUrl: 'https://github.com/movingpictures83/KMM',
    language: 'C++',
    category: 'Miscellaneous'
  },
  {
    name: 'LINGAM',
    description: 'Linear Non-Gaussian Acyclic Model (LINGAM) for Causal Discovery (Shimizu et al, 2006)',
    githubUrl: 'https://github.com/movingpictures83/LINGAM',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'MakeCliques',
    description: 'Make a Network of Cliques (Python)',
    githubUrl: 'https://github.com/movingpictures83/MakeCliques',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'MakeScaleFree',
    description: 'Make a Scale-Free Network (Albert and Barabasi, 2002)',
    githubUrl: 'https://github.com/movingpictures83/MakeScaleFree',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'MakeSynthetic',
    description: 'Make a Synthetic Network',
    githubUrl: 'https://github.com/movingpictures83/MakeSynthetic',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'MakeSynthetic2',
    description: 'Make a Synthetic Network (more complex)',
    githubUrl: 'https://github.com/movingpictures83/MakeSynthetic2',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'MEDUSA',
    description: 'MEDUSA (Bosi et al, 2015) genome scaffolding (Generated by PluGen)',
    githubUrl: 'https://github.com/movingpictures83/MEDUSA',
    language: 'C++',
    category: 'Miscellaneous'
  },
  {
    name: 'Microarray',
    description: 'Process microarray data, generate gene expression levels',
    githubUrl: 'https://github.com/movingpictures83/Microarray',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'MIMOSA',
    description: 'Data fitting through MIMOSA (Finak et al, 2013)',
    githubUrl: 'https://github.com/movingpictures83/MIMOSA',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'MINT',
    description: 'Multivariate INTegration (Rohart et al, 2017) ',
    githubUrl: 'https://github.com/movingpictures83/MINT',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'NorTA',
    description: 'Normal-To-Anything algorithm',
    githubUrl: 'https://github.com/movingpictures83/NorTA',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'ORF',
    description: 'Open Reading Frames (ORFs)',
    githubUrl: 'https://github.com/movingpictures83/ORF',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'PC',
    description: 'PC algorithm for causal structure (Spirtes et al, 2000)',
    githubUrl: 'https://github.com/movingpictures83/PC',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'PCMCI',
    description: 'PCMCI algorithm for time-series data (Runge et al, 2019)',
    githubUrl: 'https://github.com/movingpictures83/PCMCI',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'PCStable',
    description: 'PC-Stable algorithm for causal structure (Colombo and Matthuis, 2014)',
    githubUrl: 'https://github.com/movingpictures83/PCStable',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'Qiime2DADA2',
    description: 'Qiime2, with DADA2 denoising',
    githubUrl: 'https://github.com/movingpictures83/Qiime2DADA2',
    language: 'C++',
    category: 'Miscellaneous'
  },
  {
    name: 'QueryPathways',
    description: 'Obtain all metabolic pathways involving a single or pair of taxa/metabolites.',
    githubUrl: 'https://github.com/movingpictures83/QueryPathways',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'RBM',
    description: 'Restricted Boltzmann Machine (Smolensky et al, 1986)',
    githubUrl: 'https://github.com/movingpictures83/RBM',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'RNN',
    description: 'Recurrent Neural Network (Williams et al, 1986)',
    githubUrl: 'https://github.com/movingpictures83/RNN',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'Reactome',
    description: 'Query the Reactome database (Fabregat et al, 2017)',
    githubUrl: 'https://github.com/movingpictures83/Reactome',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'ReadingFrame',
    description: 'Compute reading frames between genes',
    githubUrl: 'https://github.com/movingpictures83/ReadingFrame',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'STRING',
    description: 'Query the STRING database (Szklarczyk et al, 2011)',
    githubUrl: 'https://github.com/movingpictures83/STRING',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'SVARS',
    description: 'Calculate counterfactuals using SVARS (Kilian et al, 1998)',
    githubUrl: 'https://github.com/movingpictures83/SVARS',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'SVM',
    description: 'Support Vector Machine (Hearst, 1998)',
    githubUrl: 'https://github.com/movingpictures83/SVM',
    language: 'R',
    category: 'Miscellaneous'
  },
  {
    name: 'TopMatch',
    description: 'Obtain FASTA file containing the top match of a BLAST (Altschul et al, 1990) query',
    githubUrl: 'https://github.com/movingpictures83/TopMatch',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'Velvet',
    description: 'Velvet (Zerbino and Birney, 2008) de Novo Assembly',
    githubUrl: 'https://github.com/movingpictures83/Velvet',
    language: 'CUDA',
    category: 'Miscellaneous'
  },
  {
    name: 'WattsStrogatz',
    description: 'Generate synthetic network (Watts and Strogatz, 1998)',
    githubUrl: 'https://github.com/movingpictures83/WattsStrogatz',
    language: 'Python',
    category: 'Miscellaneous'
  },
  {
    name: 'WikiPathway',
    description: 'Query the WikiPathway database (Pico et al, 2008)',
    githubUrl: 'https://github.com/movingpictures83/WikiPathway',
    language: 'Python',
    category: 'Miscellaneous'
  }
];