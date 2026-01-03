async () => {
  if (!config.examples.invoke) return;
  if (app.worker.id !== 'W1') return;
  const res = await app.invoke({
    method: 'lib.invoke1.method1',
    args: { key: 'value' },
    exclusive: true,
  });
  console.log('Invoke example', res);
};
