async () => {
  if (!config.examples.scheduler) return;
  if (app.worker.id !== 'W1') return;
  const res = await app.scheduler.add({
    name: 'name',
    every: 'Oct 19th 10s',
    args: { i: 2 },
    run: 'lib.task1.f1',
  });
  console.log('Add task', res);
};
