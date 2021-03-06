const astBuilder = require('./src/ast')
const Environment = require('./src/eval/environment')
const evaluate = require('./src/eval')
const { outputAstToConsole, outputEnv } = require('./utils/output')

const testMembersExprCode = `
  test t = [
    title: "My first test",
  ]
  question q1 = [
    description: "What's your name?",
  ]
  question q2 = [
    description: "How old are you?",
  ]
  question q3 = []
  t->questions->add(q1)
  t->questions->add(q2)
  t->questions->add(q3)
  t->questions->remove(q3)

  # print("amount", t->questions->amount) 2

  if (t->questions->amount > 1) {
    print("questions amount more than 1")
  }

  t->answers->add([
    id: 1,
    q1: "Vadim",
    q2: "21",
  ])

  t->answers->add([
    id: 2,
    q1: "Max",
    q2: "25",
  ])

  forEach(t->questions->items as q) {
    print(q->description)
  }

  forEach(t->answers->items as a) {
    print(q1->description, a->q1)
  }
`

const globalEnv = new Environment()

const astOfTestMembersExprCode = astBuilder(testMembersExprCode)
// outputAstToConsole(astOfTestMembersExprCode, testMembersExprCode)
evaluate(astOfTestMembersExprCode, globalEnv)
// outputEnv(globalEnv)
// console.log('globalEnv', globalEnv)
