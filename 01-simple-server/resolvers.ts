
function helloWorld() {
  return "Hello Deno!";
}

// deno-lint-ignore no-explicit-any
function hello(_: any, { name }: { name: string }) {
  return `Hello ${name}!`;
}

// deno-lint-ignore no-explicit-any
function sum2(_: any, { a, b }: { a: number, b: number }) {
  return a+b;
}


function multiply(_: any, args) {
  console.log('multiply', JSON.stringify(args, null, 2))
  return { 
    num: (args.x * args.y),
    greeting: "Hi from server!"
  };
}

function minus(_: any, args: { a: number, b: number }) {
  return args.a - args.b;
}


const resolvers = {
  Query: {
    sum2,
    helloWorld,
    hello,
    minus,
    multiply
  },
};

export { resolvers };
