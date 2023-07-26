#!/usr/bin/env node
//@ts-ignore
process.setSourceMapsEnabled(true)
import { LoadedConfig } from '@tapjs/config'
import { build } from './build.js'
import { dumpConfig } from './dump-config.js'
import { help } from './help.js'
import { list } from './list.js'
import { plugin } from './plugin.js'
import { report } from './report.js'
import { run } from './run.js'
import { version } from './version.js'
import { repl } from './repl.js'

export type JackLoaded = LoadedConfig['jack']
export type ConfigValues = LoadedConfig['values']

import { args, config, mainCommand } from './main-config.js'

process.title = 'tap'

switch (mainCommand) {
  case 'help':
    help(args, config)
    break
  case 'versions':
  case 'version':
    version(args, config)
    break

  case 'repl':
    repl(args, config)
    break

  case 'run':
    run(args, config)
    break

  case 'build':
    build(args, config)
    break

  case 'report':
    report(args, config)
    break

  // XXX: should really make this `tap config list`
  // and have commands for setting/getting individual fields
  case 'dump-config':
    dumpConfig(args, config)
    break

  case 'plugin':
    plugin(args, config)
    break

  case 'list':
    list(args, config)
    break
}
