import test from 'ava'

import generatePreviewHead from '../../../../lib/nunjucks/generate-preview-head'
import store from '../../../../lib/store'

const stateBackup = Object.assign({}, store.state)

test.afterEach('cleanup', t => {
  delete process.env.PANGOLIN_ENV
  Object.assign(store.state, stateBackup)
})

test.serial('generates dev template', t => {
  store.state.config = {}
  process.env.PANGOLIN_ENV = 'dev'
  const template = generatePreviewHead()

  t.snapshot(template)
})

test.serial('generates build:dev template', t => {
  store.state.config = { project: { base: '/test/' } }
  process.env.PANGOLIN_ENV = 'build:dev'
  const template = generatePreviewHead()

  t.snapshot(template)
})

test.serial('generates modern build:dev template', t => {
  store.state.config = { project: { base: '/test/' } }
  store.state.modern = true
  process.env.PANGOLIN_ENV = 'build:dev'
  const template = generatePreviewHead()

  t.snapshot(template)
})
