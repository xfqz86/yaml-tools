import { writeFile } from 'node:fs/promises'
import { exit, stderr, stdout, argv } from 'node:process'
import { program } from 'commander'
import { stringify } from 'yaml'
import { readContent, stdCmd } from './std'

stdCmd(program)
  .name('json2yaml')
  .description('Convert JSON to YAML')
  .action(async (input, options) => {
    try {
      const content = await readContent(input)
      const dataObj = JSON.parse(content)
      const dataYAML = stringify(dataObj)
      if (options.output) {
        await writeFile(options.output, dataYAML, { encoding: 'utf-8' })
      } else {
        stdout.write(dataYAML)
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
