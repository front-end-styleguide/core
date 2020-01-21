const path = require('path')
const test = require('ava')

const resolveBin = require('../../../../lib/utils/resolve-bin')

test('resolves binary for module', t => {
  const actual = resolveBin('ava')
  const expected = path.resolve('node_modules/ava/cli.js')

  t.is(actual, expected)
})
