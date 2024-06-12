import { stdin } from 'node:process'
import { readFile } from 'node:fs/promises'
import { Command } from 'commander'
import { version } from '../package.json'

export function readPipelineData(): Promise<string> {
  return new Promise<string>((resolve) => {
    let buff: string = ''
    stdin
      .on('data', (data) => buff += data)
      .on('end', () => resolve(buff))
  })
}

export async function readContent(src: string | undefined): Promise<string> {
  let content: string
  if (stdin.isTTY === true) {
    if (src) {
      content = await readFile(src, { encoding: 'utf-8' })
    } else {
      throw new Error('Missing input file')
    }
  } else {
    content = await readPipelineData()
    // if (src) {
    //   options.output = src
    // }
  }
  return content
}

export function stdCmd(cmd: Command): Command {
  return cmd
    .version(version)
    .argument('[input]', 'Input file path, this parameter has no effect when running in a pipeline')
    .option('-o, --output <path>', 'Output file path, if not specified, output to stdout')
}