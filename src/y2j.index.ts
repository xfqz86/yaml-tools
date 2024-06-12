import { writeFile } from 'node:fs/promises'
import { exit, stderr, stdout, argv } from 'node:process'
import { program } from 'commander'
import { parse } from 'yaml'
import { readContent, stdCmd } from './std'

stdCmd(program)
  .name('yaml2json')
  .description('Convert YAML to JSON')
  .option('-f, --format', 'Format output')
  .action(async (input, options) => {
    try {
      const content = await readContent(input)
      const dataObj = parse(content)
      const dataJSON = JSON.stringify(dataObj, null, options.format ? 2 : undefined)
      if (options.output) {
        await writeFile(options.output, dataJSON, { encoding: 'utf-8' })
      } else {
        stdout.write(dataJSON)
      }
    }
    catch (error) {
      if (error instanceof Error)
        stderr.write(error.message)
      else if (typeof error === 'string')
        stderr.write(error)
      exit(1)
    }
  })
  .parse(argv)
