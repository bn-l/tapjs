import { LoadedConfig } from '@tapjs/config'
import { TAP, TestBase } from '@tapjs/core'
import { render } from 'ink'
import React, { FC } from 'react'
import { Base } from './base.js'
import * as components from './components.js'
import * as hooks from './hooks.js'
import { Terse } from './terse.js'
import * as utils from './utils.js'

export { Base, Terse, hooks, components, utils }

export interface TapReportOpts {
  test: TestBase
  config: LoadedConfig
}

export const types: Record<string, FC<TapReportOpts>> = {}
export const addType = (name: string, report: FC<TapReportOpts>) => {
  types[name] = report
}
addType('base', Base)
addType('terse', Terse)

export const report = async (
  Type: string | React.FC<TapReportOpts>,
  tap: TAP,
  config: LoadedConfig
): Promise<boolean> => {
  if (typeof Type === 'string') {
    if (!types.hasOwnProperty(Type)) {
      throw new TypeError(`unknown report type: ${Type}`)
    }
    Type = types[Type]
  }
  tap.register()
  // always show the cursor when we finish
  tap.on('complete', () => process.stdout.write('\x1b[?25h'))
  render(<Type test={tap} config={config}></Type>, {
    patchConsole: false,
  })

  // give it a turn of the event loop to mount before doing tap stuff
  return new Promise<true>(r => setTimeout(() => r(true)))
}
