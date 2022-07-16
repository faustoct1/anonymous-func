const test = async () => {
  const anonymous1 = () => {
    console.log('anonimo1')
  };
  anonymous1();

  (() => {
    console.log('anonimo2')
  })();

  const anonymous3 = async () => {
    console.log('anonimo3 async')
  };
  await anonymous3();

  await (async () => {
    console.log('anonimo4 async')
  })();
}

(async ()=>{ test() })()
