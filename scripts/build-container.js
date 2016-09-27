import minimist from 'minimist'
import container from '../container'

const argv = minimist(process.argv.slice(2))
process.stdout.write(`${container(argv)}\n`)
