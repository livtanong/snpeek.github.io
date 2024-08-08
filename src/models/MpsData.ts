interface SnpGenotype {
  allele: string // By my understanding, CT == TC, so we can enforce a standard.
  magnitude: number // positive numbers are good, negative numbers are pathogenic
  phenotypes: string[] // basically like tags, since I noticed some genotypes have multiple effects
  notes: string // To add context, in case a phenotype has very conditional expression
}
interface Snp {
  rsid: string
  gene: string
  genotypes: SnpGenotype[]
  notes: string // just in case.
}
type MpsData = List<Snp>
