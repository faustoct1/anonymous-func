const test = async () => {
  const anonimo1 = () => {
    console.log('anonimo1')
  };
  anonimo1();

  (() => {
    console.log('anonimo2')
  })();

  const anonimo3 = async () => {
    console.log('anonimo3 async')
  };
  await anonimo3();

  await (async () => {
    console.log('anonimo4 async')
  })();
}

(async ()=>{ test() })()
