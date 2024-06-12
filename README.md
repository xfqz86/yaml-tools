yaml-tools
======

A command-line utility to convert YAML to JSON or JSON to YAML.

Installation
===

```bash
npm install -g @xiyi-tech/yaml-tools
```

How use
===

### YAML to JSON use `yaml2json`

```bash
## yaml2json --help

Usage: yaml2json [options] [input]

Convert YAML to JSON

Arguments:
  input                Input file path, this parameter has no effect when running in a pipeline

Options:
  -V, --version        output the version number
  -o, --output <path>  Output file path, if not specified, output to stdout
  -f, --format         Format output json
  -h, --help           display help for command
```

### JSON to YAML use `json2yaml`

```bash
## json2yaml --help

Usage: json2yaml [options] [input]

Convert JSON to YAML

Arguments:
  input                Input file path, this parameter has no effect when running in a pipeline

Options:
  -V, --version        output the version number
  -o, --output <path>  Output file path, if not specified, output to stdout
  -h, --help           display help for command
```

Example
===

```bash
# input from file, output to stdout
yaml2json ./example.yaml

# input from file, output to file
yaml2json ./example.yaml -o ./example.json

# input from pipline, out to stdout
cat ./example.yaml | yaml2json

# input from pipline, out to file
cat ./example.yaml | yaml2json -o ./example.json
```

